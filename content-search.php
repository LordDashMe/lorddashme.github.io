<?php
/**
 * The template part for displaying results in search pages.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package TA Portfolio
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="post-inner-content well">
		<header class="entry-header">
			<?php the_title( sprintf( '<h1 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h1>' ); ?>

			<?php if ( 'post' == get_post_type() ) : ?>
			<div class="entry-meta">
				<?php ta_portfolio_posted_on(); ?>
				<?php if ( ! post_password_required() && ( comments_open() || '0' != get_comments_number() ) ) : ?>
					<span class="comments-link"><i class="fa fa-comments-o"></i><?php comments_popup_link( __( 'Leave a comment', 'ta-portfolio' ), __( '1 Comment', 'ta-portfolio' ), __( '% Comments', 'ta-portfolio' ) ); ?></span>
				<?php endif; ?>
			</div><!-- .entry-meta -->
			<?php endif; ?>
		</header><!-- .entry-header -->

		<div class="entry-summary">
			<?php search_excerpt_highlight(); ?>
		</div><!-- .entry-summary -->

		<footer class="entry-footer">
			<?php edit_post_link( __( 'Edit', 'ta-portfolio' ), '<span class="edit-link">', '</span>' ); ?>
		</footer><!-- .entry-footer -->
	</div><!-- .post-inner-content -->
</article><!-- #post-## -->
