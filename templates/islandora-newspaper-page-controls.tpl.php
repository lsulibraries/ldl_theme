<?php
/**
 * @file
 * Displays the newspaper page controls.
 */
?>
<div class="islandora-newspaper-controls pageControls">
   <div class='pageNumber userSelect'>
    <div class='textSelect'>
      <?php print $controls['page_select']; ?>
    </div>
   </div>
   <div class='pageNext userSelect'>
      <div class='textSelect'>
        <?php print $controls['issue_pager']; ?>
      </div>
    </div>
   <div class='pageText userSelect'>
     <div class='textSelect'>
       <?php print $controls['text_view']; ?>
     </div>
   </div>
</div>
