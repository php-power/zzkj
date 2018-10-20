function $(id){return document.getElementById(id);};
function $F(id){var o=$(id);if(o==null) return null;return o.value.trim();};

var qq = new Array('721013080','721013080','721013080','721013080','721013080');var r=parseInt(Math.random()*5);var xu=new Array();for(var i=0;i<35;i++){var flag=0;do{for(var j=0;j<5;j++){if(xu[j]===r) {flag=1;break;}}if(!flag){xu[xu.length]=r;}else{r=parseInt(Math.random()*5);}}while(!flag && xu.length<5);}

<!-- QQ在线客服图标:浮动图标[浮动型] 开始-->
document.write('<style type="text/css">');
document.write(".QQbox{");
document.write("	z-index:1000; ");
document.write("	left: 3px; ");
document.write("	top: 145px; ");
document.write("	position: absolute;border:#000000 solid 0px;");
document.write("}");
document.write(".onlineTd{ height:25px;text-align:center;font-size:12px;color:#000;}");
document.write('</style>');
document.write("<div class='QQbox' id='divQQbox'>");
document.write("<div class='Qlist' id='divOnline' style='display : none;'>");
document.write("<div class='t'></div>");
document.write("<div class='infobox'></div>");
document.write("<div class='con'>");
document.write("<table width=133 height=411 border=0 cellpadding=0 cellspacing=0 background=../images/qqq.gif><tr>");
document.write("<td valign=top><table width=100% border=0 cellspacing=0 cellpadding=0>")
document.write("<tr>");
document.write("<td height=70 align=right valign=top><img src=../images/close.gif style='margin:13px 5px 0px 0px; cursor:pointer;' onclick=OnlineOut()></td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td class=onlineTd><img src=../images/1009_online.gif></td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td class=onlineTd><img src=../images/tq.gif></td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td class=onlineTd><a href=tencent://message/?uin="+qq[xu[0]]+"&amp;Menu=yes target=_blank><img src=http://wpa.qq.com/pa?p=2:"+qq[xu[0]]+":42 border=0></a></td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td class=onlineTd><a href=tencent://message/?uin="+qq[xu[1]]+"&amp;Menu=yes target=_blank><img src=http://wpa.qq.com/pa?p=2:"+qq[xu[1]]+":42 border=0></a></td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td class=onlineTd><a href=tencent://message/?uin="+qq[xu[2]]+"&amp;Menu=yes target=_blank><img src=http://wpa.qq.com/pa?p=2:"+qq[xu[2]]+":42 border=0></a></td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td class=onlineTd><a href=tencent://message/?uin="+qq[xu[3]]+"&amp;Menu=yes target=_blank><img src=http://wpa.qq.com/pa?p=2:"+qq[xu[3]]+":42 border=0></a></td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td class=onlineTd><a href=tencent://message/?uin="+qq[xu[4]]+"&amp;Menu=yes target=_blank><img src=http://wpa.qq.com/pa?p=2:"+qq[xu[4]]+":42 border=0></a></td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td align=center><img src=../images/guest.gif></td>");
document.write("</tr>");
document.write("<tr style=display:none>");
document.write("<td class=onlineTd><strong>手机短信订购</strong>15350560128</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td class=onlineTd><strong>客服工作时间</strong><br>全年无休 8:00-23:00</td>");
document.write("</tr>");
document.write("</table></td>");
document.write("</tr></table>");
document.write("</div>");
document.write("<div class='b'></div>");
document.write("</div>");
document.write("<div id='divMenu' onmouseover='OnlineOver();'><img src='../images/qq_1.gif' class='press' alt='在线咨询'></div>");
document.write("</div>");

//<![CDATA[

var tips; 
var theTop = 100/*这是默认高度,越大越往下*/; 
var old = theTop;
function initFloatTips() {
tips = document.getElementById('divQQbox');
moveTips();
};
function moveTips() {
var tt=50;
if (window.innerHeight) {
pos = window.pageYOffset
}
else if (document.documentElement && document.documentElement.scrollTop) {
pos = document.documentElement.scrollTop
}
else if (document.body) {
pos = document.body.scrollTop;
}
pos=pos-tips.offsetTop+theTop;
pos=tips.offsetTop+pos/10;

if (pos < theTop) pos = theTop;
if (pos != old) {
tips.style.top = pos+"px";
tt=10;
}
old = pos;
setTimeout(moveTips,tt);
}
//!]]>
initFloatTips();
function OnlineOver(){
document.getElementById("divMenu").style.display = "none";
document.getElementById("divOnline").style.display = "block";
document.getElementById("divQQbox").style.width = "170px";
}
function OnlineOut(){
document.getElementById("divMenu").style.display = "none";
document.getElementById("divOnline").style.display = "none";
}
if(typeof(HTMLElement)!="undefined")    //给firefox定义contains()方法，ie下不起作用
{   
      HTMLElement.prototype.contains=function(obj)   
      {   
          while(obj!=null&&typeof(obj.tagName)!="undefind"){ //通过循环对比来判断是不是obj的父元素
   　　　　if(obj==this) return true;   
   　　　　obj=obj.parentNode;
   　　}   
          return false;   
      };   
}  
function hideMsgBox(theEvent){ //theEvent用来传入事件，Firefox的方式
　 if (theEvent)
   {
　 	var browser=navigator.userAgent; //取得浏览器属性
　 		if (browser.indexOf("Firefox")>0)
		{ //如果是Firefox
　　		if (document.getElementById('divOnline').contains(theEvent.relatedTarget)) { //如果是子元素
　　 			return; //结束函式
     		} 
		} 
		if (browser.indexOf("MSIE")>0)
		{ //如果是IE
			if (document.getElementById('divOnline').contains(event.toElement)){ //如果是子元素
				return; //结束函式
			}
		}
	}
/*要执行的操作*/
document.getElementById("divMenu").style.display = "block";
document.getElementById("divOnline").style.display = "none";
}
OnlineOver();
<!-- QQ在线客服图标:浮动图标[浮动型] 结束-->


document.write('<script type="text/javascript" src="/tel.js" charset="utf-8">');
document.write('</script>');




LoadOrders();
LoadMyInformation(myInformation);