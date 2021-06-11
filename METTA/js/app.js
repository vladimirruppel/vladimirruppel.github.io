document.addEventListener("DOMContentLoaded", function() {

	$(".review-wrap .tab-content").not(":first").hide();
	
	$(".review-wrap .tab-item").click(function () {
		$(".review-wrap .tab-item").removeClass("active").eq($(this).index()).addClass("active");
		$(".review-wrap .tab-content").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$('.photo-gallery__slider').slick({
		arrows: false,
		variableWidth: true,
		autoplay: true,
	});

});
