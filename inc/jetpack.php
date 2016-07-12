<?php
/**
 * Jetpack Compatibility File
 * See: http://jetpack.me/
 *
 * @package TA Portfolio
 */

/**
 * Add theme support for Infinite Scroll.
 * See: http://jetpack.me/support/infinite-scroll/
 */
function ta_portfolio_jetpack_setup() {
	add_theme_support( 'infinite-scroll', array(
		'type'      => 'click',
		'container' => 'main',
		'footer'    => 'page',
	) );
}
add_action( 'after_setup_theme', 'ta_portfolio_jetpack_setup' );

/**
 * Custom Older Posts.
 */
function custom_infinite_more() {
	if ( is_home() || is_archive() ) { ?>
		<script type="text/javascript">
		//<![CDATA[
		infiniteScroll.settings.text = "More Posts";
		//]]>
		</script>
	<?php }
}
add_action( 'wp_footer', 'custom_infinite_more', 3 );

/**
 * Get post views from Jetpack.
 */
function jp_get_post_views( $postID ) {
	if ( function_exists( 'stats_get_csv' ) ) {
		$post_stats = stats_get_csv( 'postviews', array( 'days' => 365, 'limit' => -1 ) );
		foreach ( $post_stats as $p ) {
			if ( $p['post_id'] == $postID ) { ?>
				<span class='post-views'><?php echo '<i class="fa fa-eye"></i>' . number_format_i18n( $p['views'] ); ?></span>
			<?php }
		}
	} ?>
<?php }