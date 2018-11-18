require('./chart/progress_bar.js');
require('./header/index.js');
require('./popup/popup.js');
require('./mypage/index.js');
require('./blur/index.js');
require('./comment/index.js');
$(document).ready(function() {

	// function active tab
	function activeTab(obj)
	{
		// remove class active on all tab
		$(obj).siblings('li').removeClass('active');

		// add class active to tab was clicked
		$(obj).addClass('active');

		// get id
		var id = $(obj).find('a').attr('href');

		// hide all tab content
		$(obj).parents('.tabWrapper').find('.tabItem').hide();

		// show content of tab
		$(id).show();
	}

	// event click on tab
	// $('.tabHeader li').click(function(){
	// 	activeTab(this);
	// 	return false;
	// });

	// event hover on tab
	$('.tabHeader li').hover(function(){
		activeTab(this);
		return false;
	});

	// event click reset
	$('.resetDate').click(function(){
		$(".datepickerId").datepicker().datepicker("setDate", new Date());
	});

	// Active first tab when page load
	activeTab($('.tabHeader li:first-child'));
	activeTab($('.tabHeaderPaid li:first-child'));

	//Gift close
	$('.shareGift .giftClose').click(function(){
		$('section.giftModule').fadeOut(500, function(){ $(this).remove();});
	});

	$('.topCommentAuthorAvatar li').hover(function () {
			$('.topCommentContainer').css('opacity', '0.5');
			$(".topCommentAuthorAvatar li").css('opacity', '0.5');
			$(".topCommentAuthorAvatar li").find('.topCommentPopup').css({
				'visibility' : 'hidden',
				'opacity' : '0'
			});
			$( this ).css('opacity', '1');
			$(this).find('.topCommentPopup').css({
				'visibility' : 'visible',
				'opacity' : '1'
			});
		},function () {
			$('.topCommentContainer').css('opacity', '1');
			$(".topCommentAuthorAvatar li").css('opacity', '1');
			$(".topCommentAuthorAvatar li").find('.topCommentPopup').css({
				'visibility' : 'hidden',
				'opacity' : '0'
			});
		}
	);

	$( ".btnPopupClose" ).click(function() {
		$(".close").trigger("click");
	});

	//slider in bpparts
	if ($('.bpimage_image_slider').length) {
		$('.bpimage_image_slider').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
		});
	}

	if($('a.fileLink.isOpen.showTooltip').length)
	{
		$('a.fileLink.isOpen.showTooltip').click(function(e){
			e.preventDefault();
			$('.paperBackground').css('display', 'flex');
			setTimeout( function() {
				$('.paperBackground').css('display', 'none');
			}, 3000);
		});
	}
	if($('a.urlLink.showTooltip').length)
	{
		$('a.urlLink.showTooltip').click(function(e){
			e.preventDefault();
			$('.copyLinkBackground').css('display', 'flex');
			setTimeout( function() {
				$('.copyLinkBackground').css('display', 'none');
			}, 3000);
		});
	}

	//For charjs
	if ($('#canvasChart').length) {
		var config = {
			type: 'radar',
			data: {
				labels: ["一般教養", "経済", "技術", "金融", "政治"],
				datasets: [{
					pointRadius: 0,
					data: [20,10,15,8,7],
					backgroundColor: [
						'#e6001e'
					],
					borderColor: [
						'#e6001e',
						'#e6001e',
						'#e6001e',
						'#e6001e',
						'#e6001e'
					],
					borderWidth: 0
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				legend: {
					display: false,
				},
				title: {
					display: false,
					text: 'あなたは〇〇な〇〇タイプ'
				},
				scale: {
					ticks: {
						display: false,
						beginAtZero: true,
						maxTicksLimit: 4
					},
					pointLabels: { 
						fontSize: 12,
						fontColor: '#666'
					}
				}
			}
		};
		window.myRadar = new Chart(document.getElementById('canvasChart'), config);
	}
	//end charjs
	
	if ($('.swiper-container').length) {
		var swiper = new Swiper('.swiper-container', {
			slidesPerView: 'auto',
			spaceBetween: 5,
			centeredSlides: true,
			freeMode: true,
			loop: true,
			autoplay: {
				delay: 1500,
				disableOnInteraction: false,
			},
		});
	}

	//show char
	$(".showChart" ).click(function() {
		$(this).addClass('elementHide');
		$('.btnRedGradientPc').removeClass('elementHide');
		$('.loginChart').removeClass('elementHide');
	});

	//change follow
	$(".onenbBtnFollow" ).click(function() {
		$(".onenbBtnFollow").toggleClass("onenbBtnUnFollow");
		
	 	//$(this).find($('span')).html('シリーズフォロー中');
	 	if ($(this).find($('span')).text() == "講座をフォロー") {
	 		$(this).find($('span')).html('講座フォロー中');
	 	} else {
	 		$(this).find($('span')).html('講座をフォロー');
	 	}
	 });
	
	$(".onenbBtnFollowTwo" ).click(function() {
		$(".onenbBtnFollowTwo").toggleClass("onenbBtnUnFollowTwo");
		
	 	//$(this).find($('span')).html('シリーズフォロー中');
	 	if ($(this).find($('span')).text() == "講座をフォロー") {
	 		$(this).find($('span')).html('講座フォロー中');
	 	} else {
	 		$(this).find($('span')).html('講座をフォロー');
	 	} 
	 });

	$(".globalDigestFollow" ).click(function() {
		$(".globalDigestFollow").toggleClass("globalDigestUnFollow");
		
	 	//$(this).find($('span')).html('シリーズフォロー中');
	 	if ($(this).find($('a')).text() == "支局をフォロー") {
	 		$(this).find($('a')).html('支局フォロー中');
	 	} else {
	 		$(this).find($('a')).html('支局をフォロー');
	 	} 
	 });
	
	
	
});