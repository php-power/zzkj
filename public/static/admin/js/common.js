/** common.js By Beginner Emain:zheng_jinfan@126.com HomePage:http://www.zhengjinfan.cn */
layui.define(['layer'], function(exports) {
	"use strict";

	var $ = layui.jquery, layer = layui.layer;
	var common = {
		/**
		 * 抛出一个异常错误信息
		 * @param {String} msg
		 */
		throwError: function(msg) {
			throw new Error(msg);
			return;
		},
		/**
		 * 弹出一个错误提示
		 * @param {String} msg
		 */
		msgError: function(msg) {
			layer.msg(msg, {
				icon: 5
			});
			return;
		}
	};
	exports('common', common);
});

function formdan(id){
	var tou = 1;
	var ifmob=/^1[3,4,5,7,8]\d{9}$/;
	var ifemail=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	console.log(44)
	var inputBox = $("#"+id).find("*[require=true]")
	console.log(inputBox)
	inputBox.each(function() { 
		console.log($(this).attr("data-p"))
		if($(this).val() == ''){
			var name = $(this).attr("data-p");
			$(this).addClass("warnP")
			setTimeout(function(){
				$("#"+id).find("*[require=true]").removeClass("warnP")
			},2000)
			layer.msg(name+"不能为空！",{icon:2,time:1800})
			tou = 0;
			return false;
		}else{
			if($(this).attr("lay-require") == 'phone'){
				if(!ifmob.test($(this).val())){
					var name = $(this).attr("data-p");
					$(this).addClass("warnP")
					setTimeout(function(){
						$("#"+id).find("*[require=true]").removeClass("warnP")
					},2000)
					layer.msg("手机格式不对！",{icon:2,time:1800})
					tou = 0;
					return false;
				}
				
			}
		}
	});
	return tou;
}
