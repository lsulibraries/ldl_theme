<?php

/**
 * @file
 * islandora-basic-collection-wrapper.tpl.php
 *
 * @TODO: needs documentation about file and variables
 */
?>

<div class="islandora-basic-collection-wrapper">
<!--    <h1 class="lp-title"><?php //print $landing_page_title  ?></h1>-->
    <h1 class="about-link"><?php print $about_link  ?></h1>
  <?php if (!$display_metadata && !empty($dc_array['dc:description']['value'])): ?>
    <div class="collection-description-text"><?php print nl2br($dc_array['dc:description']['value']); ?></div>
    <hr />
  <?php endif; ?>
  <div class="islandora-basic-collection clearfix">
    <span class="islandora-basic-collection-display-switch">
      <ul class="links inline">
          <li><span class="islandora-basic-collection-item-count"><?php print $total_count ?> items</span></li>
        <?php foreach ($view_links as $link): ?>
          <li>
            <a <?php print drupal_attributes($link['attributes']) ?>><?php print filter_xss($link['title']) ?></a>
          </li>
        <?php endforeach ?>
      </ul>
    </span>
    <?php print $collection_pager; ?>
    <?php print $collection_content; ?>
    <?php print $collection_pager; ?>
  </div>
  <?php if ($display_metadata): ?>
    <div class="islandora-collection-metadata">
      <?php print $description; ?>
      <?php if ($parent_collections): ?>
        <div>
          <h2><?php print t('In collectionz'); ?></h2>
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
</div>
