window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}


$(document).ready(function(){
	
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
		$('nav').toggleClass('open');
	});

	$(window).scroll(function(){
		var scrollPos = 80;

		if ($(document).scrollTop() >= scrollPos){
			$('.header-inner-wrapper').addClass('active');
		}
		else if ($(document).scrollTop() < scrollPos) {
			$('.header-inner-wrapper').removeClass('active');
		}
	});
});
