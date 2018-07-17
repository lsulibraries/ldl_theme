<?php

/**
 * @file
 * This is the template file for the object page for newspaper
 *<div class='issue-date'>Issue Date (pre-formatted): <?php print $issue['formatted-date']; ?></div>
 * Available variables:
 * - $islandora_content: A rendered vertical tabbed newspapper issue browser.
 * - $parent_collections: An array containing parent collection IslandoraFedoraObject(s).
 * - $description: Rendered metadata descripton for the object.
 * - $metadata: Rendered metadata display for the binary object.
 *
 * @see template_preprocess_islandora_newspaper()
 */


?>
<script src="/sites/all/libraries/JAIL/src/jail.js">
</script>

<div class='item_header'>
  <div class='backgroundDiv'/>
  <div class='item_headerMenu'/>
</div>
<div class="islandora-newspaper-object islandora">
  <div class="islandora-newspaper-content-wrapper clearfix">
    <?php if (isset($issues)): ?>
              <div class='total-issue-count'>This newspaper contains <?php print $totalIssueCount; ?> issues across <?php print $totalYearCount; ?> years.</div>
      <div class="islandora-newspaper-navigation">
        <div class="newsSelect yearSelect activeSelect">
          <span>Step 1: Select Year</span>
        </div>
        <div class="newsSelect monthSelect">
          <span>Step 2: Select Month</span>
        </div>
        <div class="newsSelect issueSelect">
          <span>Step 3: Select Issue</span>
        </div>
        <div class="newsIndicator">
          <div class="activeIndicator"></div>
        </div>
        </div>
      </div>
      <div class="islandora-newspaper-grid">
        <?php foreach ($issues as $year => $data): ?>
          <div class="publication-year-container viewYears">
            <div class="selectBack yearBack">
              <span class="backText">Back</span>
              <span class="backShape"></span>
            </div>
            <div class="selectBack monthBack">
              <span class="backText">Back</span>
              <span class="backShape"></span>
            </div>

            <div class="publication-year-container-label">
              <span class="publication-year"><?php print $year; ?></span>
              <span class="issues-year-total"><?php print $data['issue-count']; ?> issues</span>
            </div>
            <div class="issuePreview">
              <div class="monthPrompt">
                <span>Select a month</span>
              </div>
              <div class="dayPrompt">
                <span>Select a day</span>
              </div>
            </div>
            <div class="months-container">
              <?php foreach ($data['months'] as $month => $data): ?>
                <div class="month-container no-calendar">
                  <div class='month-container-label <?php if (array_key_exists('multi', $data)): ?>hasMultipleDaily <?php endif; ?>'>
                    <span class='month-container-label-month'>
                      <?php print $month; ?>
                    </span>
                    <span class='month-container-label-count'>
                      <?php print $data['count']; ?> issues
                    </span>
                    <div class='month-issues-container'>
                      <?php foreach ($data['issues'] as $issue): ?>
                        <div class='issue-container'>

                          <a href="/islandora/object/<?php print $issue['pid']; ?>">
                            <div class='issue-label'><?php print $issue['label']?></div>
                            <div class='issue-date'><?php print $issue['formatted-date']; ?></div>
                          </a>
                          <img data-src="/islandora/object/<?php print $issue['cover-pid']; ?>/datastream/JPG/view" src="#" class="lazy"></a>
                        </div>
                        <div class='date-year'><?php print $issue['formatted-date-year']; ?></div>
                        <div class='date-month'><?php print $issue['formatted-date-month']; ?></div>
                        <div class='date-day'><?php print $issue['formatted-date-day']; ?></div>
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
