//pc use
var _render;
if (document.getElementById("Canvas").getContext) {
		_render = "canvas";
}else{
		_render = "table";
}
jQuery('#url_ewm_code_top').qrcode({render: _render,width: 208,height: 208,text: window.location.href});

function _addFavorite() {
	var url = window.location;
	var title = document.title;
	var ua = navigator.userAgent.toLowerCase();
	if (ua.indexOf("360se") > -1) {
		alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
	}
	else if (ua.indexOf("msie 8") > -1) {
		window.external.AddToFavoritesBar(url, title); //IE8
	}
	else if (document.all) {//IE类浏览器
		try{
			window.external.addFavorite(url, title);
		}catch(e){
			alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
		}
	}
	else if (window.sidebar) {//firfox等浏览器；
		window.sidebar.addPanel(title, url, "");
	}
	else {
		alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
	}
}

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
	/*jQuery('#qrcode_top').qrcode({render: "canvas",width: 160,height: 160,text: window.location.href});*/
}	
function closewechat(){
	document.getElementById('wechat').style.display = 'none';
}

