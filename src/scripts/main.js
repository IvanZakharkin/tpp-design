$(function () {
	const
		breakpointXXL = 1500,
		breakpointXL = 1200,
		breakpointLG = 992,
		breakpointMD = 768,
		breakpointSM = 576;

	$('.services__slider').find('.slider__container').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		prevArrow: $('.services__slider').find('.slider__btn_prev'),
		nextArrow: $('.services__slider').find('.slider__btn_next'),
		responsive: [
			{
				breakpoint: breakpointLG,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: breakpointMD,

				settings: {
					slidesToShow: 1,
					centerMode: true,
				}
			},
		]
	});
	$('.projects__slider').find('.slider__container').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		prevArrow: $('.projects__slider').find('.slider__btn_prev'),
		nextArrow: $('.projects__slider').find('.slider__btn_next'),
		responsive: [
			{
				breakpoint: breakpointLG,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: breakpointMD,

				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '40px',
				}
			},
		]
	});
	$('.initiatives__slider').find('.slider__container').slick({
		// infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		// dots: true,
		dotsClass: "slider__dots_blue",
		prevArrow: $('.initiatives__slider').find('.slider__btn_prev'),
		nextArrow: $('.initiatives__slider').find('.slider__btn_next'),
		responsive: [
			{
				breakpoint: breakpointLG,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: breakpointMD,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});
	$('.company__slider').find('.slider__container').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		dotsClass: "slider__dots_blue",
		prevArrow: $('.company__slider').find('.slider__btn_prev'),
		nextArrow: $('.company__slider').find('.slider__btn_next'),
		responsive: [
			{
				breakpoint: breakpointLG,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: breakpointMD,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});
	$('.offers__slider').find('.slider__container').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		dotsClass: "slider__dots_blue",
		prevArrow: $('.offers__slider').find('.slider__btn_prev'),
		nextArrow: $('.offers__slider').find('.slider__btn_next'),
		responsive: [
			{
				breakpoint: breakpointLG,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: breakpointMD,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});
	$('.services-representation__slider').find('.slider__container').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('.services-representation__slider').find('.slider__btn_prev'),
		nextArrow: $('.services-representation__slider').find('.slider__btn_next'),
		responsive: [
			{
				breakpoint: breakpointLG,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: breakpointMD,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});
	$('.promo__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: $('.promo__slider-item').length > 1,
		dotsClass: "slider__dots_promo",
	});
	$('.team__slider').find('.slider__container').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('.team__slider').find('.slider__btn_prev'),
		nextArrow: $('.team__slider').find('.slider__btn_next'),
		responsive: [
			{
				breakpoint: breakpointXXL,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: breakpointLG,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: breakpointMD,
				settings: {
					slidesToShow: 1,
				}
			},
		],
	});
	$('.news__slider').find('.slider__container').slick({
		// infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: true,
		autoplaySpeed: 10000,
		prevArrow: $('.news__slider').find('.slider__btn_prev'),
		nextArrow: $('.news__slider').find('.slider__btn_next'),
		responsive: [
			{
				breakpoint: breakpointLG,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: breakpointMD,
				settings: {
					slidesToShow: 1,
				}
			},
		],
	});


	var updateSliderCounter = function (slick, currentIndex) {
		currentSlide = slick.slickCurrentSlide() + 1;
		slidesCount = slick.slideCount;
		$('.slider-photos-one-pic__counter-photo').text(currentSlide + '/' + slidesCount)
	};


	$('.slider-photos-one-pic__list').on('init', function (event, slick, currentSlide) {
		updateSliderCounter(slick);
	});
	$('.slider-photos-one-pic__list').on('afterChange', function (event, slick, currentSlide) {
		updateSliderCounter(slick);
	});


	$('.slider-photos-one-pic__list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		asNavFor: '.slider-photos__list',
		// infinite:true,
		prevArrow: $('.slider-photos-one-pic__container').find('.slider-photos-one-pic__btn_prev'),
		nextArrow: $('.slider-photos-one-pic__container').find('.slider-photos-one-pic__btn_next'),
	});
	$('.slider-photos__list').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-photos-one-pic__list',
		centerMode: true,
		centerPadding: '0px',
		// infinite:true,
		focusOnSelect: true,
		arrows: true,
		responsive: [
			{
				breakpoint: breakpointXL,
				settings: {
					arrows: false
				}
			},
		],
	});


});