<?php
/**
 * Template Name: Portfolio
 *
 * @package TA Portfolio
 */

get_header(); ?>

	<!-- Portfolio Header -->
    <header class="portfolio-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
					<?php if ( ta_option( 'header_image' ) != '') : ?>
						<img class="img-responsive" src="<?php echo ta_option( 'header_image', false, 'url' ); ?>">
					<?php endif; ?>
                    <div class="intro-text">
                        <span class="name">
							<?php if ( ta_option( 'header_title' ) != '') : ?>
								<?php echo ta_option( 'header_title' ); ?>
							<?php endif; ?>
						</span>
                        <hr class="star-light header">
                        <span class="skills">
							<?php if ( ta_option( 'header_tagline' ) != '') : ?>
								<?php echo ta_option( 'header_tagline' ); ?>
							<?php endif; ?>
						</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

	<!-- Portfolio Grid Section -->
    <section id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2><?php _e( 'Portfolio', 'ta-portfolio' ); ?></h2>
                    <hr class="star-primary portfolio">
                </div>
            </div>

			<?php
			if ( ta_option( 'filter_switch' ) == '1' ) {
				$terms = get_terms( "portfolio_tags" );
				$count = count( $terms );
				echo '<div id="filters" class="filters">';
				echo '<ul>';
				echo '<li class="filter active" data-filter="*">'. __('All', 'ta-portfolio') .'</li>';
					if ( $count > 0 ) {   
						foreach ( $terms as $term ) {
							$termname = strtolower( $term->name );
							$termname = str_replace( ' ', '-', $termname );
						echo '<li class="filter" data-filter=".'.$termname.'">'.$term->name.'</li>';
						}
					}
				echo '</ul>';
				echo '</div>';
			} ?>

			<?php 
			// the query
			$the_query = new WP_Query( array( 'post_type' => 'portfolio', 'posts_per_page' => -1 ) ); ?>

			<?php if ( $the_query->have_posts() ) : ?>
 
				<div class="row">
					<div id="portfolio-items">

						<!-- the loop -->
						<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

						<?php
							$terms = get_the_terms( $post->ID, 'portfolio_tags' );

							if ( $terms && ! is_wp_error( $terms ) ) :
								$links = array();

							foreach ( $terms as $term ) {
								$links[] = $term->name;
							}

							$links = str_replace(' ', '-', $links);
							$tax = join( " ", $links );

							else :
								$tax = '';
							endif;
						?>

						<?php 
						// Portfolio columns variable from Theme Options
						$pcount = ta_option('portfolio_column', '3');
						?>

						<div class="col-xs-12 col-sm-6 col-md-<?php echo $pcount; ?> item <?php echo strtolower($tax); ?>">
							<div class="portfolio-item">
								<a href="#portfolio-<?php echo get_the_ID() ?>" class="portfolio-link" data-toggle="modal">
									<div class="caption">
										<div class="caption-content">
											<i class="fa fa-search-plus fa-3x"></i>
										</div>
									</div>
									<img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id( $post->ID ) ); ?>" class="img-responsive">
								</a>
								<h3><a href="#portfolio-<?php echo get_the_ID() ?>" data-toggle="modal"><?php the_title(); ?></a></h3>
							</div>
						</div>
						<?php endwhile; ?>
						<!-- end of the loop -->

					</div> <!-- .#portfolio-items -->
				</div> <!-- .row -->

				<?php wp_reset_postdata(); ?>

			<?php else : ?>
				<p><?php _e( 'Sorry, no posts matched your criteria.', 'ta-portfolio' ); ?></p>
			<?php endif; ?>
        </div>
    </section>

	<!-- Blog Section -->
    <section class="blog" id="blog">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2><?php _e( 'Blog', 'ta-portfolio' ); ?></h2>
                    <hr class="star-light blog">
                </div>
            </div>
			
            <div class="row">
                <div class="col-lg-12">
                    <ul class="timeline">
						<?php
						// get recent 4 posts for timeline.
						$timeline_posts = new WP_Query( array( 'showposts' => 4, 'post_status' => 'publish', 'ignore_sticky_posts' => 1, 'has_password' => false, ) );
						$i = 1;
						while( $timeline_posts->have_posts() ): $timeline_posts->the_post();
						?>
							<li <?php if( $i % 2 == 0 ) { echo 'class="timeline-inverted"'; } ?> >
								<div class="timeline-image">
									<?php if ( has_post_thumbnail() ) : ?>
										<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
											<?php the_post_thumbnail( 'timeline-image', array( 'class' => 'img-circle img-responsive' ) ); ?>
										</a>
									<?php endif; ?>
								</div>
								<div class="timeline-panel">
									<div class="timeline-heading">
										<strong><?php echo get_the_date(); ?></strong>
										<h3 class="subheading"><a href="<?php echo get_permalink() ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h3>
									</div>
									<div class="timeline-body">
										<?php if( has_excerpt() ) {
											the_excerpt();
										} else {
											$content = strip_shortcodes( get_the_content() );
											echo wp_trim_words( $content, 30 );
										} ?>
									</div>
								</div>
							</li>
						<?php
						$i++;
						endwhile;
						?>
                     </ul>
					 <div class="col-lg-8 col-lg-offset-2 text-center">
						<a href="<?php if( get_option( 'show_on_front' ) == 'page' ) echo get_permalink( get_option('page_for_posts' ) ); else echo bloginfo('url');?>" class="btn btn-md btn-outline"><?php _e( 'More Posts', 'ta-portfolio' ); ?></a>
					</div>
                </div>
            </div>
        </div>
    </section>

	<!-- Contact Section -->
    <section id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2><?php _e( 'Contact Me', 'ta-portfolio' ); ?></h2>
                    <hr class="star-primary contact">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <form name="sentMessage" id="contactForm" novalidate>
                        <div class="row control-group">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label><?php _e( 'Name', 'ta-portfolio' ); ?></label>
                                <input type="text" class="form-control" placeholder="Name" id="name" required data-validation-required-message="<?php _e( 'Please enter your name.', 'ta-portfolio' ); ?>">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="row control-group">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label><?php _e( 'Email Address', 'ta-portfolio' ); ?></label>
                                <input type="email" class="form-control" placeholder="Email Address" id="email" required data-validation-required-message="<?php _e( 'Please enter your email address.', 'ta-portfolio' ); ?>">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="row control-group">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label><?php _e( 'Subject', 'ta-portfolio' ); ?></label>
                                <input type="text" class="form-control" placeholder="Subject" id="subject" required data-validation-required-message="<?php _e( 'Please enter a subject.', 'ta-portfolio' ); ?>">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="row control-group">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label><?php _e( 'Message', 'ta-portfolio' ); ?></label>
                                <textarea rows="5" class="form-control" placeholder="Message" id="message" required data-validation-required-message="<?php _e( 'Please enter a message.', 'ta-portfolio' ); ?>"></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <br>
                        <div id="success"></div>
                        <div class="row">
                            <div class="form-group col-xs-12">
                                <button type="submit" class="btn btn-success btn-lg"><?php _e( 'Send', 'ta-portfolio' ); ?></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

	<!-- Portfolio Modals -->
	<?php 
	// the query
	$the_query = new WP_Query( array( 'post_type' => 'portfolio', 'posts_per_page' => -1 ) ); ?>

	<?php if ( $the_query->have_posts() ) : ?>

		<!-- the loop -->
		<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

		<div class="portfolio-modal modal fade" id="portfolio-<?php echo get_the_ID() ?>" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-content">
				<div class="close-modal" data-dismiss="modal">
					<div class="lr">
						<div class="rl">
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-lg-8 col-lg-offset-2">
							<div class="modal-body">
								<h2><?php the_title(); ?></h2>
								<hr class="star-primary portfolio">
								<img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id( $post->ID ) ); ?>" class="img-responsive img-centered">
								<p>
									<?php if( has_excerpt() ) {
										the_excerpt();
									} else {
										$content = strip_shortcodes( get_the_content() );
										echo wp_trim_words( $content, 50 );
									} ?>
								</p>
								<ul class="list-inline item-details">
									<li><?php _e( 'Client:', 'ta-portfolio' ); ?>
										<strong><a href="<?php echo get_post_meta( $post->ID, '_cmb_clienturl', true); ?>" target="_blank"><?php echo get_post_meta( $post->ID, '_cmb_clientname', true); ?></a></strong>
									</li>
									<li><?php _e( 'Date:', 'ta-portfolio' ); ?>
										<strong><?php echo get_the_date(); ?></strong>
									</li>
									<li><?php _e( 'Categories:', 'ta-portfolio' ); ?>
										<?php $terms = wp_get_post_terms( $post->ID, 'portfolio_tags', array( "fields" => "names" ) ); ?>
										<strong><?php echo implode( ' / ',$terms ); ?></strong>
									</li>
								</ul>
								<a class="btn btn-default" href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php _e( 'Learn More', 'ta-portfolio' ); ?></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<?php endwhile; ?>
		<!-- end of the loop -->

		<?php wp_reset_postdata(); ?>

	<?php else : ?>
		<p><?php _e( 'Sorry, no posts matched your criteria.', 'ta-portfolio' ); ?></p>
	<?php endif; ?>

<?php get_footer(); ?>