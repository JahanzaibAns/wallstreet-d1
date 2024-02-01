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
	// const lastName = document.getElementById('lastName').value;
	const email = document.getElementById('email').value;
	const phoneNo = document.getElementById('phoneNo').value;

	// Store data in local storage
	const dataToStore = { firstName, email, phoneNo };
	localStorage.setItem('registrationData', JSON.stringify(dataToStore));

	// Log the stored data
	console.log('Stored data:', dataToStore);

	// Redirect to the next page
	window.location.href = 'four-steps-form.html';
};

