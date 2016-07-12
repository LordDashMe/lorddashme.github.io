// Add Bootstrap specific functions and styling.
jQuery(document).ready(function(){
	jQuery('.comment-reply-link').addClass('btn btn-default btn-sm');
	jQuery('button[type=submit]').addClass('btn btn-default');
	jQuery('#submit, html input[type=button], input[type=reset], input[type=submit]').addClass('btn btn-default btn-sm');
	jQuery('.widget_rss ul').addClass('media-list');
	jQuery('select').addClass('form-control');
	jQuery('table#wp-calendar').addClass('table table-striped');
	jQuery('#infinite-handle').addClass('btn btn-default');
	jQuery('.tagcloud a').addClass('btn btn-default btn-xs');
	jQuery('#submit, .tagcloud, button[type=submit], .comment-reply-link, .widget_rss ul, .select, table#wp-calendar, #infinite-handle').show("fast");
});

// Handle new items appended by infinite scroll.
jQuery(document).on('post-load', function() {
	setInterval( function() {
		jQuery('#infinite-handle').addClass('btn btn-default');
		jQuery('#submit, html input[type=button], input[type=reset], input[type=submit]').addClass('btn btn-default btn-sm');
	}, 300 );
});

// Adding a Filter to the Portfolio page
jQuery(document).ready(function($) {
	// initialize Isotope after all images have loaded
	var $container = $('#portfolio-items').imagesLoaded( function() {
		$container.isotope({
			itemSelector: '.item',
			layoutMode: 'fitRows'
		});
	});

	// filter items on button click
	$('#filters').on( 'click', 'li', function() {
		var filterValue = $(this).attr('data-filter');
		$container.isotope({ filter: filterValue });
	});

	// change active class on buttons
	$('.filters').each( function( i, filters ) {
		var $filters = $( filters );
		$filters.on( 'click', 'li', function() {
			$filters.find('.active').removeClass('active');
			$( this ).addClass('active');
		});
	});
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
(function($) {
    $('.page-scroll a, .menu-item a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
}(jQuery));

// Floating label headings for the contact form
(function($) {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
}(jQuery));

// Highlight the top nav as scrolling occurs
jQuery('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
jQuery('.navbar-collapse ul li a').click(function() {
    jQuery('.navbar-toggle:visible').click();
});