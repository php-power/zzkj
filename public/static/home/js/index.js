
//轮播图
//		var oWidth; 
//		var OWith;
//		setInterval(function(){ 
//			oWidth = $(window).width();
//			$(".pic").css({"width":oWidth});
//			OWidth = oWidth*6;
//			$(".pic ul").css({"width":OWidth});
//			$(".pic ul li").css({"width":oWidth});
//		},10);
//		$(window).resize(function(){
//			clearInterval(timer);
//			$(".pic ul").css({"left":index*oWidth*(-1)+"px"});
//			
//		})
		//轮播图
		var timer;
		var index = 0;
		myshow();
		var l = $(".pic ul li").length;
//		$(".pic ul").html($(".pic ul").html()+$(".pic ul").html());
		//定时器
		function autoPlay(){
			$(".pic ul li").eq(0).find(".img1").animate({"left":"150px"},500);
			timer = setInterval(function(){
				index++;
				if(index == l){
					index = 0;
					$(".pic ul").css({"left":"0px"});
				}
				$(".dao ul li").eq(index).addClass("select").siblings().removeClass("select");
				$(".pic ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
				myshow();
				yuan();
			},3000);
		}
		autoPlay();
		function myshow(){ 
			$(".pic ul li").eq(index).find(".img1").animate({"left":"150px"},1000,function(){
				$(".pic ul li").eq(index).find(".imgs2").css("display","block");
				$(".pic ul li").eq(index).find(".imgs2").animate({"left":"200px"},1000);
			});
			$(".pic ul li").eq(index).find(".img2").animate({"top":"150px"},1000,function(){
				$(".pic ul li").eq(index).find(".imgs3").css("display","block");
				$(".pic ul li").eq(index).find(".imgs3").animate({"bottom":"300px"},1000);
			});
			$(".pic ul li").eq(index).find(".img3").animate({"left":"350px"},1000,function(){
				$(".pic ul li").eq(index).find(".imgs4").css("display","block");
				$(".pic ul li").eq(index).find(".imgs4").animate({"right":"350px"},1000);
			});
		}
		function yuan(){
			$(".pic ul li").eq(index).siblings().find(".img1").css("left","-100%");
			$(".pic ul li").eq(index).siblings().find(".imgs2").css("left","-100%");
			$(".pic ul li").eq(index).siblings().find(".imgs2").css("display","none");
			
			$(".pic ul li").eq(index).siblings().find(".img2").css("top","-150px");
			$(".pic ul li").eq(index).siblings().find(".imgs3").css("bottom","-150px");
			$(".pic ul li").eq(index).siblings().find(".imgs3").css("display","none");
			
			$(".pic ul li").eq(index).siblings().find(".img3").css("left","-100%");
			$(".pic ul li").eq(index).siblings().find(".imgs4").css("right","-100%");
			$(".pic ul li").eq(index).siblings().find(".imgs4").css("display","none");
		}

		//鼠标一上一下
		$(".main").hover(function(){
			$(".main .annu").stop().fadeIn();
			clearInterval(timer);
		},function(){
			autoPlay();
			$(".main .annu").stop().fadeOut();
		})
		function run(){
			$(".dao ul li").eq(index).addClass("select").siblings().removeClass("select");
			$(".pic ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
		}
		//点击左右按键
		function before(){
			index--;
			if(index<0){
				index=l;
			}
			run();
			myshow();
			yuan();
		}
		function next(){
			index++;
			if(index==l){
				index=0;
			}
			run();
			myshow();
			yuan();
		}
		//点击底部的小圆点
		$(".dao ul li").click(function(){
        	index = $(this).index();
        	run();
        	myshow();
			yuan();
     })
	
	
	
	
	$(function(){
		var widthh = $(window).width();
		if(widthh>768){
		//鼠标放上出现遮罩层
		$(".zhezhao").mouseover(function(){
			$(this).find(".code").stop().slideDown('fast');
		});
		$(".zhezhao").mouseout(function(){
			$(this).find(".code").stop().slideUp('fast');
		});	
	//监听距离顶部的位置
		$(document).scroll(function (){
			$(".serleft,.serright,.sertop,.zhezhao,.boxxian").each(function () {
	            var _delay = $(this).attr("data-delay");
	            var _duration = $(this).attr("data-duration");
	            $(this).css("-webkit-animation-delay", (_delay) + "ms");
	            $(this).css("-webkit-animation-duration", (_duration) + "ms");
	       });
			var st = $(document).scrollTop();
			if(st>99){
			   $(".ani1").addClass("animated swing");
		       $(".serleft").addClass("animated fadeInRight");
		       $(".serviceList dl").css({"opacity":1});
			}
			if(st>450){
				$(".ani2").addClass("animated fadeInUp");
			}
			if(st>650){
		        $(".zhezhao").addClass("animated fadeInUp");
		        $(".caseList").css({"opacity":1});
			}
			if(st>1300){
				$(".ani3").addClass("animated fadeInUp");
		        $(".boxxian").addClass("animated fadeInUp");
		        $(".boxxian").css({"opacity":1});
			}
	
		}); 
	}
	var newIndex = 0;		
	setInterval(function(){
		newIndex++;
		if(newIndex >= $(".home-news ul li").length){
			newIndex = 0
		}
		$(".home-news ul").css({"margin-top":(-newIndex*20)+"px"})
	},2500)
	
})
	
$("#index_xs").click(function(){
	console.log($("#pages").css("display") )
	if($("#pages").css("display") == "none"){
		$("#pages").show()
	}else{
		$("#pages").hide()
	}
})


 function pcop(){
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            return "phone";
        } else {
        	return "pc";
        }
    }
 $("body").on("click",".peoductly",function(){
			var id = $(this).attr("data-id");
			var name = $(this).attr("data-name");
			console.log(id,name)
			var width1="",height1="";
              if(pcop()=="phone"){
				  width1="100%";height1="100%";
			  }else{
				 width1="800px";height1="680px"; 
				 if($(window).height() < 680){
				 	height1 = "100%"
				 }
			  }
			layui.use('layer',function(){
		        var $ = layui.jquery, layer = layui.layer;
				
		    	layer.open({
					  type: 2,
					  shade: 0.3,
					  isOutAnim:true,
					  title: [name, 'font-size:18px;'],
					  id:"rencD",
					  area: [width1, height1],
					  content: openurl+'?id='+id, //iframe的url，no代表不显示滚动条
					  success:function(layero,index){}
					});
		       })
		})
 
$(".coolbg").click(function(){
	layui.use('layer',function(){
		        var $ = layui.jquery, layer = layui.layer;
				var ly = $("#ly").val();
				var xm = $("#name").val();
				var lxfs = $("#tel").val();
				if(lxfs == ''){
					layer.msg("电话不能为空！",{icon:2,time:1800})
				}else{
					if(/^1[34578]\d{9}$/.test(lxfs)){
						var index = layer.load(1,{shade: [0.2,'#000'],content:'正在联系中...',success: function(layero){
						layero.find('.layui-layer-content').css({'width':'150px',"padding-left":"40px","line-height":"37px","color":"#fff","font-size":"16px"});
						}});
						$.post(sendyu,{name:xm,tel:lxfs,content:ly}, function (res1) {
							layer.close(index)
			                if (res1.code == 1) {
			                    layer.msg(res1.msg, {time: 1800, icon: 1}, function () {
			                    	$("#ly").val('');$("#name").val('');$("#tel").val('');
			                    });
			                } else {
			                    layer.msg("提交失败", {time: 1800, icon: 2});
			                }
			            });
					}else{
						layer.msg("电话格式不对！",{icon:2,time:1800})
					}
					
				}
				})
			})


$(".home-news").on("click","li",function(){
	var id = $(this).attr("data-id");
			var name = $(this).attr("data-name");
			console.log(id,name)
			var width1="",height1="";
              if(pcop()=="phone"){
				  width1="100%";height1="100%";
			  }else{
				 width1="800px";height1="680px"; 
				 if($(window).height() < 680){
				 	height1 = "100%"
				 }
			  }
			layui.use('layer',function(){
		        var $ = layui.jquery, layer = layui.layer;
				
		    	layer.open({
					  type: 2,
					  shade: 0.3,
					  isOutAnim:true,
					  title: ['新闻', 'font-size:18px;'],
					  id:"rencD",
					  area: [width1, height1],
					  content: openurlnew+'?id='+id, //iframe的url，no代表不显示滚动条
					  success:function(layero,index){}
					});
		       })
})
