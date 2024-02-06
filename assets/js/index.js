function openNav() {
	document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
	document.getElementById("sidebar").style.width = "0";
}

 // Get the navigation bar element
 var navbar = document.getElementById("header-sticky");

 // Get the offset position of the navbar
 var sticky = navbar.offsetTop;

 // Function to add or remove the "sticky" class based on scroll position
 function stickyNavbar() {
	 if (window.pageYOffset >= sticky) {
		 navbar.classList.add("sticky");
	 } else {
		 navbar.classList.remove("sticky");
	 }
 }

 // Attach the function to the scroll event
 window.onscroll = function () {
	 stickyNavbar();
 };

 $(document).ready(function(){
	$("#brandCarousel").owlCarousel({
		items: 4, // Set the number of items to show
		autoplay: true,
		autoplayTimeout: 2000, // Set the autoplay interval in milliseconds (e.g., 2000 for 2 seconds)
		autoplayHoverPause: true,
		loop: true,
		nav: false,
		dots: false,
		animateOut: 'fadeOut',  // Set the CSS class for the "out" animation
            animateIn: 'fadeIn'
	});
});