$(function () {
	if(sessionStorage.getItem('viewNews') === 'gorizontal' || !sessionStorage.getItem('viewNews')) {
		changeViewsNews('gorizontal');
	}
	if(sessionStorage.getItem('viewNews') === 'vertical') {
		changeViewsNews('vertical');
	}

	function changeViewsNews(type) {
		var newsList = $('.news-page__list');
		if(type ==="gorizontal") {
			newsList.find('.col-12').addClass('col-sm-6 col-md-4 py-3');
			newsList.find('.new').removeClass('new_gorizontal');
			$('.btn-direction_gorizontal').addClass('btn-direction_active');
			$('.btn-direction_vertical').removeClass('btn-direction_active');
			sessionStorage.setItem('viewNews', 'gorizontal')
		}
		if(type ==="vertical") {
			newsList.find('.col-12').removeClass('col-sm-6 col-md-4 py-3');
			newsList.find('.new').addClass('new_gorizontal');
			$('.btn-direction_vertical').addClass('btn-direction_active');
			$('.btn-direction_gorizontal').removeClass('btn-direction_active');
			sessionStorage.setItem('viewNews', 'vertical')
		}
	}
	$('.news-page__btns').find('.btn-direction').on('click', function (e) {
		e.preventDefault();
		$this = $(this);
		if ($this.hasClass('btn-direction_vertical') && !$this.hasClass('btn-direction_active')) {
			changeViewsNews('vertical');
		}
		if ($this.hasClass('btn-direction_gorizontal') && !$this.hasClass('btn-direction_active')) {
			changeViewsNews('gorizontal');
		}
	});

	$(window).resize(function () {
		if (window.innerWidth < 768) {
			$('.btn-direction_gorizontal').click()
		};
	});

})