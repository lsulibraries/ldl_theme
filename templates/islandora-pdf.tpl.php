<?php

/**
 * @file
 * This is the template file for the pdf object
 *
 * @TODO: Add documentation about this file and the available variables
 */
?>
<script>
document.body.className += ' ' + 'pdf';
</script>

  <div class="pdf-thumbnail">
    <img src="<?php print "/islandora/object/{$islandora_object}/datastream/TN/view" ?>"></img>
  </div>

<div class="islandora-pdf-object islandora" vocab="http://schema.org/" prefix="dcterms: http://purl.org/dc/terms/" typeof="Article">
  <div class="islandora-pdf-content-wrapper clearfix">
    <?php if (isset($islandora_content)): ?>
      <div class="islandora-pdf-content">
        <?php print $islandora_content; ?>
      </div>
    <?php endif; ?>
    <?php if (isset($islandora_download_link)): ?>
      <?php print $islandora_download_link; ?>
    <?php endif; ?>
  </div>
  <div class="islandora-pdf-metadata">
    <?php if($parent_collections): ?>
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
</div>
