$(function(){	
	$(document).ready(function() {
		//每个页面的banner图片
			$(".runbox1").addClass("animated fadeInDown");
			$(".runbox2").addClass("animated fadeInLeft").animate({"margin-left":"50px"},1000);
			$(".runbox3").addClass("animated fadeInUp");
			$(".runbox4").addClass("animated rollIn");
			$(".runbox5").addClass("animated zoomIn");
			$(".runbox6").addClass("animated jello");
			$(".runbox7").addClass("animated zoomIn");

		var foot = '<dl class="footerleft">'+
					'<dt class="font18">'+
						'关于我们'+
					'</dt>'+
					'<dd>'+
						'<P>'+
							'公司专注从事移动互联网信息技术领域内的Internet网络服务和网络商业应用研究包括电子商务、网络娱乐信息、微营销、软件研究开发、商业网站规划...'+
						'<a href="../html/aboutus.html">更多</a>'+
						'</P>'+
//						'<a href="../html/aboutus.html">查看更多</a>'+
					'</dd>'+
				'</dl>'+
				'<dl class="footercenter">'+
					'<dt class="font18">'+
						'业务范围'+
					'</dt>'+
					'<dd>'+
						'<a href="###">微信开发</a>'+
						'<a href="###">网站开发</a>'+
						'<a href="###">新媒体运营</a>'+
						'<a href="###">SEO优化</a>'+
						'<a href="###">小程序开发</a>'+
					'</dd>'+
				'</dl>'+
				'<dl class="footerright">'+
					'<dt class="font18">'+
						'联系我们'+
					'</dt>'+
					'<dd>'+
						'<P>'+
							'<span>地址：碑林区翡翠明珠2号楼1单元</span>'+
							'<span>邮箱：123456789@qq.com</span>'+
							'<span>电话：18292466588</span>'+
						'</P>'+
						
					'</dd>'+
				'</dl>';
			$(".foot").append(foot);
			
			//联系我们
		var share = '<form method="">'+
			'<div class="tou">'+
				'<span class="animated tada">拨打电话：18292466588</span>'+
			'</div>'+
			'<ul>'+
				'<li>'+
					'<input type="text" class="titlename" placeholder="姓名（必填）"/>'+
				'</li>'+
				'<li>'+
					'<input type="text" class="phone" placeholder="电话（必填）"/>'+
				'</li>'+
				'<li>'+
					'<input type="button" value="提交" onclick="tijiao()"/>'+
				'</li>'+
			'</ul>'+
			'<div class="tishi">提交成功</div>'+
			'<div class="falsee">提交失败</div>'+
		'</form>';
		$(".connect").append(share);
	})
	
	var widthh = $(window).width();
	if(widthh<768){
		$(".ulshowindex").on("click",function(){	
			$(".nav ul,.navv ul").slideDown();
		})
		$(".nav ul,.navv ul").on("click",function(){
			$(".nav ul,.navv ul").slideUp();
		})
	}
	
	
})
//点击联系我们
function lianxi(){
	$(".connect").toggle();
}
//点击提交
function tijiao(){
	$(".worning").css({"display":"block"});
	var titlename = $(".titlename").val();
	var phone = $(".phone").val();
	if((titlename!="")&&(phone!="")){
		$(".tishi").fadeIn(100);
		setTimeout(' $(".tishi").fadeOut(100);',2000);
		$(".titlename").val("");
		$(".phone").val("");
	}else{
		$(".falsee").fadeIn(100);
		setTimeout(' $(".falsee").fadeOut(100);',2000);
	}
}


//新闻鼠标放上出现边框
	$(".boxxian").mouseover(function(){
		$(this).find(".topxian").stop().animate({"width":"100%"},400);
		$(this).find(".bottomxian").stop().animate({"width":"100%"},400);
		$(this).find(".leftxian").stop().animate({"height":"100%"},400);
		$(this).find(".rightxian").stop().animate({"height":"100%"},400);
	});
	$(".boxxian").mouseout(function(){
		$(this).find(".topxian").stop().animate({"width":"0"},400);
		$(this).find(".bottomxian").stop().animate({"width":"0"},400);
		$(this).find(".leftxian").stop().animate({"height":"0"},400);
		$(this).find(".rightxian").stop().animate({"height":"0"},400);
	});
//返回顶部
	$(function(){
	//鼠标滚轮滚动到一定程度时右侧的三个框出现,左侧的框出现
		$(window).scroll(function(){
			var scrollTop = $(window).scrollTop();
			if(scrollTop>400){
				$("#goTop,.about").fadeIn();
			}else{
				$("#goTop,.about").fadeOut();
			}
		})
		//点击返回顶部
		$("#goTop").click(function(){
			$("body,html").animate({"scrollTop":"0"});
		})
		//导航
		
	})
	//分享
//	window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"1","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"16"},"slide":{"type":"slide","bdImg":"2","bdPos":"right","bdTop":"100"}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];




































