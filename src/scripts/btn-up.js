$(function () {
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 700) {
			$(".btn-scrollup").css('opacity', '0.6');
		} else {
			$(".btn-scrollup").css('opacity', '0');
		}
		let coordY = $(window).scrollTop() + $(window).height() - 200
		$(".btn-scrollup").css('top', `${coordY}px`)

	});
	$(".btn-scrollup").on("click", function () {
		$('html, body').animate({ scrollTop: 0 }, 700);
		return false;
	});

});