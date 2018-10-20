
window.onerror=function(){return true;} 

function $1(id){return document.getElementById(id);}  

function getHeight(){$1("clfahuo").style.height=$1("clforml").offsetHeight-86+"px";} 

window.onload=function(){getHeight();}

function postcheck(){

	var ifname=/^[\u4e00-\u9fa5]{2,6}$/;

	var ifmob=/^1[3,4,5,7,8]\d{9}$/;

    var ifqq=/^\d{5,15}$/;

	var ifemail=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	try{

		if(document.clform.bdproduct.value==""){

			alert('请选择中意的产品！');


			return false;
			
}
		}catch(ex){}

    try{
		if(document.clform.bdname.value==""){

			alert('请填写姓名！');

			document.clform.bdname.focus();

			return false;

		}
		if(!ifname.test(document.clform.bdname.value)){

			alert('姓名格式不正确，请重新填写！');

			document.clform.bdname.focus();

			return false;

		}

    }catch(ex){}

    try{

		if(document.clform.bdmob.value==""){

			alert('请填写手机号码！');

			document.clform.bdmob.focus();

			return false;

		}

		if(!ifmob.test(document.clform.bdmob.value)){

			alert('手机号码格式不正确，请重新填写！');

			document.clform.bdmob.focus();

			return false;

		}

    }catch(ex){}

    try{

		if(document.clform.bdprovince.value==""){

			alert('请选择所在地区！');

			document.clform.bdprovince.focus();

			return false;

		}

    }catch(ex){}

    try{

		if(document.clform.bdaddress.value==""){

			alert('请填写详细地址！');

			document.clform.bdaddress.focus();

			return false;

		}

    }catch(ex){}

    try{

		if(document.clform.bdqq.value==""){

			alert('请填写QQ号码！');

			document.clform.bdqq.focus();

			return false;

		}

		if(!ifqq.test(document.clform.bdqq.value)){

			alert('QQ号码格式不正确，请重新填写！');

			document.clform.bdqq.focus();

			return false;

		}

    }catch(ex){}

    try{

		if(document.clform.bdemail.value==""){

			alert('请填写E-MAIL！');

			document.clform.bdemail.focus();

			return false;

		}

		if(!ifemail.test(document.clform.bdemail.value)){

			alert('E-MAIL格式不正确，请重新填写！');

			document.clform.bdemail.focus();

			return false;

		}

    }catch(ex){}

    try{

		if(document.clform.wfcode.value==""){

			alert('请填写验证码！');

			document.clform.wfcode.focus();

			return false;

		}

    }catch(ex){}

    try{

		var onbdpay=document.getElementsByName("bdpay"); 

		for(var i=0;i<onbdpay.length;i++){

			if(onbdpay[i].checked){

			var bdpay=onbdpay[i].value;

			}

		}

		if(bdpay=="alipay"||bdpay=="bank"){

			document.clform.bdsubmit.value="重新提交";

		}

		else{

			document.clform.bdsubmit.value="正在提交，请稍等 >>";

		}

		return true;

    }catch(ex){}

}

/*//////////////////////////// CLORDERJSFGX ////////////////////////////*/

try{

	new PCAS("bdprovince","bdcity","bdarea");

}catch(ex){}

try{

	var thissrc=document.getElementById("wfcode").src;

	function refreshCode(){

		document.getElementById("wfcode").src=thissrc+"temp="+Math.random(); 

	}

}catch(ex){}

/*//////////////////////////// CLORDERJSFGX ////////////////////////////*/

function pricea(){

	var bdproduct=document.clform.bdproduct.alt;

	for(var i=0;i<document.clform.bdproduct.length;i++){

		if(document.clform.bdproduct[i].checked==true){

			var bdproduct=document.clform.bdproduct[i].alt;

			break;

		}

	}

    if(document.clform.bdnum.value==""||document.clform.bdnum.value==0){	

		var bdnum=1;

	}

	else{

		var bdnum=document.clform.bdnum.value;

	}	

	var bdprice=bdproduct*bdnum;

	document.clform.bdprice.value=bdprice;

	document.getElementById("showprice").innerHTML=bdprice;

}

function priceb(){

    var clcpxljg=document.getElementById("bdproduct");

    var bdproduct=clcpxljg.options[document.getElementById("bdproduct").options.selectedIndex].title; 

    if(document.clform.bdnum.value==""||document.clform.bdnum.value==0){	

		var bdnum=1;

	}

	else{

		var bdnum=document.clform.bdnum.value;

	}	

	var bdprice=bdproduct*bdnum;

	document.clform.bdprice.value=bdprice;

	document.getElementById("showprice").innerHTML=bdprice;

}

function pricec(){

	var bdnum=0;

	var bdprice=0;	

	var obj=document.getElementsByName("box");

    for(var i=0;i<obj.length;i++){

		if(obj[i].checked){

			bdnum++;

			bdprice+=parseInt(obj[i].alt);

		}

	}
	

	document.clform.bdnum.value=bdnum;

	document.clform.bdprice.value=bdprice;

	document.getElementById("showmun").innerHTML=bdnum;

	document.getElementById('showprice').innerHTML=bdprice;
	var str=document.getElementsByName("box");
var objarray=str.length;
var chestr="";
for (i=0;i<objarray;i++)
{  if(str[i].checked == true)
  {
   chestr+=str[i].value+",";
  }
}
if(chestr == "")
{
  alert("请选择中意的产品！");
  
}
else
{
  document.clform.bdproduct.value =chestr;
}

}

function priced(){

	var bdproducta=document.clform.bdproducta.alt;

	for(var i=0;i<document.clform.bdproducta.length;i++){

		if(document.clform.bdproducta[i].checked==true){

			var bdproducta=document.clform.bdproducta[i].alt;

			break;

		}

	}

    if(document.clform.bdnum.value==""||document.clform.bdnum.value==0){	

		var bdnum=1;

	}

	else{

		var bdnum=document.clform.bdnum.value;

	}	

	var bdprice=bdproducta*bdnum;

	document.clform.bdprice.value=bdprice;

	document.getElementById("showprice").innerHTML=bdprice;

}

/*//////////////////////////// CLORDERJSFGX ////////////////////////////*/
function changeItem(i){

    var k=4;

	for(var j=0;j<k;j++){

	    if(j==i){

		    document.getElementById("paydiv"+j).style.display="block";

		}

		else{		

		    document.getElementById("paydiv"+j).style.display="none";

		}

	}

}

function opay(){

	document.getElementById("clform").target="_parent";

}

function opay2(){

    document.getElementById("clform").target="_blank";

}
document.getElementById("referer").value = opener?opener.location.href:(top.document.referrer?top.document.referrer:top.location.href);
document.getElementById("url").value = top.location.href;
document.getElementById("purl").value = document.location;


