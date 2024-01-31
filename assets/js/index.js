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




// Place your existing initCarousel function here
$(document).ready(function () {
	$('.js-carousel').slick({
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  appendArrows: '.js-sliderArrows',
	  appendDots: '.js-sliderDots',
	  prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="YOUR_ARROW_LEFT_CLASS"></i></button>',
	  nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="YOUR_ARROW_RIGHT_CLASS"></i></button>',
	  centerMode: false,
	  centerPadding: '60px',
	  dots: true,
	  autoplay: true,
	  autoplaySpeed: 4000,
	  responsive: [
		{
		  breakpoint: 1600,
		  settings: {
			slidesToShow: 2
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 2
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1
		  }
		},
		{
		  breakpoint: 375,
		  settings: {
			slidesToShow: 1
		  }
		}
	  ]
	});
  });

