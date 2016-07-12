<?php
/**
 * The sidebar containing the left sidebar widget area.
 *
 * @package TA Portfolio
 */

if ( ! is_active_sidebar( 'sidebar-left' ) ) {
	return;
}
?>

			<div id="secondary" class="widget-area col-xs-12 col-md-4 col-md-pull-8" role="complementary">
				<?php dynamic_sidebar( 'sidebar-left' ); ?>
			</div><!-- #secondary -->

		</div> <!-- .row -->
	</div> <!-- .container -->
