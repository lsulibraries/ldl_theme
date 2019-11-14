<?php ?>
<div class="institution-title"><h2><?php echo $nsHome['title']; ?></h2></div>
<div class="institution-header">
    <?php if ($nsHome['namespace_admin']): ?>
      <a class="institution-about-edit" href="<?php echo "/" . $nsHome['namespace'] . "/settings"; ?>">Edit Sesstings</a>
    <?php endif; ?>
    <div class="institution-logo">
        <?php if (isset($nsHome['logo_href'])): ?>
          <img src="<?php echo $nsHome['logo_href']; ?>" style="max-width: 100px;">
        <?php endif; ?>
    </div>
    <div class="institution-about"><?php echo $nsHome['description']; ?></div>
</div>

<div class="institution-search"><?php echo render($nsHome['search']); ?></div>

<div class="institution-browse-bys"></div>

<div class="institution-collections">
    <ul class="institution-collection-list">
        <div class="institution-collection-list-header">Collections</div>
        <?php foreach ($nsHome['collections'] as $pid => $map): ?>
          <div class="institution-collection-list-a" data-target='<?php echo $map['url']; ?>'>
              <li class="institution-collection-list-li">
                  <div class="institution-collection-list-item-count"><?php echo $map['count']; ?></div>
                  <div class="institution-collection-list-item-label"><?php echo $map['obj']->label; ?></div>
                  <div class='institution-collection-description'><?php echo $map['obj']->description; ?></div>
              </li>
              <?php if ($nsHome['proxyAdmin'] && isset($map['proxy_url'])): ?>
                <div class="institution-collection-list-item-manage-proxy">
                    <a class="institution-collection-list-item-manage-proxy-link" href="<?php echo $map['proxy_url'] ?>">Manage proxy</a>
                </div>
              <?php endif; ?>
          </div>

        <?php endforeach; ?>
    </ul>
</div>

<div class="child-institution-collections">
    <?php foreach ($nsHome['child_collections_for_display'] as $ns => $data): ?>
    <a class="child-institution-link" href="<?php echo "/$ns"; ?>">
        <div class="child-institution-container">
          <div class="child-institution-title">
            <?php echo $data['title']; ?>
          </div>
          <div class="child-institution-description">
            <?php echo $data['description']; ?>
          </div>
          <div class="child-institution-count-collections">
            <?php echo $data['collectioncount']; ?>
          </div>
          <div class="child-institution-count-items">
            <?php echo $data['itemcount']; ?>
          </div>
        </div>
    </a>
    <?php endforeach; ?>
</div>

