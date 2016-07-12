<?php
/**
 * @package TA Portfolio
 *
 * Search Form Template
 */
?>
 
<form method="get" class="form-search" action="<?php echo home_url( '/' ); ?>">
	<div class="row">
		<div class="col-sm-12 col-md-12 col-lg-12">
			<div class="input-group">
				<input type="text" class="form-control search-query" name="s" placeholder="<?php esc_attr_e( 'search here &hellip;', 'ta-portfolio' ); ?>" />
				<span class="input-group-btn">
					<button type="submit" name="submit" id="searchsubmit" value="<?php esc_attr_e( 'search', 'ta-portfolio' ); ?>"><?php _e( 'Search', 'ta-portfolio' ); ?></button>
				</span>
			</div>
		</div>
	</div>
</form>