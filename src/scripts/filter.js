$(function () {
	$('.filter__btn-detail').on('click', function () {
		var $this = $(this);
		var textBtn = $(this).find('.filter__btn-detail-text')
		var filter = $this.parent();
		if (filter.hasClass('filter_active')) {
			filter.removeClass('filter_active');
			textBtn.text('развернуть фильтр')
		} else {
			filter.addClass('filter_active');
			textBtn.text('свернуть фильтр')
		}
	})
})		