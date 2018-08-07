(function ($) {
	$(document).ready(function (){	
		var html_body = $("html,body"),
	        mobile_menu = $("#mobile-menu"),
	        nav_mobile_menu_btn = $("#nav-mobile-menu-btn"),
	        menu_top_search_form = $("#menu-top-search-form"),
	        menu_top_search_val = $("#menu-top-search-form input[type=text]"),
	        menu_top_search_submit = $("#menu-top-search-submit"),
	        menu_bottom_search_form = $("#menu-bottom-search-form"),
	        menu_bottom_search_val = $("#menu-bottom-search-form input[type=text]"),
	        menu_bottom_search_submit = $("#menu-bottom-search-submit"),
	        language_menu_select = $("#language-menu-select"),
	        fancybox_link = $(".fancybox-link"),
	        wp_img_fancybox_link = $(".size-medium, img.alignnone"),
	        roparun_sponsor_wrapper = $(".roparun-sponsor-wrapper"),
	        donate_iframe = $("#donate-iframe"),
	        link_with_image = $(".link_with_image"),
	        window_width = 0;

    	window_width = $(window).width();
    
	    fancybox_link.fancybox({
	        loop: false,
	        nextEffect: 'fade',
	        prevEffect: 'fade',
	        title: false,
	        closeBtn: false,
	        arrows: false,
	        helpers: {
	            buttons: {
	                position: 'top'
	            }
	        }
	    });
	    wp_img_fancybox_link.parent().fancybox({
	        loop: false,
	        nextEffect: 'fade',
	        prevEffect: 'fade',
	        title: false,
	        closeBtn: false,
	        arrows: false,
	        helpers: {
	            buttons: {
	                position: 'top'
	            }
	        }
	    });

	    mobile_menu.removeClass("page-loading").mmenu({
	        slidingSubmenus: false
	    });
	
	    link_with_image.find("img").attr("data-pin-no-hover", "true");


    	menu_top_search_submit.click(function(e) {
        if (!menu_top_search_form.hasClass("open") && window_width > 991) {
            e.preventDefault();
            menu_top_search_form.addClass("open");
            setTimeout(function() {
                menu_top_search_val.focus();
            });
        }
    	});
	    menu_top_search_form.submit(function(e) {
	        var menu_top_search_value = menu_top_search_val.val();
	        if ($.trim(menu_top_search_value) === "" && window_width > 991) {
	            e.preventDefault();
	            menu_top_search_val.focus();
	        }
	    });
	    $(document).click(function(event) {
	        if (!$(event.target).closest('#menu-top-search-form').length) {
	            var menu_top_search_value = menu_top_search_val.val();
	            if ($.trim(menu_top_search_value) === "" && menu_top_search_form.hasClass("open")) {
	                menu_top_search_form.removeClass("open");
	            }
	        }
	    });
	
	    menu_bottom_search_submit.click(function(e) {
	        if (!menu_bottom_search_form.hasClass("open") && window_width > 480) {
	            e.preventDefault();
	            menu_bottom_search_form.addClass("open");
	            setTimeout(function() {
	                menu_bottom_search_val.focus();
	            });
	        }
	    });
	    menu_bottom_search_form.submit(function(e) {
	        var menu_bottom_search_value = menu_bottom_search_val.val();
	        if ($.trim(menu_bottom_search_value) === "" && window_width > 480) {
	            e.preventDefault();
	            menu_bottom_search_val.focus();
	        }
	    });
	    $(document).click(function(event) {
	        if (!$(event.target).closest('#menu-bottom-search-form').length) {
	            var menu_bottom_search_value = menu_bottom_search_val.val();
	            if ($.trim(menu_bottom_search_value) === "" && menu_bottom_search_form.hasClass("open")) {
	                menu_bottom_search_form.removeClass("open");
	            }
	        }
	    });
	
	    language_menu_select.change(function() {
	        var language_menu_select_value = language_menu_select.find("option:selected").val();
	        window.location.href = language_menu_select_value;
	    });
    
	    /*$(window).resize(function() {
	    	window_width = $(window).width();
	    	if (window_width <= 480) {
	        menu_bottom_search_val.val("");
	        menu_bottom_search_form.removeClass("open");
	    	}
			});*/
 });
}) (jQuery);
