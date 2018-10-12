

$(document).ready(function() {
// page title (transparent black box) slide
	$('.pg-title').show('slide', {direction: 'left'}, 2000); 
	
	
// logo slide	
	$('.ww-logo').hide().show('slide', {direction: 'up'}, 1000); 


// gallery pieces slide
	$('.project-works a').hide(); 
	$(window).scroll(function() {
		var hT = $('.project-works').offset().top,
		hH = $('.project-works').outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
			if (wS > (hT+hH-wH)){
				$(".gal-piece1").fadeIn(1000);
				$(".gal-piece2").fadeIn(1300);
				$(".gal-piece3").fadeIn(1650);
				$(".gal-piece4").fadeIn(2000);
				$(".gal-piece5").fadeIn(2250);
			}
	});


}); // end document.ready