$(document).ready(function(){
	$(window).scroll(function(){
		var scrollPos = 60;

		if ($(document).scrollTop() >= scrollPos){
			$('#portfolio-header').addClass('active');
		}
		else if ($(document).scrollTop() < scrollPos) {
			$('#portfolio-header').removeClass('active');
		}
	});
});