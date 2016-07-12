<?php
/**
 * About Me Widget Class
 *
 * @package TA Portfolio
 */

class ta_portfolio_about_me_widget extends WP_Widget {
	/* Object variables */
	public $default_options = array(
			'author'	=> 0,	// Start with no user.
			'title'		=> ''
	);

	/* Constructor method */
	function ta_portfolio_about_me_widget() {
		$widget_ops = array( 'classname' => 'about-me-widget', 'description' => __( "Add about me widget to your sidebar." , 'ta-portfolio' ) );
		$this->WP_Widget( 'ta_portfolio_about_me_widget', __( 'TA Portfolio: About Me Widget', 'ta-portfolio' ), $widget_ops );
    }
	
	/* Render this widget in the sidebar */
	function widget( $args, $instance ) {
		extract($args);
		$author_id = $instance['author'];
		$ta_title = $this->get_title($instance['title'], $author_id);
		$title = apply_filters( 'widget_title', $ta_title );
		echo $before_widget;
		if ( !empty( $title ) ) { echo $before_title . $title . $after_title; }
		?>

		<div class="about-me-thumb"><?php echo get_avatar( $author_id, 150 ); ?></div>
		<h5><?php echo $this->get_user_name( $author_id ); ?></h5>
		<p><?php echo $this->get_about_text( $author_id ); ?></p>

		<?php echo $after_widget;
	}

	/* Output user options */
	function form( $instance ) {

		// Update the form variables if there are values stored for this instance.
		if ( $instance ) {
			// Get the user that this about widget is for (get their id)
			$author_id = $instance['author'];
			// Get the title
			$title = $this->get_title($instance['title'], $author_id);
		}
		else {
			$author_id = $this->default_options['author'];
			$title = $this->default_options['title'];
		}

		// Options for which author's bio to output. ?>
		<p><strong><?php _e( 'Select the author this widget is about:', 'ta-portfolio' ); ?></strong><br />
			<select name="<?php echo $this->get_field_name('author'); ?>">
				<?php $this->blog_author_options( $author_id ); ?>
			</select>
		</p>

		<?php // Options for the Title ?>
		<p><strong><?php _e( 'Title:', 'ta-portfolio' ); ?></strong><br />
			<input class="widefat" type="text" 
				id="<?php echo $this->get_field_id( 'title' ); ?>" 
				name="<?php echo $this->get_field_name( 'title' ); ?>" 
				value="<?php echo $title; ?>"/>
			<br /><?php _e( 'Leave blank for default - "About Me."', 'ta-portfolio' ); ?>
		</p>
		
		<p><strong><?php _e( 'Mugshot', 'ta-portfolio' ); ?></strong>
			<br /><?php _e( 'To get your profile picture to show up automatically, <a href="http://en.gravatar.com/">get a Gravatar</a>.', 'ta-portfolio' ); ?><br />
		</p>

		<p><strong><?php _e( 'Bio', 'ta-portfolio' ); ?></strong>
			<br /><?php _e( 'Go edit', 'ta-portfolio' ); ?> <a href="<?php echo admin_url('profile.php'); ?>"><?php _e( 'your Profile', 'ta-portfolio' ); ?></a> <?php _e( '"Biogaphical Info" to change the text of this bio.', 'ta-portfolio' ); ?>
		</p>

	<?php }
	
	/* Update the widget settings */
	function update ( $new_instance, $old_instance ) {
		$instance = $old_instance;
		$instance['author'] = $new_instance['author'];
		if ( $new_instance['author'] != $old_instance['author'] ) {
			$instance['title'] = $default_options['title'];
		}
		else {
			$instance['title'] = $new_instance['title'];
		}
		return $instance;
	}
	 
	/* Ouput all authors and their ids in option tags */
	function blog_author_options( $selected_id ) {
		// Get an array of all the users on the site that aren't subscribers
		$wp_user_search = new WP_User_Query( array( 'role' => 'administrator' ) );
		$admins = $wp_user_search->get_results();
		$wp_user_search = new WP_User_Query( array( 'role' => 'editor' ) );
		$editors = $wp_user_search->get_results();
		$wp_user_search = new WP_User_Query( array( 'role' => 'author' ) );
		$authors = $wp_user_search->get_results();
		$wp_user_search = new WP_User_Query( array( 'role' => 'contributor' ) );
		$contributors = $wp_user_search->get_results();
		$authors = array_merge( $admins,$editors,$authors,$contributors );

		foreach ( $authors as $author) {
			echo '<option value="' . $author->ID . '" ';
			if ( $selected_id == $author->ID ) { echo 'selected '; }
			echo '>';
			echo $author->display_name;
			echo '</option>';
		}

	}

	/* Retrive title */
	function get_title( $optional_text, $author_id ) {
		if( $author_id == 0 ) return 'About Me';
		if ( !empty( $optional_text ) ) {
			return esc_html( $optional_text );
		}
		else { // If the user leaves the title blank, return "About Me"
			return 'About Me';
		}
	}

	/* Retrive the "about me" text */
	function get_about_text ( $author_id ) {
		if ( $author_id == 0 ) return '';
		
		$author = get_userdata( $author_id );
		$bio = $author->user_description;
		return $bio;
	}

	/* Retrive user name */
	function get_user_name ( $author_id ) {
		if ( $author_id == 0 ) return '';
		
		$author = get_userdata( $author_id );
		$name = $author->display_name;
		return $name;
	}

}// end ta_portfolio_about_me_widget

?>