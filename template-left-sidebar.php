<?php
/**
 * The template for displaying the left sidebar page.
 *
 * @package TA Portfolio
 *
 * Template Name: Left Sidebar Page
 */

get_header(); ?>

	<div class="container">
		<div class="row">
			<div id="primary" class="col-xs-12 col-md-8 col-md-push-4">
				<main id="main" class="site-main" role="main">

					<?php while ( have_posts() ) : the_post(); ?>

						<?php get_template_part( 'content', 'page' ); ?>

						<?php
							// If comments are open or we have at least one comment, load up the comment template
							if ( comments_open() || get_comments_number() ) :
								comments_template();
							endif;
						?>

					<?php endwhile; // end of the loop. ?>

				</main><!-- #main -->
			</div><!-- #primary -->

<?php get_sidebar( 'left' ); ?>
<?php get_footer(); ?>
