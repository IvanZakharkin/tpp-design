$(function () {
	function addApi(video) {
		// var video = $('#video-ytb');
		var videoFrame = $(video).find('iframe');
		var src = videoFrame.attr('src');
		var enableToApi = src.includes('enablejsapi');
		if (!enableToApi) {
			var splitSrc = src.split('?');
			if (splitSrc[1]) {
				src = `${splitSrc[0]}?enablejsapi=1&${splitSrc[1]}`
			} else {
				src = splitSrc[0] + '?' + 'enablejsapi=1'
			}
			videoFrame.attr('src', src);
		};
	}

	if ($('.video').length >= 1) {
		$('.video').each(function(index, el) {
			addApi(el);
		})
	}

	$(".video").find(".video__modal").on('hidden.bs.modal', function (e) {
		console.log(123, e);
		var $this = $(this),
			iframe = $this.find("iframe")[0];
		$this.find("iframe").remove();
		$this.find(".modal-content").append(iframe);
	  })
});

function onYouTubeIframeAPIReady() {
	mainPlayer = new YT.Player('video-ytb', {
		events: {
			'onReady': onPlayerReady
		},
	});
};
function onPlayerReady() {
	$('#video-ytb').siblings('.video__preview').on('click', function () {
		$(this).hide()
		mainPlayer.playVideo();
	});
}
