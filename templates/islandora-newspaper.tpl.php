<?php

/**
 * @file
 * This is the template file for the object page for newspaper
 *
 * Available variables:
 * - $islandora_content: A rendered vertical tabbed newspapper issue browser.
 * - $parent_collections: An array containing parent collection IslandoraFedoraObject(s).
 * - $description: Rendered metadata descripton for the object.
 * - $metadata: Rendered metadata display for the binary object.
 *
 * @see template_preprocess_islandora_newspaper()
 */
?>
<div class="islandora-newspaper-object islandora">
  <div class="islandora-newspaper-content-wrapper clearfix">
    <?php if ($issues): ?>
              <div class='total-issue-count'>This newspaper contains <?php print $totalIssueCount; ?> issues across <?php print $totalYearCount; ?> years.</div>
      <div class="islandora-newspaper-navigation">
        <div class="newsSelect yearSelect">
          <span>Select Year</span>
        </div>
        <div class="newsSelect monthSelect">
          <span>Select Month</span>
        </div>
        <div class="newsSelect issueSelect">
          <span>Select Issue</span>
        </div>
        <div class="newsIndicator">
          <div class="activeIndicator"></div>
        </div>        
        </div>
      </div>
      <div class="islandora-newspaper-grid">
        <?php foreach ($issues as $year => $data): ?>
          <div class="publication-year-container">
            <div class="publication-year-container-label">
              <span class="publication-year"><?php print $year; ?></span>
              <span class="issues-year-total"><?php print $data['issue-count']; ?> issues</span>
            </div>
            <div class="months-container">
              <?php foreach ($data['months'] as $month => $data): ?>
                <div class="month-container">
                  <div class='month-container-label'>
                    <span class='month-container-label-month'>Month:
                      <?php print $month; ?>
                    </span>
                    <span class='month-container-label-count'>Month count:
                      <?php print $data['count']; ?>
                    </span>
                    <div class='month-issues-container'>
                      <?php foreach ($data['issues'] as $issue): ?>
                        <div class='issue-container'>
                          <div class='issue-label'>Issue label: <?php print $issue['label']; ?></div>
                          <div class='issue-href'>/islandora/object/<?php print $issue['pid']; ?></div>
                          <div class='issue-date'>Issue Date (pre-formatted): <?php print $issue['formatted-date']; ?></div>
                        </div>
                      <?php endforeach; ?>
                    </div>
                  </div>
                </div>
              <?php endforeach; ?>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>
  <div class="islandora-newspaper-metadata">
    <?php print $description; ?>
    <?php if ($parent_collections): ?>
      <div>
        <h2><?php print t('In collections'); ?></h2>
        <ul>
          <?php foreach ($parent_collections as $collection): ?>
        <li><?php print l($collection->label, "islandora/object/{$collection->id}"); ?></li>
          <?php endforeach; ?>
        </ul>
      </div>
    <?php endif; ?>
    <?php print $metadata; ?>
  </div>
