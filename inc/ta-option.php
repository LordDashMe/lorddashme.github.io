<?php
/**
 * @package TA Portfolio
 */
 
if ( ! function_exists( 'ta_option' ) ) {
	function ta_option( $id, $fallback = false, $param = false ) {
		global $ta_option;
		if ( $fallback == false ) $fallback = '';
		$output = ( isset($ta_option[$id]) && $ta_option[$id] !== '' ) ? $ta_option[$id] : $fallback;
		if ( !empty($ta_option[$id]) && $param ) {
			$output = $ta_option[$id][$param];
		}
		return $output;
	}
}