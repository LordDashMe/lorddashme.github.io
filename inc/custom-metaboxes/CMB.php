<?php
/**
 * Include and setup custom metaboxes and fields.
 *
 * @category TA Portfolio
 * @package  Metaboxes
 * @license  http://www.opensource.org/licenses/gpl-license.php GPL v2.0 (or later)
 * @link     https://github.com/webdevstudios/Custom-Metaboxes-and-Fields-for-WordPress
 */

add_filter( 'cmb_meta_boxes', 'cmb_sample_metaboxes' );
/**
 * Define the metabox and field configurations.
 *
 * @param  array $meta_boxes
 * @return array
 */
function cmb_sample_metaboxes( array $meta_boxes ) {

	// Start with an underscore to hide fields from custom fields list
	$prefix = '_cmb_';

	/**
	 * Sample metabox to demonstrate each field type included
	 */
	$meta_boxes['portfolio_metabox'] = array(
		'id'         => 'portfolio_metabox',
		'title'      => __( 'Portfolio Metabox', 'ta-portfolio' ),
		'pages'      => array( 'portfolio', ), // Post type
		'context'    => 'normal',
		'priority'   => 'high',
		'show_names' => true, // Show field names on the left
		'fields'     => array(
			array(
				'name'       => __( 'Client Name', 'ta-portfolio' ),
				'desc'       => __( 'Client Name', 'ta-portfolio' ),
				'id'         => $prefix . 'clientname',
				'type'       => 'text',
			),
			array(
				'name' => __( 'Client URL', 'ta-portfolio' ),
				'desc' => __( 'Client URL', 'ta-portfolio' ),
				'id'   => $prefix . 'clienturl',
				'type' => 'text_url',
			),
		),
	);

	return $meta_boxes;
}

add_action( 'init', 'cmb_initialize_cmb_meta_boxes', 9999 );
/**
 * Initialize the metabox class.
 */
function cmb_initialize_cmb_meta_boxes() {

	if ( ! class_exists( 'cmb_Meta_Box' ) )
		require_once 'init.php';

}
