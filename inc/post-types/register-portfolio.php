<?php

$portfolio = new CPT( array(
    'post_type_name' => 'portfolio',
    'singular'       => __('Portfolio', 'ta-portfolio'),
    'plural'         => __('Portfolios', 'ta-portfolio'),
    'slug'           => 'portfolio'
),
	array(
    'supports'  => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields', 'comments' ),
    'menu_icon' => 'dashicons-portfolio'
));

$portfolio -> register_taxonomy( array(
    'taxonomy_name' => 'portfolio_tags',
    'singular'      => __('Portfolio Tag', 'ta-portfolio'),
    'plural'        => __('Portfolio Tags', 'ta-portfolio'),
    'slug'          => 'portfolio-tag'
));