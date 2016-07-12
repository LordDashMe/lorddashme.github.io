<?php
/**
 * TA Portfolio functions and definitions
 *
 * @package TA Portfolio
 */

/*
 * Make theme available for translation.
 * Translations can be filed in the /languages/ directory.
 * If you're building a theme based on TA Portfolio, use a find and replace
 * to change 'ta-portfolio' to the name of your theme in all the template files
 */
load_theme_textdomain( 'ta-portfolio', get_template_directory() . '/languages' );

// Include the Redux theme options Framework
if ( !class_exists( 'ReduxFramework' ) ) {
	require_once( get_template_directory() . '/redux/framework.php' );
}

// Register all the theme options
require_once( get_template_directory() . '/inc/redux-config.php' );

// Theme options functions
require_once( get_template_directory() . '/inc/ta-option.php' );

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) ) {
	$content_width = 668; /* pixels */
}

/**
 * Set the content width for full width pages with no sidebar.
 */
function full_page_width() {
  if ( is_page_template( 'template-no-sidebar.php' ) ) {
	global $content_width;
	$content_width = 1058; /* pixels */
  }
}
add_action( 'template_redirect', 'full_page_width' );

if ( ! function_exists( 'ta_portfolio_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function ta_portfolio_setup() {

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	add_theme_support( 'post-thumbnails' );
	add_image_size( 'timeline-image', 200, 200, true );
	add_image_size( 'tab-image', 60, 60, true );
	add_image_size( 'featured-image', 750, 500, true );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'ta-portfolio' ),
		'secondary' => __( 'Secondary Menu', 'ta-portfolio' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form', 'comment-form', 'comment-list', 'gallery', 'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See http://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array(
		'aside', 'image', 'video', 'quote', 'link',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'ta_portfolio_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif; // ta_portfolio_setup
add_action( 'after_setup_theme', 'ta_portfolio_setup' );

/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
function ta_portfolio_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'ta-portfolio' ),
		'id'            => 'sidebar-right',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s well">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h4 class="widget-title">',
		'after_title'   => '</h4>',
	) );

	register_sidebar( array(
		'name'          => __( 'Sidebar Left', 'ta-portfolio' ),
		'id'            => 'sidebar-left',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s well">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h4 class="widget-title">',
		'after_title'   => '</h4>',
	) );

	register_sidebar( array(
		'name'          => __( 'Footer 1', 'ta-portfolio' ),
		'id'            => 'footer-1',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget-footer %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => __( 'Footer 2', 'ta-portfolio' ),
		'id'            => 'footer-2',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget-footer %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => __( 'Footer 3', 'ta-portfolio' ),
		'id'            => 'footer-3',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget-footer %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_widget( 'ta_portfolio_social_widget' );
	register_widget( 'ta_portfolio_about_me_widget' );
	register_widget( 'ta_portfolio_post_tabs_widget' );
}
add_action( 'widgets_init', 'ta_portfolio_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function ta_portfolio_scripts() {
	wp_enqueue_style( 'bootstrap-styles', get_template_directory_uri() . '/css/bootstrap.min.css', array(), '3.3.2', 'all' );

	wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/css/font-awesome.min.css', array(), '4.3.0', 'all' );

	wp_enqueue_style( 'GoogleFonts-Montserrat', 'http://fonts.googleapis.com/css?family=Montserrat:400,700', array(), '', 'all' );

	wp_enqueue_style( 'GoogleFonts-Lato', 'http://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic', array(), '', 'all' );

	wp_enqueue_style( 'ta-portfolio-style', get_stylesheet_uri() );

	wp_enqueue_script( 'bootstrap-js', get_template_directory_uri() . '/js/bootstrap.min.js', array('jquery'), '3.3.2', true );

	wp_enqueue_script( 'isotope-js', get_template_directory_uri() . '/js/isotope.pkgd.min.js', array('jquery'), '2.1.0', true );

	wp_enqueue_script( 'imagesloaded-js', get_template_directory_uri() . '/js/imagesloaded.pkgd.min.js', array('jquery'), '3.1.8', true );

	wp_enqueue_script( 'jquery-easing', get_template_directory_uri() . '/js/jquery.easing.min.js', array('jquery'), '1.3', true );

	wp_enqueue_script( 'classie-js', get_template_directory_uri() . '/js/classie.js', array(), '1.0.1', true );

	wp_enqueue_script( 'cbpAnimatedHeader-js', get_template_directory_uri() . '/js/cbpAnimatedHeader.js', array(), '1.0.0', true );

	wp_enqueue_script( 'jqBootstrapValidation-js', get_template_directory_uri() . '/js/jqBootstrapValidation.js', array(), '1.3.6', true );

	wp_enqueue_script( 'ContactMe-js', get_template_directory_uri() . '/js/contact-me.js', array(), '', true );

	wp_enqueue_script( 'main-js', get_template_directory_uri() . '/js/app.js', array('jquery'), '', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'ta_portfolio_scripts' );

/**
 * Get theme path for JavaScript file.
 */
function get_theme_directory_uri() {
	$stylesheet_directory_uri = array( 'templateUrl' => get_stylesheet_directory_uri() );
	wp_localize_script( 'ContactMe-js', 'ContactMe_uri', $stylesheet_directory_uri );
}
add_action( 'wp_enqueue_scripts', 'get_theme_directory_uri' );

/**
 * Add Respond.js for IE
 */
if( !function_exists( 'ie_scripts' ) ) {
	function ie_scripts() {
	 	echo '<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->';
	   	echo ' <!-- WARNING: Respond.js doesn\'t work if you view the page via file:// -->';
	   	echo ' <!--[if lt IE 9]>';
	    echo ' <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>';
	    echo ' <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>';
	   	echo ' <![endif]-->';
   	}
   	add_action('wp_head', 'ie_scripts');
} // end if

/**
 * Implement the Custom Header feature.
 */
//require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require_once get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require_once get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require_once get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';

/**
 * Register Custom Navigation Walker.
 */
require_once get_template_directory() . '/inc/wp_bootstrap_navwalker.php';

/**
 * Custom Post Types
 */
require_once get_template_directory() . '/inc/post-types/CPT.php';

/**
 * Portfolio Custom Post Type
 */
require_once get_template_directory() . '/inc/post-types/register-portfolio.php';

/**
 * Add Custom Meta Boxes
 */
require_once get_template_directory() . '/inc/custom-metaboxes/CMB.php';

/**
 * Comments Callback.
 */
require_once get_template_directory() . '/inc/comments-callback.php';

/**
 * Add Author Meta.
 */
require_once get_template_directory() . '/inc/author-meta.php';

/**
 * Search Results - Highlight.
 */
require_once get_template_directory() . '/inc/search-highlight.php';

/**
 * Theme Options - Custom CSS.
 */
require_once get_template_directory() . '/inc/custom-css.php';

/**
 * Add Theme Widgets.
 */
require_once ( get_template_directory() . '/widgets/widget-social.php' );
require_once ( get_template_directory() . '/widgets/widget-about-me.php' );
require_once ( get_template_directory() . '/widgets/widget-post-tabs.php' );