$(document).ready(function () {

    if ($('.myProgress .myBar').length) {
        let myBar = $('.myProgress .myBar');

        myBar.each(function(index) {
            let progress = $(this).attr('data-progress');
            if (progress != '' && progress != undefined) {
                $(this).width(progress);
            }
        });
    }
    if($('.commentContent .simplebar-scroll-content').length){

        var simplebar = $('.commentContent .simplebar-scroll-content');

        simplebar.scrollTop(simplebar[0].scrollHeight);
    }

    if ($('.frmComment textarea').length) {
        let textarea = $('.frmComment textarea');
        autosize(textarea);
    }

    if ($('.frmComment button').length) {
        let submitButton = $('.frmComment button');
        submitButton.click(function (e) {
            e.preventDefault();
            let _textArea = $(this).parent().find('textarea');
            let actionUrl =  $(this).parent().attr('action');
            let comment =  $(this).parent().find('textarea').val();
            let avatar = $(this).parent().find('img').attr('src');
            _textArea.addClass('submit').attr('disabled', true);
            $.ajax({
                method: "POST",
                url: actionUrl,
                data: comment,
                success: function(result){
                    console.log(result);
                },
                error: function(xhr, ajaxOptions, thrownError){
                    console.log(xhr.status);
                    console.log(ajaxOptions);
                    console.log(thrownError);
                }
            }).always(function(data){

                setTimeout(function(){
                    _textArea.delay( 5000 ).removeClass('submit').attr('disabled', false).val('');
                }, 1500);
                if(comment != '') {
                    addComment(comment, avatar, $('.commentContent ul'));
                    simplebar.scrollTop(simplebar[0].scrollHeight);
                }
            })
        });
    }




});

function setCommentItem(comment,avatar) {
    let lines = comment.split(/\n/);
    for (let i=0; i < lines.length; i++) {
        lines[i] = '<p>'+lines[i]+'</p>'
    }

    let html ='<li>';
    html +='<div class="commentItemLeft"><div class="avatarCicrle"><img src="'+avatar+'" alt=""></div></div>';
    html +='<div class="commentItemRight"><a href="#" class="iconBall"><img src="/images/onb/2019/commentFunction.png" alt=""></a><p class="textAuthor">吉野 次郎</p> <p class="textAuthorTitle">日本経済新聞社記者</p> <div class="commentItemRightContent on">'+lines.join('')+'</div> <div class="commentIcon"><span class="commentTime">0分前</span><span class="commentlike"><a href="#"><i class="icon iconLike"></i>0</a></span><span class="commentReply"><a href="#">返信</a></span><span class="commentVoteLike"><a href="#">いいね！</a></span></div> </div>';

    html +='</li>';

    return html ;

}

function addComment(comment,avatar,_list) {
    let html = setCommentItem(comment,avatar);
    _list.append(html);
}