/**
 * Created by epro.ma on 2018/10/17.
 */
/*时间函数*/
$(function(){

    var myDate = new Date;
    var year = myDate.getFullYear();//获取当前年
    var mon = myDate.getMonth()+1;//获取当前月
    var date = myDate.getDate();//获取当前日
    // var h = myDate.getHours();//获取当前小时数(0-23)
    // var m = myDate.getMinutes();//获取当前分钟数(0-59)
    // var s = myDate.getSeconds();//获取当前秒
    var week = myDate.getDay();
    var weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    console.log(year,mon,date,weeks[week])
    $("#time").html(year+"年"+mon+"月"+date+"日"+weeks[week]);



    /*list页面高度一致*/
    $(".item-list-left").height($(".item-list-right").height());
})

/*轮播图调用*/
jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:false,effect:"fade"});


$(".submit").click(function(){
    $()

})







$(".selected").toggle(function(){
    $(this).siblings(".option").show();
    $($(this).siblings(".option")).children("li").show();
},function(){
    $(this).siblings(".option").hide();
    $($(this).siblings(".option")).children("li").hide()
})
$(".option li").click(function(){
    var optioninner=$(this).text();
    $(this).parent(".option").siblings(".selected").text(optioninner);
    $(this).parent(".option").children("li").hide();
})
$(".option li").mousemove(function(){
    var numb=$(".option li").index(this);
    $(".option li").removeClass("actbg").eq(numb).addClass("actbg");
})