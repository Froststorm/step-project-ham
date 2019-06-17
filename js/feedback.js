$(document).ready(function () {
	$('.feedback-slider').slick({
		autoplay: true,
		arrows: false,
		fade: true,
		autoplaySpeed: 4500,
		pauseOnHover:true
	});
	$('.slider-nav').slick({
		useCSS: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.feedback-slider',
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 4200,
		pauseOnHover:true
	});

});