$(function () {
    var
        businessAdvices = $('.business-advices').find('.organization-card');
    showesAdvicesCount = 12;
    btnShowAdvices = $('.business-advices__btn-show-all');
    hiddenAdvices = businessAdvices.slice(showesAdvicesCount);
    if (businessAdvices.length < showesAdvicesCount) {
        btnShowAdvices.hide();
    }
    btnShowAdvices.find('span').text(hiddenAdvices.length);
    hiddenAdvices.hide();

    btnShowAdvices.on('click', function () {
        hiddenAdvices.show();
        $(this).hide();
    })
})