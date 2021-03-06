<?php

/**
 * @file
 */
?>

<div id="pageCount">
<?php print count($viewer_params['pages']); ?> pages
</div>
<div class="islandora-newspaper-issue clearfix">
  <span class="islandora-newspaper-issue-navigator">
    <?php print theme('islandora_newspaper_issue_navigator', array('object' => $object)); ?>
  </span>
<div class="book-thumbnail image-thumbnail">
  <img src="<?php print $thumbnail_path; ?>"></img>
</div>

  <?php if (isset($viewer_id) && $viewer_id != "none"): ?>
    <div id="book-viewer">
      <?php print $viewer; ?>
    </div>
  <?php else: ?>
    <?php print theme('islandora_objects', array('objects' => $pages)); ?>
  <?php endif; ?>
  <div class="islandora-newspaper-issue-metadata">
    <?php print $description; ?>
    <?php print $metadata; ?>
  </div>
</div>
