function getStyle(obj, name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];	
	}else
	{
		return getComputedStyle(obj, false)[name];	
	}
}
//var alpha = 30;
function startMove(obj, arr, iTarget)
{
	clearInterval(obj.timer);

	obj.timer=setInterval(function (){
		var cur=0;
		if(arr=='opacity')
		{
			cur=Math.round(parseFloat(getStyle(obj, arr))*100);	
		}else
		{
			cur=parseInt(getStyle(obj, arr));	
		}
		var speed=(iTarget-cur)/6;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(cur==iTarget)
		{
			clearInterval(obj.timer);	
		}else
		{
			if(arr=='opacity')
			{
				obj.style.filter='alpha(opcity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;	
				
			//	document.getElementById('tex1').value = obj.style.opacity;
			}else
			{
			obj.style[arr]=cur+speed+'px';	
			}
		}
		}, 30);
}

// JavaScript Document