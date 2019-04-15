/**
 * Created by epro.ma on 2019/1/10.
 */
;(function(){
    var myDate = new Date;
    var year = myDate.getFullYear();//获取当前年
    var mon = myDate.getMonth()+1;//获取当前月
    var date = myDate.getDate();//获取当前日
    var week = myDate.getDay();
    var weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    $("#time").html(year+"年"+mon+"月"+date+"日 "+weeks[week]);
})();

var tabs = (function(){
    this.tabs = function(ele,className){
        var oTab=document.getElementById(ele);
        var aH3=oTab.getElementsByTagName("h3")[0].getElementsByTagName("a");
        var aDiv=null;
        if(className){
            aDiv=oTab.querySelectorAll("div."+className);
        }else{
            aDiv=oTab.querySelectorAll("div");
        }
        aH3[0].className = "on";
        aDiv[0].style.display="block";
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
                this.className="on";
                aDiv[this.index].style.display="block";
            }
        }

    }
    return tabs;
})();
