$(document).ready(function() {
	var clickFollowingTag = false;
	$(".iconBall").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupCommentActionMe",
			width: "343px",
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
			width: "343px",
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
			width: "343px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "unset";
			}
		});
	});

	$(".numberImages").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupAuthor",
			width: "343px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "unset";
			}
		});
	});

	$(".signUpConTentRed").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupSignUp",
			width: "343px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "unset";
			}
		});
	});

	$(".changeFontSize").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupChangeFontSize",
			width: "343px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";

				if($("body").hasClass("articleBodyFontSizeXL"))
				{
					html.find(".simple-popup-content li:nth-child(3)").addClass("activeLetter");
				}
				else if($("body").hasClass("articleBodyFontSizeS"))
				{
					html.find(".simple-popup-content li:nth-child(1)").addClass("activeLetter");
				}
				else
				{
					html.find(".simple-popup-content li:nth-child(2)").addClass("activeLetter");
				}
				
			},
			afterOpen: function(html){
				$("#simple-popup .popupChangeFontSize li").on("click", function(e) {
					var li = $(this);
					var body = $("body");
					if(li.find(".contentLetter").length)
					{
						body.removeClass('articleBodyFontSizeXL');
						body.addClass('articleBodyFontSizeS');
					}
					else if(li.find(".contentLetterLarge").length)
					{
						body.removeClass('articleBodyFontSizeS');
						body.addClass('articleBodyFontSizeXL');
					}
					else
					{
						body.removeClass('articleBodyFontSizeXL');
						body.removeClass('articleBodyFontSizeS');
					}

					$("#simple-popup .close").click();

				});	
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "unset";
			}
		});
	});

	

	$(".twitterLink").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupAuthorSignUp",
			width: "343px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "unset";
			}
		});
	});
	
	$("#1001Child").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupShareOne",
			width: "311px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "unset";
			}
		});
	});

	$("#1001Child21").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupShareTwo",
			width: "311px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "unset";
			}
		});
	});

	$("#1001Child22").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupShareThree",
			width: "311px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "unset";
			}
		});
	});

	$("#1001Child2").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupShareFour",
			width: "311px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "unset";
			}
		});
	});

	$("#1001Child2Short").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupShareFive",
			width: "311px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "unset";
			}
		});
	});

	$("#1001Child1").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupShareSix",
			width: "311px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "unset";
			}
		});
	});

	$("#1002Child").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupShareSeven",
			width: "311px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "unset";
			}
		});
	});

	$("#104Child").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupShareEightNew",
			width: "311px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			afterOpen: function(html) {
				$("#simple-popup .popupShareEight li a.popupDoubleShow").on("click", function(e) {
					clickFollowingTag = true;
					$('.close').click();

				});
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "unset";
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
		console.log(1111);
		$(".close").trigger("click");
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupShareTenNew",
			width: "311px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			afterOpen: function(html) {
				$("#simple-popup .popupShareTen li .btnDeleteTag").on("click", function(e) {
					var aTag = $(this);
					var liTarget = aTag.closest("li");
					liTarget.fadeOut(300, function() { $(this).remove(); });
				});

				$("#simple-popup .popupShareTen .cancelButton").on("click", function(e) {
					$('.close').click();
				});
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			},
			afterClose: function(html) {
				$("#104Child").trigger("click");
			}
		});
	});

	$("#105_new").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupShareEight",
			width: "311px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "unset";
			}
		});
	});

	$("#1004Child_01").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupShareNine",
			width: "311px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "unset";
			}
		});
	});

	$("#203_tag_list").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupShareTen",
			width: "311px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			afterOpen: function(html) {
				$("#simple-popup .popupShareTen li a").on("click", function(e) {
					var aTag = $(this);
					var liTarget = aTag.closest("li");
					liTarget.fadeOut(300, function() { $(this).remove(); });
				});
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "unset";
			}
		});
	});

	$(".popUpDate").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupDatePicker",
			width: "343px",
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

	//auto click on load
	if($('#popupShareOne').length) {
		$("#1001Child").trigger("click");
	}
	if($('#popupShareTwo').length) {
		$("#1001Child21").trigger("click");
	}
	if($('#popupShareThree').length) {
		$("#1001Child22").trigger("click");
	}
	if($('#popupShareFour').length) {
		$("#1001Child2").trigger("click");
	}
	if($('#popupShareFive').length) {
		$("#1001Child2Short").trigger("click");
	}
	if($('#popupShareSix').length) {
		$("#1001Child1").trigger("click");
	}
	if($('#popupShareSeven').length) {
		$("#1002Child").trigger("click");
	}
	if($('#popupShareEight').length) {
		$("#104Child").trigger("click");
	}
	if($('#popupShareEightNew').length) {
		$("#104Child").trigger("click");
	}
	if($('#popupShareNine').length) {
		$("#1004Child_01").trigger("click");
	}
	if($('#popupShareTen').length) {
		$("#203_tag_list").trigger("click");
	}
	if($('#popupDatePicker').length) {
		$(".popUpDate").trigger("click");
	}
});