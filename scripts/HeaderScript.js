window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}


$(document).ready(function(){
	
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
		$('nav').toggleClass('open');
	});

	$(window).scroll(function(){
		var scrollPos = 60;

		if ($(document).scrollTop() >= scrollPos){
			$('.header-inner-wrapper').addClass('active');
			$('.landing-area-overlay').addClass('active');
		}
		else if ($(document).scrollTop() < scrollPos) {
			$('.header-inner-wrapper').removeClass('active');
			$('.landing-area-overlay').removeClass('active');
		}
	});
});
