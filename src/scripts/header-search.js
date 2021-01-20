$(function(){
    var searchPopup = $('#header-search'),
        btnShowPopup = $('#search-header-btn');

    btnShowPopup.on('click', function() {
        searchPopup.collapse('show');
    });

    $(document).mouseup(function (e){
        if (!searchPopup.is(e.target) && searchPopup.has(e.target).length === 0) {
            searchPopup.collapse('hide');
        }
    });
})