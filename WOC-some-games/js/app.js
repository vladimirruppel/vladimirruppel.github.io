// // Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

import 'slick-carousel'

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	$('.games-slider').slick({
		prevArrow: '<img class="slick-prev" src="images/dist/arrow.svg" alt="Назад">',
		nextArrow: '<img class="slick-next" src="images/dist/arrow1.svg" alt="Вперед">',
		dots: true,
		autoplay: true,
	})

	$('.callback-form__checkbox-agreement label').on('click', function() {
		$(this).toggleClass('active');
		$(this).parent().children('input').prop('checked', !$(this).parent().children('input').prop('checked'))
	})

})
