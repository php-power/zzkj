function yulanmu(adm,id){
	if(adm == 0){
		layui.use(['layer','form'],function(){
	        var $ = layui.jquery, layer = layui.layer,form=layui.form;
	        layer.open({
				  type: 2,
				  shade: 0.3,
				  isOutAnim:true,
				  anim:-1,
				  title:'添加案例',
				  id:"editdeta",
				  area: ["700px", "100%"],
				  content: productEdit,
				  success:function(layero,index){
				  	var add = '<a href="javascript:;" id="editAdd" class="layui-btn layui-btn-small" style="position: absolute;right: 65px;top: 9px;height:27px;line-height:27px;border-radius:4px">保存</a>';
		       		$("#layui-layer"+index).append(add)
				  },
				});
	    })
	}else if(adm == 1){
		layui.use(['layer','form'],function(){
        var $ = layui.jquery, layer = layui.layer,form=layui.form;
        layer.open({
			  type: 2,
			  shade: 0.3,
			  isOutAnim:true,
			  anim:-1,
			  title:'编辑案例',
			  id:"editdeta",
			  area: ["700px", "100%"],
			  content: productEdit+'?id='+id,
			  success:function(layero,index){
			  	var add = '<a href="javascript:;" id="editAdd" class="layui-btn layui-btn-small" style="position: absolute;right: 65px;top: 9px;height:27px;line-height:27px;border-radius:4px">保存</a>';
	       		$("#layui-layer"+index).append(add)
			  },
			});
    })
	}
    
}

$("body").on("click",'#editAdd',function(){
	var frameId=document.getElementById('editdeta').getElementsByTagName("iframe")[0].id;
	$('#'+frameId)[0].contentWindow.biaodan();
	
})

function closeeditbox(){
	var index = $("#editdeta").parents(".layui-layer").attr("times")
	var frameId = $(".layui-tab-content").find(".layui-show").find("iframe").attr('src');
	$(".layui-tab-content").find(".layui-show").find("iframe").attr('src',frameId);
	layer.close(index);
}
