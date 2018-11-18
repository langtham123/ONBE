$(document).ready(function() {
	var clickFollowingTag = false;
	$(".iconBall").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupCommentActionMe",
			width: "620px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			}
		});
	});

	$(".myIconBall").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupCommentAction",
			width: "620px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			}
		});
	});

	$(".pastComment").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupLastComment",
			width: "620px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			}
		});
	});

	$(".numberImages").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupAuthor",
			width: "620px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			}
		});
	});

	$(".signUpConTentRed").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupSignUp",
			width: "620px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			}
		});
	});

	$("#giftPopUpFirst").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupShareGift",
			width: "620px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			}
		});
	});

	
	$("#giftPopUpSec").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupShareGiftTwo",
			width: "620px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			}
		});
	});

	$("#giftPopUpThree").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupShareGiftThree",
			width: "620px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			}
		});
	});

	$("#giftPopUpFour").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupShareGiftFour",
			width: "620px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			}
		});
	});

	$("#giftPopUpFive").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupShareGiftFive",
			width: "620px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			}
		});
	});

	$(".clipLinkPopup").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupShareGiftSix",
			width: "620px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			}
		});
	});

	$("#popupAuthor").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupAuthorSignUp",
			width: "620px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			}
		});
	});

	$("#popupListCard").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupListCardContent",
			width: "620px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			},
			afterOpen: function(html) {
				$("#simple-popup .popupListCardContent li a").on("click", function(e) {
					var aTag = $(this);
					var liTarget = aTag.closest("li");
					liTarget.fadeOut(300, function() { $(this).remove(); });
				});	

				$("#simple-popup .popupListCardContent .cancelButton").on("click", function(e) {
					$('.close').click();
				});
			}
		});
	});

	$("#popupAccount").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupOption",
			width: "620px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			}
		});
	});

	$(".popUpDate").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupDatePicker",
			width: "620px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			afterOpen: function(html) {
				if($('.datepickerId').length) {
					$('.datepickerId').datepicker({
						format: 'DD/MM/YYYY',
			        	todayHighlight: true,
			        	endDate: '+0d',
			        	language: 'ja'
			    	});
				}
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			}
		});
	});

	$(".globalNaviConfig").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupOptionNew",
			width: "620px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			afterOpen: function(html) {
				$("#simple-popup .popupOption li a.popupDoubleShow").on("click", function(e) {
					clickFollowingTag = true;
					$('.close').click();

				});
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			},
			afterClose: function(html) {
				if(clickFollowingTag)
				{
					clickFollowingTag = false;
					$(".popupDoubleShow").trigger("click");
				}
			}
		});
	});

	$(".popupDoubleShow").on("click", function(e) {
		$(".close").trigger("click");
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupListCardContentNew",
			width: "620px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			afterOpen: function(html) {
				$("#simple-popup .popupListCardContent li a").on("click", function(e) {
					var aTag = $(this);
					var liTarget = aTag.closest("li");
					liTarget.fadeOut(300, function() { $(this).remove(); });
				});

				$("#simple-popup .popupListCardContent .cancelButton").on("click", function(e) {
					$('.close').click();
				});
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			},
			afterClose: function(html) {
				$(".globalNaviConfig").trigger("click");
			}
		});
	});

	//auto click on load
	if($('#popupOption').length) {
		$("#popupAccount").trigger("click");
	}
	if($('#popupListCardContent').length) {
		$("#popupListCard").trigger("click");
	}
	if($('#popupAuthorSignUp').length) {
		$("#popupAuthor").trigger("click");
	}
	if($('#popupShareGift').length) {
		$("#giftPopUpFirst").trigger("click");
	}
	if($('#popupShareGiftTwo').length) {
		$("#giftPopUpSec").trigger("click");
	}
	if($('#popupShareGiftThree').length) {
		$("#giftPopUpThree").trigger("click");
	}
	if($('#popupShareGiftFour').length) {
		$("#giftPopUpFour").trigger("click");
	}
	if($('#popupShareGiftFive').length) {
		$("#giftPopUpFive").trigger("click");
	}
	if($('#popupShareGiftSix').length) {
		$(".clipLinkPopup").trigger("click");
	}
	if($('#popupDatePicker').length) {
		$(".popUpDate").trigger("click");
	}

});