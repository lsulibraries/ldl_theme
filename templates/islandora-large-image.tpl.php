<?php

/**
 * @file
 * This is the template file for the object page for large image
 *
 * Available variables:
 * - $islandora_object: The Islandora object rendered in this template file
 * - $islandora_dublin_core: The DC datastream object
 * - $dc_array: The DC datastream object values as a sanitized array. This
 *   includes label, value and class name.
 * - $islandora_object_label: The sanitized object label.
 * - $parent_collections: An array containing parent collection(s) info.
 *   Includes collection object, label, url and rendered link.
 * - $islandora_thumbnail_img: A rendered thumbnail image.
 * - $islandora_content: A rendered image. By default this is the JPG datastream
 *   which is a medium sized image. Alternatively this could be a rendered
 *   viewer which displays the JP2 datastream image.
 *
 * @see template_preprocess_islandora_large_image()
 * @see theme_islandora_large_image()
 */
?>
<div class="islandora-large-image-object islandora" vocab="http://schema.org/" prefix="dcterms: http://purl.org/dc/terms/" typeof="ImageObject">
  <div class="islandora-large-image-content-wrapper clearfix">
<div class="image-thumbnail">
  <img src="<?php print "/islandora/object/{$islandora_object}/datastream/TN/view" ?>"></img>
</div>

       <?php print l('<div class="downloadSelect userSelect"><div class="iconSelect"></div><div class="textSelect">Download</div></div>', "islandora/object/{$islandora_object}/datastream/JPG/download",  array('attributes' => array('class' => 'downloadLink', ), 'html' => TRUE,)); ?>
       <?php if ($parent_collections): ?>
      <div class="parent-collections">
        <h2><?php print t('Found in collection(s):'); ?></h2>

          <?php foreach ($parent_collections as $collection): ?>
            <p class="collection-title"><?php print l($collection->label, "islandora/object/{$collection->id}"); ?>
          <?php endforeach; ?></p>
    </div>

    <?php endif; ?>

    <?php if ($islandora_content): ?>
      <?php if (isset($image_clip)): ?>
        <?php print $image_clip; ?>
      <?php endif; ?>
      <div class="islandora-large-image-content">
        <?php print $islandora_content; ?>
      </div>
    <?php endif; ?>
  </div>
  <div class="islandora-large-image-metadata">

    <?php print $metadata; ?>
  </div>

</div>
