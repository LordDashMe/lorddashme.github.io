<?php
/**
 * The sidebar containing the main widget area.
 *
 * @package TA Portfolio
 */

if ( ! is_active_sidebar( 'sidebar-right' ) ) {
	return;
}
?>

		<div id="secondary" class="widget-area col-sm-12 col-md-4 col-lg-4" role="complementary">
			<?php dynamic_sidebar( 'sidebar-right' ); ?>
		</div><!-- #secondary -->

	</div> <!-- .row -->
</div> <!-- .container -->