(function () {
    var myDate = new Date;
    var year = myDate.getFullYear();//获取当前年
    var mon = myDate.getMonth()+1;//获取当前月
    var date = myDate.getDate();//获取当前日
    var week = myDate.getDay();
    var weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    $("#date").html(year+"年"+mon+"月"+date+"日 "+weeks[week]);
})();
//设为首页
function SetHome(obj,url){
    try{
        obj.style.behavior='url(#default#homepage)';
        obj.setHomePage(url);
    }catch(e){
        if(window.netscape){
            try{
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }catch(e){
                alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
            }
        }else{
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
        }
    }
}
//收藏本站
function addFavorite(sTitle,sURL) {
    try{
        window.external.addFavorite(sURL, sTitle);
    }catch(e){
        try{
            window.sidebar.addPanel(sTitle, sURL, "");
        }catch (e){
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}




