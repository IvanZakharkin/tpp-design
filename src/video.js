$(function () {




    $('.video__secondary').on('click', function () {
        $('.modal-video').addClass('modal-video_active');
        $(this).find('iframe').clone().appendTo('.modal-video__content');
    });

    $('.modal-video').on('click', function (e) {
        if (event.currentTarget === this) {
            $(this).removeClass('modal-video_active');
            $(this).find('iframe').remove();
        }
    })
});


// var player;
// function onYouTubeIframeAPIReady() {
//     player = new YT.Player('video', {
//         // height: "405",
//         // width: "660",
//         // videoId: "zmg_jOwa9Fc",
//         events: {

//         },
//         playerVars: {
//             // controls: 0,
//             // disablekb: 0,
//             // showinfo: 0,
//             // rel: 0,
//             // autoplay: 1,
//             // modestbranding: 0
//         }
//     });
// }


// $('.video__main').find('.video__secondary-play').on('click', function () {
//     $(this).hide();
//     $('.video__main').find('.video__secondary-preview-img').hide();
//     $('#video')[0].playVideo();
// });