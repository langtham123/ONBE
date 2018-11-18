if ($('.leafPostDescription p').length) {
	jQuery(function(){

		var minimized_elements =  $('.leafPostDescription p');
		
		minimized_elements.each(function(){    
			var t = $(this).text();        
			if(t.length < 50) return;
			
			$(this).html(
				t.slice(0,50)+'<span>... </span><a href="#" class="more">もっと読む</a>'+
				'<span style="display:none;">'+ t.slice(50,t.length)+' <a href="#" class="less">閉じる</a></span>'
			);
			
		}); 
		
		$('a.more', minimized_elements).click(function(event){
			event.preventDefault();
			$(this).hide().prev().hide();
			$(this).next().show();        
		});
		
		$('a.less', minimized_elements).click(function(event){
			event.preventDefault();
			$(this).parent().hide().prev().show().prev().show();    
		});

	});
}

if ($('.leafProfileDescription p').length) {
	jQuery(function(){

		var minimized_elements =  $('.leafProfileDescription p');
		
		minimized_elements.each(function(){    
			var t = $(this).text();        
			if(t.length < 50) return;
			
			$(this).html(
				t.slice(0,50)+'<span>... </span><a href="#" class="more">もっと読む</a>'+
				'<span style="display:none;">'+ t.slice(50,t.length)+' <a href="#" class="less">閉じる</a></span>'
			);
			
		}); 
		
		$('a.more', minimized_elements).click(function(event){
			event.preventDefault();
			$(this).hide().prev().hide();
			$(this).next().show();        
		});
		
		$('a.less', minimized_elements).click(function(event){
			event.preventDefault();
			$(this).parent().hide().prev().show().prev().show();    
		});

	});
}

if ($('.leafProfileDescription p').length) {
	jQuery(function(){

		var minimized_elements =  $('.commentItemRightContent p');
		
		minimized_elements.each(function(){    
			var t = $(this).text();        
			if(t.length < 80) return;
			
			$(this).html(
				t.slice(0,80)+'<span>... </span><a href="#" class="more">もっと読む</a>'+
				'<span style="display:none;">'+ t.slice(80,t.length)+' <a href="#" class="less">閉じる</a></span>'
			);
			
		}); 
		
		$('a.more', minimized_elements).click(function(event){
			event.preventDefault();
			$(this).hide().prev().hide();
			$(this).next().show();        
		});
		
		$('a.less', minimized_elements).click(function(event){
			event.preventDefault();
			$(this).parent().hide().prev().show().prev().show();    
		});

	});
}

if ($('.leafSpecialArticle .articleBody p').length) {
	jQuery(function(){

		var minimized_elements =  $('.leafSpecialArticle .articleBody p');
		
		minimized_elements.each(function(){    
			var t = $(this).text();        
			if(t.length < 80) return;
			
			$(this).html(
				t.slice(0,80)+'<span>... </span><a href="#" class="more">もっと読む</a>'+
				'<span style="display:none;">'+ t.slice(80,t.length)+' <a href="#" class="less">閉じる</a></span>'
			);
			
		}); 
		
		$('a.more', minimized_elements).click(function(event){
			event.preventDefault();
			$(this).hide().prev().hide();
			$(this).next().show();        
		});
		
		$('a.less', minimized_elements).click(function(event){
			event.preventDefault();
			$(this).parent().hide().prev().show().prev().show();    
		});

	});
}