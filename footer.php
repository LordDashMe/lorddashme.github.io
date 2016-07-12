<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package TA Portfolio
 */
?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer text-center" role="contentinfo">
		<div class="footer-above">
            <div class="container">
                <div class="row">
                    <div class="footer-col col-md-4">
                        <?php dynamic_sidebar( 'footer-1' ); ?>
                    </div>
                    <div class="footer-col col-md-4">
                        <?php dynamic_sidebar( 'footer-2' ); ?>
                    </div>
                    <div class="footer-col col-md-4">
                        <?php dynamic_sidebar( 'footer-3' ); ?>
                    </div>
                </div>
            </div>
        </div>
		<div class="footer-below">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <?php if ( ta_option( 'custom_copyright' ) != '') : ?>
								<?php echo ta_option( 'custom_copyright' ); ?>
						<?php endif; ?>
                    </div>
                </div><!-- .row -->
            </div><!-- .container -->
        </div>
	</footer><!-- #colophon -->
	
	<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
    <div class="scroll-top page-scroll visible-xs visble-sm">
        <a class="btn btn-primary" href="#page">
            <i class="fa fa-chevron-up"></i>
        </a>
    </div>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
