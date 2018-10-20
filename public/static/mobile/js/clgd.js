    /**
  **************************************************************************************************
  **********  CLPHP订单系统2016 WEB、WAP自适应版官方正式版  *****  官方正版 *** 版权所有 *** 盗版必究  **********
  **********------------------------------------------------------------------------------**********
  * 官方网站：http://www.chunleinet.com/ 官方店铺：http://jxlcl.taobao.com/  *  官方店铺旺旺:chunlei2615 请认准再购买 *
  **************************************************************************************************
*/

var speeds=80;
//console.log(speeds);
var clfahuo=document.getElementById('clfahuo');

var clfahuo1=document.getElementById('clfahuo1');

var clfahuo2=document.getElementById('clfahuo2');

clfahuo2.innerHTML=clfahuo1.innerHTML

function Marquee1(){
 //console.log(clfahuo2.offsetHeight);
 //console.log(clfahuo.scrollTop);
	if(clfahuo2.offsetHeight-clfahuo.scrollTop<=0)

	clfahuo.scrollTop-=clfahuo1.offsetHeight

	else{

		clfahuo.scrollTop++

	}

}

var MyMar1=setInterval(Marquee1,speeds)

clfahuo.onmouseover=function(){

	clearInterval(MyMar1)

}

clfahuo.onmouseout=function(){

	MyMar1=setInterval(Marquee1,speeds)

}

/*//////////////////////////// WFORDERJSEND ////////////////////////////*/