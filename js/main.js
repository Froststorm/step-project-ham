/**
 * services tabs manipulate
 */
$(`.tab`).click(function () {
	const tabindex = $(`.tabs-caption li`).index(this);
	switchTabs(this, "web-active", "tabs-content", tabindex);
});

function switchTabs(elem, switchClass, contentClass, index) {
	$(elem).addClass(switchClass).siblings().removeClass(switchClass);
	$(`.${contentClass}`).removeClass("content-active").eq(index).addClass("content-active");

}

/**
 *all images
 */

const btnLoadMore = $("#load");
const workImages = $(".cat");
const addHeight = 3;
let counter = 0;
const addGridHeight = 3;
workImages.hide(); // hide category
workImages.slice(0, 12).show(500);
btnLoadMore.click(function(){
	const imageType = $(".work-tab.actwork").data("filter");
	$(`.cat${imageType}:hidden`).slice(0,6).show();
	counter++;
	$(".work").css({"grid-area":`17 / 1 / ${25 + addGridHeight} / 7`});
	$(".news").css({"grid-area": `${25 + addHeight+1}/ 2 / ${31 + addHeight} / 6`});
	$(".feedback").css({"grid-area":`${31 + addHeight} / 1 / ${39 + addHeight} / 7`});
	$(".gallery").css({"grid-area":`${39 + addHeight} / 2 / ${49 + addHeight} / 6`});
	$(".footer").css({"grid-area":`${49 + addHeight}/ 1 / ${49 + addHeight} / 7`});
	$(".container").css({"grid-template-rows":`repeat(${49 + addHeight}, 1fr)`});
	console.log($(".news").css("grid-area"));
	if (counter === 2) {
		$(btnLoadMore).hide();
		counter = 0;
	}
});

$('.work-tab').click(function() {
	$(btnLoadMore).hide();
	$(this).addClass('actwork').siblings().removeClass("actwork");
	let imageType = $(this).data("filter");
	console.log(`imageType ${imageType}`);
	$(".cat").hide();
	$(`.cat${imageType}`).slice(0,8).show();
	$(".work").css({"grid-area":`17 / 1 / ${25} / 7`});
	$(".news").css({"grid-area": `${25}/ 2 / ${31} / 6`});
	$(".feedback").css({"grid-area":`${31} / 1 / ${39} / 7`});
	$(".gallery").css({"grid-area":`${39} / 2 / ${49} / 6`});
	$(".footer").css({"grid-area":`${49}/ 1 / ${49} / 7`});
	$(".container").css({"grid-template-rows":`repeat(${49}, 1fr)`});
	if (counter === 2) {
		counter = 0;
	}

});