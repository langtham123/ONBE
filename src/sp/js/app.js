require('./chart/progress_bar.js');
require('./header/index.js');
require('./popup/popup.js');
require('./slider/index');
require('./mypage/index.js');
require('./blur/index.js');
require('./comment/index.js');
require('./show_more/index.js');


$(document).ready(function() {
	if (window.screen.availWidth == 320) {
		$('body').addClass('smallScreenMode');
	  }
	//Gift close
	$('.shareGift .giftClose').click(function(){
		$('section.giftModule').fadeOut(500, function(){ $(this).remove();});
	});
	
});
$(document).ready(function() {
	console.log('Ready!');

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
	$('.tabHeader li').click(function(){
		activeTab(this);
		return false;
	});

	// event click reset
	$('.resetDate').click(function(){
		$(".datepickerId").datepicker().datepicker("setDate", new Date());
	});

	// Active first tab when page load
	activeTab($('.tabHeader li:first-child'));
	activeTab($('.tabHeader#tabRankingPaid li:first-child'));

	//slider in bpparts
	if ($('.bpimage_image_slider').length) {
		$('.bpimage_image_slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			infinite: false,
			speed: 300,
			centerMode: true,
			centerPadding: '26px',
			arrows: false
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

	$( ".btnPopupClose" ).click(function() {
		$(".close").trigger("click");
	});

	//show char
	$(".showChart" ).click(function() {
		$(this).addClass('elementHide');
		$('.btnRedGradientSp').removeClass('elementHide');
		$('.chartRed').removeClass('elementHide');
	});

	//change follow
	$(".profileFollow" ).click(function() {
		$(this).find($('a')).html('シリーズフォロー中');
		$(this).attr('class', 'profileUnFollow');
	});
	
	$(".profileFollowVideo" ).click(function() {
		$(this).find($('a')).html('連載フォロー中');
		$(this).attr('class', 'profileUnFollow');
	});
	
	$(".profileFollowAuthor" ).click(function() {
		$(this).find($('a')).html('著者フォロー中');
		$(this).attr('class', 'profileUnFollow');
	});
	//change follow
});