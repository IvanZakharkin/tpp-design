$(function() {
    // var 
    // var tagsContainer = $('.person').find('.tags'),
    //     maxContainerHeigth = tagsContainer.find('.tags__item').outerHeight(true),
    //     tagsContainerHeigth = tagsContainer.height();
    // if(tagsContainerHeigth > maxContainerHeigth) {
    //     tagsContainer.append($('<li class="tags__item"><a class="tags__link tags__link_showAll" href="#">Показать все</a></li>'));
    //     var tags = tagsContainer.find('.tags__item'),
    //         indexHidingEl = tags.length - 1,
    //         hiddenTags = [],
    //         hiddenTagsShowing = false;
    //     do {
    //         indexHidingEl -= 1;
    //         hiddenTags.push(tags[indexHidingEl]);
    //         $(tags[indexHidingEl]).hide();
    //         tagsContainerHeigth = tagsContainer.height();
    //     } while(tagsContainerHeigth > maxContainerHeigth)
    // }
    console.log('123123123123123asasdasdasd');
    $('.tags__link_all').on('click', function(e) {
        e.preventDefault();
        $(this).siblings('.tags__item-hover').toggleClass('show');
    })
});