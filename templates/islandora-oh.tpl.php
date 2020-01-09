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

  <div class="oralhistory-banner"> 
    <img src="/sites/all/themes/ldl/images/audiobanner.jpeg"></img>  
  </div>  

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
    <?php print $metadata; ?>
  </div>
</div>
