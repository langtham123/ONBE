
$(document).ready(function() {
	if ($('.owl-carousel').length) {
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			responsive:{
				375:{
					items:1
				},
			}
		})
	}

	if ($('.slickCarouselCenter').length) {
		$('.slickCarouselCenter').slick({
			centerMode: true,
			centerPadding: '105px',
			slidesToShow: 1,
			dots: true,
			prevArrow: false,
			nextArrow: false
		})
	}
	if($('.slickKeywords').length)
	{
		$('.slickKeywords').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			swipeToSlide: true,
			rows: 1,
			variableWidth: true,
			prevArrow: false,
			nextArrow: false,
			initialSlide: 1,
			centerMode: true,
		})
	}

	if ($('.slickKeywordsChara').length) {
		$('.slickKeywordsChara').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			variableWidth: true,
			prevArrow: false,
			nextArrow: false
		})
	}

	if ($('.slickBannerCarousel').length) {
		$('.slickBannerCarousel').slick({
			dots: true,
			infinite: true,
			centerMode: true,
			centerPadding: '60px',
			slidesToShow: 3,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '14px',
						slidesToShow: 3
					}
				},
				{
					breakpoint: 480,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '14px',
						slidesToShow: 1
					}
				}
			]
		})
	}

	if ($('.slickRaiseCarousel, .slickSeminarCarousel').length) {
		$('.slickRaiseCarousel, .slickSeminarCarousel').slick({
			slidesToShow: 1.03,
			slidesToScroll: 1,
			dots: true,
			infinite: false,
			centerMode: false,
			arrows: false
		})
	}

	if ($('.slickGlowingCommentCarousel').length) {
		$('.slickGlowingCommentCarousel').slick({
		})
	}

});