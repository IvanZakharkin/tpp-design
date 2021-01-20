$(function () {
	$('.contacts__popup-desc').each(function (index, element) {
		new SimpleBar(element);
	});

	$('.bcalendar__week-grid').each(function (index, element) {
		new SimpleBar(element);
	});

	$('.news-list').each(function (index, element) {
		new SimpleBar(element);
	});

	$('.header-search__flags').each(function (index, element) {
		new SimpleBar(element);
	});
	$('.header-search__text-content').each(function (index, element) {
		new SimpleBar(element);
	});


});