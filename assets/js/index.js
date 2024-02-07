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

 var swiper = new Swiper ('.home-page-partner-slider-left', {
	spaceBetween: 30,
	
	autoplay: {
		disableOnInteraction: false,
		reverseDirection: false,
		delay: 200
	   
	},
	loop: true,
	speed: 2000,
	pagination: false,
	
	breakpoints: {
	
		320: {
		  slidesPerView: 1,
			
		},
		
		768: {
		  slidesPerView: 3,
		  
		},
		
		1200: {
		  slidesPerView: 4,
		  
		}
	}
  
  });