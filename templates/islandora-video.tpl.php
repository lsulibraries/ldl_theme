<?php

/**
 * @file
 * This is the template file for the object page for video
 *
 * Available variables:
 * - $islandora_content: The rendered output of the viewer configured for
 *   this module.
 * - $islandora_dublin_core: The DC datastream object
 * - $dc_array: The DC datastream object values as a sanitized array. This
 *   includes label, value and class name.
 * - $islandora_object_label: The sanitized object label.
 * - $parent_collections: An array containing parent collection(s) info.
 *   Includes collection object, label, url and rendered link.
 *
 * @see template_preprocess_islandora_video()
 * @see theme_islandora_video()
 */
?>

<script>
document.body.className += ' ' + 'video';
</script>

<div class="islandora-video-object islandora" vocab="http://schema.org/" prefix="dcterms: http://purl.org/dc/terms/" typeof="VideoObject">
  <div class="islandora-video-content-wrapper clearfix">
  
<!--        <?php if ($parent_collections): ?>
      <div class="parent-collections">
        <h2><?php print t('Found in collection(s):'); ?></h2>
        
          <?php foreach ($parent_collections as $collection): ?>
            <p class="collection-title"><?php print l($collection->label, "islandora/object/{$collection->id}"); ?>
          <?php endforeach; ?></p>
    </div>      

    <?php endif; ?> -->
      
    <?php if ($islandora_content): ?>
      <div class="islandora-video-content">
        <?php print $islandora_content; ?>
      </div>
    <?php endif; ?>
  </div>
  <div class="islandora-video-metadata">

    <?php print $metadata; ?>
  </div>

</div>
