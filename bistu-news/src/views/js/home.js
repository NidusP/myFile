
!(function(){
    var swiper = new Swiper('.banner-swiper', {
        pagination: '.x-header-pagination',
        loop : true,
        autoplay:5000,
        paginationClickable :true
      });
      var swiper1 = new Swiper('.x-banner-1', {
        pagination: '.x-news-banner-pagination',
        loop : true,
        autoplay: 3000
      });
      $(".gotop").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    });
})()
    