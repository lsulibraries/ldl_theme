<?php

/**
 * @file
 * This is the template file for the object page for basic image
 *
 * @TODO: add documentation about file and available variables
 */
?>

<div class="islandora-basic-image-object islandora" vocab="http://schema.org/" prefix="dcterms: http://purl.org/dc/terms/" typeof="ImageObject">


<div class="object-metadata-wrapper">   
  
     <?php if ($parent_collections): ?>
      <div class="parent-collections">
        <h2><?php print t('Found in collection(s):'); ?></h2>
        
          <?php foreach ($parent_collections as $collection): ?>
            <p class="collection-title"><?php print l($collection->label, "islandora/object/{$collection->id}"); ?>
          <?php endforeach; ?></p>
<?php endif; ?>
    </div>
      
  <div class="islandora-basic-image-content-wrapper clearfix">
    <?php if (isset($islandora_content)): ?>
      <div class="islandora-basic-image-content">
        <?php print $islandora_content; ?>
      </div>
    <?php endif; ?>
      </div>
 
  <div class="islandora-basic-image-metadata">
      
  
    <?php print $metadata; ?>
  </div>
  
</div>

      


    
</div>
