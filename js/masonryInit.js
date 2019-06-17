let $grid = $('.grid').imagesLoaded(function () {
	// init Masonry after all images have loaded
	$grid.masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		gutter: 22,
		percentPosition: true,
		isAnimated: true,
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});
});


