$(function() {

	//Chrome Smooth Scroll
	/*
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};\
	*/

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	AOS.init();
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
