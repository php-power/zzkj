(function($) {
  var defaults = {
    'container': '#container', //容器
    'sections': '.section', //子容器
    'easing': 'ease', //特效方式，ease-in,ease-out,linear
    'duration': 1000, //每次动画执行的时间
    'pagination': true, //是否显示分页
    'loop': false, //是否循环
    'keyboard': true, //是否支持键盘
    'direction': 'vertical', //滑动的方向 horizontal,vertical,
    'pagelistbox':'',
    'onpageSwitch': function(pagenum) {}
  };
  var win = $(window);
  var iIndex = 0,loin=0; //当前section的索引
  var arrElement = [];
  var canScroll = true;
  var container;
  var sections;
  var opts;

  var SP = $.fn.switchPage = function(options) {
    opts = $.extend({}, defaults, options || {});
    container = $(opts.container);
    sections = container.find(opts.sections);
    sections.each(function() {
      arrElement.push($(this));
    });
    return this.each(function() {
      if (opts.direction == 'horizontal') initLayout();
      if (opts.pagination) initPagination();
    })

  }
  //重置鼠标滚轮事件
  $(document).on("mousewheel DOMMouseScroll", MouseWheelHandler);
  function MouseWheelHandler(e) {
    e.preventDefault();
    var value = e.originalEvent.wheelDelta || -e.originalEvent.detail;
    var delta = Math.max(-1, Math.min(1, value));
//  console.log(canScroll,loin)
    if (canScroll && loin == 0) {
    	loin = 1;
    	setTimeout(function(){
    		loin = 0;
    	},1000)
    		if (delta < 0) {
    		  SP.moveSectionDown();
    		} else {
    		  SP.moveSectionUp();
    		}
    }
    return false;
  }

  //向上一张移
  SP.moveSectionUp = function() {
  	canScroll = false;
  	if(opts.loop){
  		if (iIndex) {
	      iIndex--;
	    }else{
	      iIndex = arrElement.length - 1;
	    }
	    scrollPage(arrElement[iIndex]);
  	}else{
  		if (iIndex) {
	      iIndex--;
	      scrollPage(arrElement[iIndex]);
	    }
  	}
  }
  //向下一张移
  SP.moveSectionDown = function() {
  	canScroll = false;

  	if(opts.loop){
  		if (iIndex < (arrElement.length - 1)) {
	      iIndex++
	    }else{
	      iIndex = 0;
	    }
	    scrollPage(arrElement[iIndex]);
  	}else{
  		if(iIndex < (arrElement.length - 1)){
  			iIndex++
  			scrollPage(arrElement[iIndex]);
  		}
  	}
  }

  //当设置横向移动时初始化横向页面
  function initLayout() {
    var width = (sections.length * 100) + '%',
      cellwidth = (100 / sections.length).toFixed(2) + '%';
    // container.width(width).addClass('left');
    container.width(width);
    sections.width(cellwidth).addClass('left');
  }

  //移动页面
  function scrollPage(element) { 
    var dest = element.position();
    if (dest == void 0) return;
    initEffects(dest, element);
   
  }

  //导航条初始化
  function initPagination() {
  	if(opts.pagelistbox && opts.pagelistbox != ''){
  		var length = sections.length;
  		var pageHtml = '<ul  id="'+opts.pagelistbox+'">'
  		for (var i = 0; i < length; i++){
  			if(iIndex == i){
  				pageHtml += '<li data-index="'+i+'" class="active"></li>'
  			}else{
  				pageHtml += '<li data-index="'+i+'"></li>'  				
  			}
  		};
  		pageHtml += '</ul>';
  		$("body").append(pageHtml);  		
  		$("body").on("click","#"+opts.pagelistbox+" li" ,function(){
				iIndex = $(this).attr("data-index");
				if (opts.pagination) {
		      paginationHandler();
		    }
				scrollPage(arrElement[iIndex]);
			})
  	}
  }

  function isSupportCss(property) {
    var body = $('body')[0];
    for (var i = 0; i < property.length; i++) {
      if (property[i] in body.style) {
        return true;
      }
    }
    return false;
  }

  //移动页面的核心函数
  function initEffects(dest, element) {

    var translate = "";
    if (opts.direction == 'horizontal') {
      translate = '-' + dest.left + 'px, 0px, 0px';
    } else {
      translate = '0px, -' + dest.top + 'px, 0px';
    }
    container.css({
      'transform': "translate3d(" + translate + ")",
      'transition': "all " + opts.duration + "ms " + opts.easing
    });
    container.on("webkitTransitionEnd msTransitionend mozTransitionend transitionend", function() {
    	setTimeout(function(){
    		canScroll = true;    		
    	},500)
    });
    
    element.addClass("active").siblings().removeClass('active');
    if (opts.pagination) {
      paginationHandler();
    }
  }

  //每次页面移动时，修改导航栏
  function paginationHandler() {
    var pages = $('#pages li');
    pages.eq(iIndex).addClass('active').siblings().removeClass('active');
    if(opts.pagelistbox && opts.pagelistbox != ''){
    	var palist = $("#"+opts.pagelistbox+" li");
    	palist.eq(iIndex).addClass('active').siblings().removeClass('active');
    }
    if(iIndex==0){
    	$(".indexheader .header").animate({"height":"90px","line-height":"90px"})
    	$(".indexheader .logo img").css({"width":"80%"})
    	$(".indexheader li a").animate({"font-size":"18px"})
    	$(".indexheader .tell span").animate({"font-size":"16px"})
    	if($("#pages").css("position") == "absolute"){
    		$("#pages").css({"top":"90px"})
    	}
    }else{
    	if(parseInt($(".indexheader .header").css("height").match(/\d+/g)[0])>=90 ){
    		$(".indexheader .header").animate({"height":"80px","line-height":"80px"})
    		$(".indexheader .logo img").css({"width":"71%"})  
    		$(".indexheader li a").animate({"font-size":"17px"})
    		$(".indexheader .tell span").animate({"font-size":"15px"})
    	}
    	if($("#pages").css("position") == "absolute"){
    		$("#pages").css({"top":"80px"})
    	}
    }
  }
	$('#pages a').click(function(){
		iIndex = $(this).parents("li").attr("data-index");
		if (opts.pagination) {
      paginationHandler();
    }
		scrollPage(arrElement[iIndex]);
	})
	$(".nav .logo").click(function(){
		iIndex =0;
		if (opts.pagination) {
	      paginationHandler();
	    }
		scrollPage(arrElement[iIndex]);
	})
  var resizeId;
  win.resize(function() {
  	if($("#pages").css("position") != "absolute"){
    		$("#pages").removeAttr("style")
    	}
    clearTimeout(resizeId);
    resizeId = setTimeout(function(){
      rebuild();
    }, 500);
  });

  function rebuild() {
    var currentHeight = win.height();
    var currentWidth = win.width();
    var element = arrElement[iIndex];
    if(opts.direction == "horizontal") {
      var offsetLeft = element.offset().left;
      if (Math.abs(offsetLeft) > (currentWidth/2) && iIndex < (arrElement.length - 1)){
        iIndex++
      }
    }else {
      var offsetTop = element.offset().top;
      if (Math.abs(offsetTop) > (currentHeight/2) && iIndex < (arrElement.length - 1)){
        iIndex++
      }
    }
    var currentElement = arrElement[iIndex],
    dest = currentElement.position();
    initEffects(dest, currentElement);
    if(opts.pagination) paginationHandler();
  }
  
})(jQuery);
