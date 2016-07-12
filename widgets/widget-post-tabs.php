<?php
/**
 * Post Tabs Widget Class
 *
 * @package TA Portfolio
 */

class ta_portfolio_post_tabs_widget extends WP_Widget {
	/* Constructor method */
	function ta_portfolio_post_tabs_widget() {
        $widget_ops = array( 'description' => __( "Display popular posts, recent posts and comments in tabbed format." , 'ta-portfolio' ) );
        $this->WP_Widget( 'ta_portfolio_post_tabs_widget', __( 'TA Portfolio: Post Tabs Widget', 'ta-portfolio' ), $widget_ops );
    }

	/* Render this widget in the sidebar */
	function widget( $args, $instance ) {
		extract($args);
		/* Our variables from the widget settings. */
		$number = $instance['number'];
		echo $before_widget;
		?>

		<div class="tabbed-widget">
			<ul class="nav nav-tabs role="tablist"">
				<li role="presentation" class="active"><a href="#popular" aria-controls="popular" role="tab" data-toggle="tab"><i class="fa fa-fire"></i><?php _e('Popular', 'ta-portfolio') ?></a></li>
				<li role="presentation"><a href="#recent" aria-controls="recent" role="tab" data-toggle="tab"><i class="fa fa-clock-o"></i><?php _e('Recent', 'ta-portfolio') ?></a></li>
				<li role="presentation"><a href="#message" aria-controls="message" role="tab" data-toggle="tab"><i class="fa fa-comments"></i></a></li>
			</ul>

			<div class="tab-content">
				<div role="tabpanel" id="popular" class="tab-pane active">
					<?php if( function_exists('stats_get_csv') ) { // get popular posts by WordPress.com states if Jetpack plugin installed.
						$count = 0;
						$popular_posts = stats_get_csv( 'postviews', array( 'days' => 30, 'limit' => -1 ) ); ?>
						<div class="post-content">
							<?php foreach ( $popular_posts as $p ) {
								if ( $count >= $number ) {
									break;
								}
								
								if ( 'post' == get_post_type( $p['post_id'] ) && 'publish' == get_post_status ( $p['post_id'] ) && false == post_password_required ( $p['post_id'] ) && 0 != $p['post_id'] ) { ?>
									<div class="post-content">
										<div class="tab-image">
											<?php if ( has_post_thumbnail( $p['post_id'] ) ) : ?>
												<a href="<?php echo $p['post_permalink']; ?>" title="<?php echo $p['post_title']; ?>">
													<?php echo get_the_post_thumbnail( $p['post_id'], 'tab-image' ); ?>
												</a>
											<?php endif; ?>
										</div>

										<div class="post-title">
											<i class="fa fa-eye"></i><i><?php echo $p['views'] . ' ' . __( 'Monthly Views', 'ta-portfolio' ); ?></i>
											<p><a href="<?php echo $p['post_permalink']; ?>" rel="bookmark" title="<?php echo $p['post_title']; ?>"><?php echo $p['post_title']; ?></a></p>
										</div>
									</div>
								<?php $count++; }
							} ?>
						</div>
					<?php }

					else { // get popular posts by comment count.
						$popular_posts = new WP_Query( array( 'showposts' => $number, 'post_status' => 'publish', 'ignore_sticky_posts' => 1, 'has_password' => false, 'orderby' => 'comment_count', 'order'=> 'DESC', ) );
						while( $popular_posts->have_posts() ): $popular_posts->the_post(); ?>

							<div class="post-content">
								<div class="tab-image">
									<?php if ( has_post_thumbnail() ) : ?>
										<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
											<?php the_post_thumbnail( 'tab-image' ); ?>
										</a>
									<?php endif; ?>
								</div>

								<div class="post-title">
									<i class="fa fa-comments-o"></i><?php comments_popup_link( __( 'Leave a comment', 'ta-portfolio' ), __( '1 Comment', 'ta-portfolio' ), __( '% Comments', 'ta-portfolio' ) ); ?>
									<p><a href="<?php echo get_permalink() ?>" rel="bookmark" title="<?php the_title(); ?>"><?php the_title(); ?></a></p>
								</div>
							</div>

						<?php endwhile;
					} ?>
				</div>
				<?php wp_reset_query(); ?>

				<div role="tabpanel" id="recent" class="tab-pane">
					<?php $recent_posts = new WP_Query( array( 'showposts' => $number, 'post_status' => 'publish', 'ignore_sticky_posts' => 1, 'has_password' => false ) ); ?>
					<?php while( $recent_posts->have_posts() ): $recent_posts->the_post(); ?>

						<div class="post-content">
							<div class="tab-image">
								<?php if ( has_post_thumbnail() ) : ?>
									<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
										<?php the_post_thumbnail( 'tab-image' ); ?>
									</a>
								<?php endif; ?>
							</div>
							<div class="post-title">
								<i class="fa fa-clock-o"></i><i><?php the_time('M j, Y') ?></i>
								<p><a href="<?php echo get_permalink() ?>" rel="bookmark" title="<?php the_title(); ?>"><?php the_title(); ?></a></p>
							</div>
						</div>

					<?php endwhile; ?>
				</div>
				<?php wp_reset_query(); ?>

				<div role="tabpanel" id="message" class="tab-pane">
					<?php $recent_comments = get_comments( array ( 'number' => $number, 'status' => 'approve' ) ); ?>
					<?php foreach( $recent_comments as $comment ) : ?>
					
						<div class="post-content">
							<i class="fa fa-comment-o"></i>
							<?php if ( $comment->comment_author ) { echo $comment->comment_author; } else { _e( 'Anonymous','ta-portfolio' ); } ?> <?php _e( 'on','ta-portfolio' ); ?>
								<a href="<?php echo get_permalink( $comment->comment_post_ID ) ?>" rel="bookmark" title="<?php echo get_the_title( $comment->comment_post_ID ); ?>">
									<?php echo get_the_title( $comment->comment_post_ID ); ?>
								</a>
							<p>
								<i class="fa fa-quote-left"></i>
								<?php echo wp_trim_words( $comment->comment_content, 15 ) ;?>
								<i class="fa fa-quote-right"></i>
							</p>
						</div>

					<?php endforeach; ?>
				</div>
			</div>
		</div>

		<?php echo $after_widget;
	}

	/* Output user options */
	function form( $instance ) {

		/* Set up some default widget settings. */
		$defaults = array( 'number' => 5 );
		$instance = wp_parse_args( ( array ) $instance, $defaults ); ?>

		<!-- Number of posts -->
		<p>
			<label for="<?php echo $this->get_field_id( 'number' ); ?>"><?php _e('Number of posts to show', 'ta-portfolio') ?>:</label>
			<input id="<?php echo $this->get_field_id( 'number' ); ?>" name="<?php echo $this->get_field_name( 'number' ); ?>" value="<?php echo $instance['number']; ?>" size="1" />
		</p>

	<?php }
	
	/* Update the widget settings */
	function update ( $new_instance, $old_instance ) {
		$instance = $old_instance;
		/* Strip tags for title and name to remove HTML (important for text inputs). */
		$instance['number'] = strip_tags( $new_instance['number'] );

		return $instance;
	}

}// end ta_portfolio_post_tabs_widget

?>