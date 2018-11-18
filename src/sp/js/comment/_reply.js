$(document).ready(function () {

	if ($('.commentReply a').length) {
		var btnReply = $('.commentReply a');
		var simplebar = $('.commentContent .simplebar-scroll-content');
		var mainBtnCmt = $('.frmComment button');
		btnReply.click(function (e) {
			e.preventDefault();

			let commentItem = $(this).parent().parent().parent().parent();
			let author = commentItem.find('p.textAuthor').text();
			//let commentItemhtml = commentItem[0].outerHTML;
			//let frmComment =  $('form.frmComment a.replyClose');
			
			if(!commentItem.find('.frmComment').length)
			{
				
				commentItem.append($('.frmComment').get(0).outerHTML);
				let textarea = commentItem.find('.frmComment textarea');
				autosize(textarea);
				let btnClose = commentItem.find('.replyClose');
				btnClose.html('<i class="icon iconClose_18x18"></i>'+author+'さんへの返信').show();

				$(btnClose).click(function (e) {
					e.preventDefault();

					$(this).simplePopup({
						type: "html",
						htmlSelector: "#popupCommentClose",
						width: "343px",
						beforeOpen: function(html) {
							document.body.style.overflowY = "hidden";
						},
						beforeClose: function(html) {
							document.body.style.overflowY = "auto";
						}
					});

				});

				//disable main button
				mainBtnCmt.attr("disabled", true);

			}

			//commentItem.remove();

			//$('form.frmComment').addClass('on');
			//$('.commentContent ul').append(commentItemhtml);

			//simplebar.scrollTop(simplebar[0].scrollHeight);
			//frmComment.html(author+'さんへの返信 <i class="icon iconClose_18x18"></i>').css('display','block');
		});

	}

	if($('form.frmComment a.replyClose').length){
		$('form.frmComment a.replyClose').click(function (e) {
			e.preventDefault();
			$(this).simplePopup({
				type: "html",
				htmlSelector: "#popupCommentClose",
				width: "343px",
				beforeOpen: function(html) {
					document.body.style.overflowY = "hidden";
				},
				beforeClose: function(html) {
					document.body.style.overflowY = "auto";
				}
			});

		});
	}
});
