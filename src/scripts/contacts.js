$(function(){
	function showPopup (e, element) {
		var popup = element.siblings('.contacts__popup');
		$('.contacts__popup').each(function (index, el) {
			if (!$(el).is(popup)) $(el).removeClass('contacts__popup_active');
		});
		popup.toggleClass('contacts__popup_active')
	}

$('.contacts__person-post').click(function(e){
	e.preventDefault();
	showPopup($(this));
})
$('.contacts__person-departamnet-link').click(function (e) {
	e.preventDefault();
	showPopup($(this));
});
$('.contacts__popup-btn-close').click(function(e){
	$(this).parent().removeClass('contacts__popup_active');
})

});


$(function (){
	var firstColumn = $(".contacts").find(".col-12:first-child"), 
		persons = firstColumn.find(".contacts__person").get().reverse(),
		maxHeight = firstColumn.outerHeight() / 2,
		secondColumn = $("<div class='col-12 col-md-4 mb-3 mb-md-0'></div>"),
		heigthSecondColumn = 0;

	if(persons.length > 1) {
		firstColumn.after(secondColumn);
		persons.forEach(function (element) {
			heigthSecondColumn += $(element).outerHeight(true);
			if(heigthSecondColumn <= maxHeight) {
				secondColumn.prepend($(element));
			}
		})
	}
});