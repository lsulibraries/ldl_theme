<?php

/**
 * @file
 * This is the template file for the object page for audio file
 *
 * @TODO: add documentation about file and available variables
 */
?>

<script>
document.body.className += ' ' + 'audio';
</script>


  <div class="image-thumbnail"> 
    <img src="/sites/all/themes/ldl/images/audiobanner.jpeg"></img>  
  </div>  

<div class="islandora-audio-object islandora" vocab="http://schema.org/" prefix="dcterms: http://purl.org/dc/terms/" typeof="AudioObject">
  <div class="islandora-audio-content-wrapper clearfix">
    <?php if (isset($islandora_content)): ?>
      <div class="islandora-audio-content">
        <?php print $islandora_content; ?>
      </div>
    <?php endif; ?>
  </div>
  <div class="islandora-audio-metadata">
    <?php print $description; ?>
<!--     <?php if ($parent_collections): ?>
      <div>
        <h2><?php print t('In collecssstions'); ?></h2>
        <ul>
          <?php foreach ($parent_collections as $collection): ?>
            <li><?php print l($collection->label, "islandora/object/{$collection->id}"); ?></li>
          <?php endforeach; ?>
        </ul>
      </div>
    <?php endif; ?> -->
    <?php print $metadata; ?>
  </div>
</div>
