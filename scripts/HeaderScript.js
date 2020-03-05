window.onbeforeunload = function () {
	window.scrollTo(0,0);
};

$(document).ready(function(){
	$(window).scroll(function(){
		var scrollPos = 60;

		if ($(document).scrollTop() >= scrollPos){
			$('#portfolio-header').addClass('active');
			$('#sticky').addClass('active');
		}
		else if ($(document).scrollTop() < scrollPos) {
			$('#portfolio-header').removeClass('active');
			$('#sticky').removeClass('active');
		}
	});
});