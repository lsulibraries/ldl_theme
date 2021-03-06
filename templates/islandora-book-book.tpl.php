<?php
/**
 * @file
 * Template file to style output.
 */
?>

<script>
document.body.className += ' ' + 'book';
</script>

<div id="pageCount">
<?php print count($viewer_params['pages']); ?> pages
</div>
<?php if(isset($viewer)): ?>
  <div id="book-viewer">
    <?php print $viewer; ?>
<?php endif; ?>
<div class="book-thumbnail image-thumbnail">
  <img src="<?php print "/islandora/object/{$object->id}/datastream/TN/view" ?>"></img>
</div>

<?php if($display_metadata === 1): ?>
  <div class="islandora-book-metadata">
    <?php print $description; ?>
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
<?php endif; ?>
