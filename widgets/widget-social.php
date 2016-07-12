<?php
/**
 * Social Network Icon Widget Class
 *
 * @package TA Portfolio
 */
 
class ta_portfolio_social_widget extends WP_Widget {
	/* Constructor method */
	function ta_portfolio_social_widget() {
        $widget_ops = array( 'classname' => 'social-widget', 'description' => __( "Add social icons to your sidebar." , 'ta-portfolio' ) );
        $this->WP_Widget( 'ta_portfolio_social_widget', __( 'TA Portfolio: Social Widget', 'ta-portfolio' ), $widget_ops );
    }

	/* Render this widget in the sidebar */
	function widget( $args , $instance ) {
		extract( $args );
		$title = ($instance['title']) ? $instance['title'] : __('Around The Web' , 'ta-portfolio');
		echo $before_widget;
		echo $before_title;
		echo $title;
		echo $after_title;
		?>

		<ul class="list-inline">
			<?php $social_options = ta_option( 'social_icons' ); ?>
				<?php foreach ( $social_options as $key => $value ) {
					if ( $value && $key == 'Google Plus' ) { ?>
						<li>
							<a href="<?php echo $value; ?>" title="<?php echo $key; ?>" class="btn-social btn-outline" target="_blank">
								<i class="fa fa-fw fa-<?php echo strtolower( strtr( $key, " ", "-" ) ); ?>"></i>
							</a>
						</li>
					<?php } elseif ( $value && $key == 'Vimeo' ) { ?>
						<li>
							<a href="<?php echo $value; ?>" title="<?php echo $key; ?>" class="btn-social btn-outline" target="_blank">
								<i class="fa fa-<?php echo strtolower( $key ) . "-square"; ?>"></i>
							</a>
						</li>
					<?php } elseif ( $value ) { ?>
						<li>
							<a href="<?php echo $value; ?>" title="<?php echo $key; ?>" class="btn-social btn-outline" target="_blank">
								<i class="fa fa-fw fa-<?php echo strtolower( $key ); ?>"></i>
							</a>
						</li>
					<?php }
				} ?>
		</ul><!-- .social-icons -->

		<?php echo $after_widget;
	}

	/* Update the widget settings */
	function update ( $new_instance, $old_instance ) {
		$instance = $old_instance;
		$instance['title'] = $new_instance['title'];
		return $instance;
	}

	/* Output user options */
	function form( $instance ) {
		if( !isset( $instance['title'] ) ) $instance['title'] = __('Around The Web' , 'ta-portfolio');
		?>

		<p>
		<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title ','ta-portfolio' ) ?></label>
		<input class="widefat" type="text" value="<?php echo esc_attr( $instance['title'] ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" id="<?php echo $this->get_field_id( 'title' ); ?>" />
		</p>

		<?php
	}

} // end ta_portfolio_social_widget

?>