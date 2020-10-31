$(document).ready(function() {
	/*$('.menu ul li:first-child a').addClass('active');
	$('.menu section').first().addClass('show');*/

	$('.menu ul li a').on('click', function() {
		if (!$(this).hasClass('active')) {
			var id = $(this).attr('href');
			$('.menu ul li a').removeClass('active');
			$(this).addClass('active');
			$('.menu section').removeClass('show');
			$(id).addClass('show');
		} else {
			$('.menu ul li a').removeClass('active');
			$('.menu section').removeClass('show');
		}
	});
});