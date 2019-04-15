$(document).ready(function(){
    $('.drop_down a').on('click',function () {
        $(this).siblings('ul').slideToggle();
    });

    $('.drop_down ul li').on('click',function () {
        $(this).parent().parent().children('a').text($(this).text());
        $(this).parent().slideUp();
        return false;
    });

    $("body").on('click', function (e) {
        if(e.target.className != "") {
            $(".drop_down ul").slideUp();
        }
        return false;
    })

});


