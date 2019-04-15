/**
 * Created by epro.ma on 2018/10/17.
 */
//pc use
if(document.getElementById("Canvas")){
var _render;
if (document.getElementById("Canvas").getContext) {          
		_render = "canvas";
}else{
		_render = "table";
}
jQuery('#url_ewm_code_top').qrcode({render: _render,width: 208,height: 208,text: window.location.href});
jQuery('#url_ewm_code_bot').qrcode({render: _render,width: 142,height: 142,text: window.location.href});

}
/*
if (window.MessageEvent && !document.getBoxObjectFor){
	jQuery('#url_ewm_code_top').qrcode({render: _render,width: 208,height: 208,text: window.location.href});

} else{
	$("#url_ewm_code_top").html($("#url_ewm_code_bot").html());
}

*/



//pc mobile use
function doweibo(){	
	console.log("doweibo")
	window.open('http://service.weibo.com/share/share.php?url='+encodeURIComponent(window.location.href))
}
function doTencentweibo(){
	var _u = 'http://share.v.t.qq.com/index.php?c=share&a=index'+'&url='+encodeURIComponent(window.location.href)+'&title='+encodeURIComponent(document.title);
	window.open(_u);
}
function doQone(){
	window.open("https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+encodeURIComponent(window.location.href)+'&title='+encodeURIComponent(document.title));
}

//mobile use
function dowechat(){
	document.getElementById('wechat').style.display = 'block';
	jQuery('#qrcode_top').qrcode({render: "canvas",width: 160,height: 160,text: window.location.href});
}	
function closewechat(){
	document.getElementById('wechat').style.display = 'none';
	document.getElementById('qrcode_top').innerHTML = '';
}


