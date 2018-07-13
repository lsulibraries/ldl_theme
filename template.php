<?php

/**
 * Prepares variables for islandora_newspaper templates.
 *
 * Default template: islandora-newspaper.tpl.php.
 *
 * @param array $variables
 *   An associative array containing:
 *   - object: An AbstractObject for which to generate the display.
 */
function alpha_preprocess_islandora_newspaper(array &$variables) {

  $issues = [];
  $grouped_issues = islandora_newspaper_group_issues(
    islandora_newspaper_get_issues($variables['object'])
  );
  $issueTotal = 0;
  $yearTotal = 0;
  foreach($grouped_issues as $year => $months) {
    $yearTotal++;
    $nest[$year]['months'] = [];
    $nest[$year]['issue-count'] = 0;
    $month_enum = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    foreach($month_enum as $num) {
      $month = date("M", mktime(0, 0, 0, $num, 1, 2000));
      $nest[$year]['months'][$month]['issues'] = [];
      if(array_key_exists($num, $months)) {
        $days = $months[$num];
      }
      else {
        $days = [];
      }
      foreach ($days as $day => $issues) {
        foreach ($issues as $issue) {
          $issue['formatted-date'] = $issue['issued']->format('m/d/Y');
          $issue['formatted-date-year'] = $issue['issued']->format('Y');
          $issue['formatted-date-month'] = $issue['issued']->format('m');
          $issue['formatted-date-day'] = $issue['issued']->format('d');
          $issue['cover-pid'] = newspaper_issue_first_page_pid($issue['pid']);
          $nest[$year]['months'][$month]['issues'][] = $issue;

        }
      }
      $mounthIssues = count($nest[$year]['months'][$month]['issues']);
      $nest[$year]['months'][$month]['count'] = $mounthIssues;
      if (count($issues) > 1) {
          $nest[$year]['months'][$month]['multi'] = TRUE;
      }
      $nest[$year]['issue-count'] += $mounthIssues;
      $issueTotal += $mounthIssues;
    }
    $variables['issues'] = $nest;

  }
  if(array_key_exists('issues', $variables)) {
    ksort($variables['issues']);
  }
  $variables['totalIssueCount'] = $issueTotal;
  $variables['totalYearCount'] = $yearTotal;
}

function newspaper_issue_first_page_pid($pid) {
  $query = <<<EOQ
  PREFIX islandora-rels-ext: <http://islandora.ca/ontology/relsext#>
    SELECT ?pid
    FROM <#ri>
    WHERE {
      ?pid <fedora-rels-ext:isMemberOf> <info:fedora/$pid> ;
           islandora-rels-ext:isSequenceNumber '1' ;
           <fedora-model:state> <fedora-model:Active> .

    }
EOQ;
  $connection = islandora_get_tuque_connection();

  $results = $connection->repository->ri->sparqlQuery($query);

  // Get rid of the "extra" info...
  $map = function($o) {
    foreach ($o as $key => &$info) {
      $info = $info['value'];
    }

    $o = array_filter($o);

    return $o;
  };
  $pages = array_map($map, $results);

  // Grab the PIDs...
  $get_pid = function($o) {
    return $o['pid'];
  };
  $pids = array_map($get_pid, $pages);
  return $pids[0];
}

function alpha_preprocess_islandora_large_image(&$variables) {

  $pid = $variables['islandora_object']->id;
  $variables['downloads'] = array();
  module_load_include('inc', 'islandora', 'includes/datastream');
  foreach($variables['islandora_object'] as $ds) {
    if(in_array($ds->id, array('RELS-EXT', 'TN', 'MODS', 'DC', 'OBJ', 'JP2', 'TECHMD'))) {
      continue;
    }
    $variables['downloads'][$ds->id] = array(
      'href' => "/islandora/object/$pid/datastream/$ds->id/download",
      'size' => islandora_datastream_get_human_readable_size($ds),
      'label' => $ds->label,
    );
  }
}

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 *
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */

function alpha_preprocess_islandora_basic_collection_wrapper(&$variables) {
  $page_number = (empty($_GET['page'])) ? 0 : $_GET['page'];
  $page_size = (empty($_GET['pagesize'])) ? variable_get('islandora_basic_collection_page_size', '12') : $_GET['pagesize'];
  $islandora_object = $variables['islandora_object'];
  list($total_count, $results) = islandora_basic_collection_get_member_objects($islandora_object, $page_number, $page_size);
  $variables['total_count'] = $total_count;

  $pidParts = explode(':', $islandora_object->id);
  $pid = $pidParts[0];


  $result = db_query("select u.alias, n.title "
      . "from field_revision_field_lp_pid f "
      . "join node n on f.revision_id = n.vid "
      . "join url_alias u "
      . "where field_lp_pid_value = :pid "
      . "and u.source = CONCAT('node/',n.nid)", array(':pid' => $pid));
  $record = $result->fetchAssoc();
  $variables['about_link'] = l($record['title'], $record['alias']);
  $variables['landing_page_title'] = $record['title'];

  // Hack ! to patch the display weirdness that happens with multiple 'dc:description' fields.
  // This is not ideal- arbitrarily prefers the first dc:description field.
  try {
    $dc = $islandora_object['DC']->content;
    $dc_object = DublinCore::importFromXMLString($dc);
  }
  catch (Exception $e) {
    drupal_set_message(t('Error retrieving object %s %t', array('%s' => $islandora_object->id, '%t' => $e->getMessage())), 'error', FALSE);
  }
  $variables['islandora_dublin_core'] = isset($dc_object) ? $dc_object : NULL;

  if(count($dc_object->dc['dc:description']) > 1) {
    $dc_object->dc['dc:description'] = array($dc_object->dc['dc:description'][0]);
  }

  $variables['dc_array'] = isset($dc_object) ? $dc_object->asArray() : array();
}

function alpha_preprocess_html(&$vars) {
  $path = drupal_get_path_alias();
  $aliases = explode('/', $path);
  foreach ($aliases as $segment) {
    if (strpos($segment, '-') && strpos($segment, ':')) {
      $pid_segments = explode(':', $segment);
      $namespace = $pid_segments[0];
      if ($pid_segments[1] == 'collection') {
        $vars['classes_array'][] = 'collectionPage';
      }

      $ns_segments = explode('-', $namespace);
      array_pop($ns_segments);
      $ns_prefix = implode('-', $ns_segments);
      $vars['classes_array'][] = $ns_prefix . 'Theme';
      break;
    }
  }
}
