<?php

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
function  alpha_preprocess_islandora_basic_collection_grid(&$variables){
    uasort($variables['associated_objects_array'], 'cmp');
}


function cmp($a, $b){
  return strnatcasecmp($a['title'],$b['title']);    
}


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
