
$(document).ready(function () {
    let navGlobalNavi = $('nav.globalNavi');
    //let paddingHeaderHeight = $('nav.globalNavi').outerHeight(true);
    let header = $('#wrapper > header');
    let headerFix = $('.headerFix');
    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        if (sc > 35) {
            //navGlobalNavi.hide();
            header.addClass('headerFix');
        } else {
            //navGlobalNavi.show();
            header.removeClass('headerFix');
        }
    });
    $('a.burgerMenuToggle').click(function(e){
        e.stopPropagation();
       let href = $(this).attr('href');
       $(href).toggleClass('on');
    });
    $('a#close').click(function(e){
        e.stopPropagation();
        let href = $(this).attr('href');
        $(href).removeClass('on');
    });
    $(document.body).click(function(e) {
        if(
            $(e.target).closest(".burgerMenuHeadLeft").length == 0 &&
            $(e.target).closest(".burgerMenuHeadRight").length == 0 &&
            $(e.target).closest(".burgerMenuContent ul").length == 0 &&
            $('#localNaviMenu').hasClass('on')

        ) {
            $('#localNaviMenu').removeClass('on');
        }
    })

    $('.headerBlock .searchBox .inputWithIcon input[type=text]').focusin(function(e) {
        $('.searchBox .headerSearchList').show();
    });

    $('.headerBlock .searchBox .inputWithIcon input[type=text]').focusout(function(e) {
        $('.searchBox .headerSearchList').hide();
    });

});



