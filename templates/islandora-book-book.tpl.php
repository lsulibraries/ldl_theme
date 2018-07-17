<?php
/**
 * @file
 * Template file to style output.
 */
?>
<div id="pageCount">
<?php print count($viewer_params['pages']); ?> pages
</div>
<?php if(isset($viewer)): ?>
<div class='item_header'>
  <div class='backgroundDiv'/>
  <div class='item_headerMenu'>
    <div class='headerBreadcrumb'/>
    <div class='userMenu'>
      <div class='infoToggle userSelect'><div class='iconSelect'></div><div class='textSelect'>details</div></div>
    </div>
  </div>
</div>
<div class='bookContainer'>
  <div id="book-viewer">
    <?php print $viewer; ?>
<?php endif; ?>
    <div class="book-thumbnail">
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
</div>
  <?php endif; ?>
  <?php print $metadata; ?>
  </div>

<?php endif; ?>
