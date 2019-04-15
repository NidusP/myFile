var myDate = new Date;
var year = myDate.getFullYear();//获取当前年
var mon = myDate.getMonth()+1;//获取当前月
var date = myDate.getDate();//获取当前日
var week = myDate.getDay();
var weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
$("#time").html("欢迎您来到水资源管理网站！　"+year+"年"+mon+"月"+date+"日 "+weeks[week]);

$(".selected").toggle(function(){
    $(this).siblings(".option").slideDown();
    $($(this).siblings(".option")).children("li").show();
},function(){
    $(this).siblings(".option").slideUp();
    $($(this).siblings(".option")).children("li").hide()
});
$("body").click(function(e) {
    console.log(e.target.className)
    if(e.target.className != "link") {
        $(".selected").siblings(".option").slideUp();
        $($(".selected").siblings(".option")).children("li").hide()
    }
});
$(".option li").click(function(){
    var optioninner=$(this).text();
    $(this).parent(".option").siblings(".selected").text(optioninner);
    $(this).parent(".option").children("li").hide();
    $(this).siblings(".option").slideUp();
    $(this).parent(".option").slideUp();
})
$(".option li").mousemove(function(){
    var numb=$(".option li").index(this);
    $(".option li").removeClass("actbg").eq(numb).addClass("actbg");
})

var tabs = (function(){
    this.tabs = function(ele){
        var oTab=document.getElementById(ele);
        var aH3=oTab.getElementsByTagName("h3")[0].getElementsByTagName("a");
        var aDiv=oTab.getElementsByTagName("div");
        aH3[0].className="active";
        aDiv[0].style.display="block";
		console.log(aH3)
		console.log(aDiv)
        for(var i=0;i<aH3.length;i++)
        {
            aH3[i].index=i;
            aH3[i].onmouseover=function()
            {
                for(var i=0;i<aH3.length;i++)
                {
                    aH3[i].className="";
                    aDiv[i].style.display="none";
                }
                this.className="active";
                aDiv[this.index].style.display="block";
            }
        }

    }
    return tabs;
})();
