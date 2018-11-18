
$(document).ready(function () {
    let paddingHeaderHeight = $('nav.globalNavi').outerHeight(true) - 15;
    let _header = $('#wrapper > header');
    let _headerFix = $('.headerFix');

    $(window).scroll(function () {

        var sc = $(window).scrollTop();
        // console.log(sc);
        if (sc > paddingHeaderHeight) {
            _headerFix.html('<header>' + _header.html() + '</header>');
            _headerFix.find('header nav.localNavi .burgerMenu').remove();
            _headerFix.show();

        } else {
            _headerFix.hide();
            _headerFix.html('');
        }
    });


    $('a.burgerMenuToggle').click(function(e){
        e.stopPropagation();
       let href = $(this).attr('href');
       $(href).toggleClass('on');
       $('body').css({'overflow':'hidden'});
    });

    _headerFix.on('click','a.burgerMenuToggle',function(e){
        e.stopPropagation();
        let href = $(this).attr('href');
        $(href).toggleClass('on');
    });

    $('a#close').click(function(e){
        e.stopPropagation();
        let href = $(this).attr('href');
        $(href).removeClass('on');
        $('body').css({'overflow':''});
    });

    // if($('form.searchKeyWords').length){
    //     $('form.searchKeyWords input[type=text]').focusin(function(e) {
    //         $( this ).parent().addClass('on');
    //     });

    //     $('form.searchKeyWords input[type=text]').focusout(function(e) {
    //         $( this ).parent().removeClass('on');
    //     });
    // }

    $('form.searchKeyWords input[type=text]').keyup(function() {
        $(".linkCancel").css('display','block');
        if (!this.value) {
            $(".linkCancel").css('display','hide');
        }
    });
});