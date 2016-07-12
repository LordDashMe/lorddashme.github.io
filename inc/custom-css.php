<?php
/**
 * Adds custom CSS to the wp_head() hook.
 *
 * @package WordPress
 * @subpackage TA Portfolio
 */

if ( !function_exists( 'ta_custom_css' ) ) {

	add_action('wp_head', 'ta_custom_css');
	function ta_custom_css() {

			$custom_css ='';

			if(ta_option('custom_css') != '') {
				$custom_css .= ta_option('custom_css');
			}

			//Trim white space for faster page loading
			$custom_css_trimmed =  preg_replace( '/\s+/', ' ', $custom_css );

			//Echo CSS
			$css_output = "<!-- Custom CSS -->\n<style type=\"text/css\">\n" . $custom_css_trimmed . "\n</style>";

			if( !empty( $custom_css ) ) {
				echo $css_output;
			}
	}

}