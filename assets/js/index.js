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