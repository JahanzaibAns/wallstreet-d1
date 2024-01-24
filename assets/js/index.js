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

// index js
document.getElementById('phoneNo').addEventListener('input', function (e) {
	var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
	e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});


// Function to clear local storage
function clearLocalStorage() {
	localStorage.removeItem('registrationData');
}

// Function to save data to local storage and redirect to the next page
const saveDataAndRedirect = () => {
	// Retrieve form data
	const firstName = document.getElementById('firstName').value;
	const lastName = document.getElementById('lastName').value;
	const email = document.getElementById('email').value;
	const phoneNo = document.getElementById('phoneNo').value;

	// Store data in local storage
	const dataToStore = { firstName, lastName, email, phoneNo };
	localStorage.setItem('registrationData', JSON.stringify(dataToStore));

	// Log the stored data
	console.log('Stored data:', dataToStore);

	// Redirect to the next page
	window.location.href = 'four-steps-form.html';
};
