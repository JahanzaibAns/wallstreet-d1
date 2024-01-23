$(document).ready(function () {
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		var headerSticky = $("#header-sticky");
		var scrolledClass = 'scrolled-header';
		var logo = $("#logo");

		if (scroll < 200) {
			headerSticky.removeClass("sticky-menu " + scrolledClass);
			// Set the original logo when not sticky
			logo.attr("src", "assets/images/ATM logo1.png");
		} else {
			headerSticky.addClass("sticky-menu " + scrolledClass);
			// Set the sticky logo when header is sticky
			logo.attr("src", "assets/images/F-logo.webp");
		}
	});
});