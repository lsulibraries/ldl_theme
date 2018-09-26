<?php

/**
 * @file
 * This is the template file for the object page for audio file
 *
 * @TODO: add documentation about file and available variables
 */
?>
<script>
document.body.className += ' ' + 'oralHistory';
</script>

<div class="islandora-audio-object islandora-oh islandora" vocab="http://schema.org/" prefix="dcterms: http://purl.org/dc/terms/" typeof="AudioObject">
  <div class="islandora-audio-content-wrapper clearfix">
    <?php if (isset($index_url)): ?>
      <div class="islandora-oh-index-url">
        <a href="<?php print $index_url; ?>">Index</a>
      </div>
    <?php endif; ?>  
    <?php if (isset($islandora_content)): ?>
      <div class="islandora-audio-content">
        <?php print $islandora_content; ?>
        <?php print $transcript_pdf; ?>
      </div>
    <?php endif; ?>
  </div>
  <!-- note: this metadata div class is just a hack to catch the css -->
  <div class="islandora-pdf-metadata">
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
</div>
