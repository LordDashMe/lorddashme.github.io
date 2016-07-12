<?php
/**
 * Custom function to highlight search terms.
 *
 * @package TA Portfolio
 */

function search_excerpt_highlight() {
    $excerpt = get_the_excerpt();
    $keys = implode( '|', explode(' ', get_search_query() ) );
    $excerpt = preg_replace( '/(' . $keys .')/iu', '<strong class="search-highlight">\0</strong>', $excerpt );

    echo '<p>' . $excerpt . '</p>';
}