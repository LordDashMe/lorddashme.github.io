<?php
/**
 * @package TA Portfolio
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="post-thumbnail">
		<?php if ( has_post_thumbnail() ) : ?>
			<?php the_post_thumbnail( 'featured-image' ); ?>
		<?php endif; ?>
	</div>

	<div class="post-inner-content well">
		<header class="entry-header">
			<?php the_title( sprintf( '<h1 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h1>' ); ?>

			<?php if (ta_option('disable_meta') =='1') { ?>
				<?php if ( 'post' == get_post_type() ) : ?>
					<div class="entry-meta">
						<?php ta_portfolio_posted_on(); ?>
						<?php if ( 'post' == get_post_type() ) : // Hide category and tag text for pages ?>
						<?php
							/* translators: used between list items, there is a space after the comma */
							$categories_list = get_the_category_list( ', ' );
							if ( $categories_list && ta_portfolio_categorized_blog() ) :
						?>
							<span class="cat-links">
								<?php printf( '<i class="fa fa-folder-o"></i> %1$s', $categories_list ); ?>
							</span>
						<?php endif; // End if categories ?>

						<?php endif; // End if 'post' == get_post_type() ?>

						<?php if( class_exists( 'Jetpack' ) && Jetpack::is_module_active( 'stats' ) ) : ?>
							<?php jp_get_post_views( $post->ID ); ?>
						<?php endif; ?>

						<?php if ( ! post_password_required() && ( comments_open() || '0' != get_comments_number() ) ) : ?>
							<span class="comments-link"><i class="fa fa-comments-o"></i><?php comments_popup_link( __( 'Leave a comment', 'ta-portfolio' ), __( '1 Comment', 'ta-portfolio' ), __( '% Comments', 'ta-portfolio' ) ); ?></span>
						<?php endif; ?>
					</div><!-- .entry-meta -->
				<?php endif; ?>
			<?php } ?>
		</header><!-- .entry-header -->

		<div class="entry-content">
			<?php the_content(); ?>
			<?php
				wp_link_pages( array(
					'before' => '<div class="page-links">' . __( 'Pages:', 'ta-portfolio' ),
					'after'  => '</div>',
				) );
			?>
			
			<?php
			// Display author meta if post isn't password protected
			if ( ! post_password_required() ) : ?>

			<?php if (ta_option('enable_disable_author_box') == '1') { ?>
				<?php if ( get_the_author_meta( 'description' ) != '' ) : ?>       
					<div class="author-meta well well-lg">
						<div class="media">
							<div class="media-object">
								<?php if (function_exists('get_avatar')) { echo get_avatar( get_the_author_meta( 'ID' ), 80 ); }?>
							</div>
							<div class="media-body">
								<h5 class="media-heading"><?php the_author_posts_link(); ?></h5>
								<p><?php the_author_meta( 'description' ) ?></p>
								<?php
								// Retrieve a custom field value
								$twitterHandle = get_the_author_meta( 'twitter' ); 
								$fbHandle = get_the_author_meta( 'facebook' );
								$gHandle = get_the_author_meta( 'gplus' );
								?>
								<p> 
									<?php if ( get_the_author_meta( 'twitter' ) != '' ) : ?>
										<a href="http://twitter.com/<?php echo $twitterHandle; ?>" target="_blank"><i class="fa fa-twitter"></i></a>
									<?php endif; // no twitter handle ?>

									<?php if ( get_the_author_meta( 'facebook' ) != '' ) : ?>
										<a href="<?php echo $fbHandle; ?>" target="_blank"><i class="fa fa-facebook"></i></a>
									<?php endif; // no facebook url ?>

									<?php if ( get_the_author_meta( 'gplus' ) != '' ) : ?>
										<a href="<?php echo $gHandle; ?>" target="_blank"><i class="fa fa-google-plus"></i></a>
									<?php endif; // no google+ url ?>
								</p>
							</div>
						</div>
					</div><!-- end of #author-meta -->
				<?php endif; // no description, no author's meta ?>
			<?php } ?>
				
			<?php
			//end password protection check 
			endif; ?>
		</div><!-- .entry-content -->

		<footer class="entry-footer">
			<?php if (ta_option('enable_disable_tags') == '1') { ?>
				<?php
					/* translators: used between list items, there is a space after the comma */
					$tags_list = get_the_tag_list();
					if ( $tags_list ) :
				?>
					<p><span class="tags-links">
						<?php printf( '<i class="fa fa-tags"></i> %1$s', $tags_list ); ?>
					</span></p>
				<?php endif; // End if $tags_list ?>
			<?php } ?>
			<p><?php edit_post_link( __( 'Edit', 'ta-portfolio' ), '<span class="edit-link">', '</span>' ); ?></p>
		</footer><!-- .entry-footer -->
	</div><!-- .post-inner-content -->
</article><!-- #post-## -->