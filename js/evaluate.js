//评论限制
$(".pinglun").on("focus", function() {
	if($(this).val() == "亲！分享给想买的他们吧！") {
		$(this).val("");
	}
})
$(".pinglun").on("blur", function() {
	if($(this).val() == "") {
		$(this).val("亲！分享给想买的他们吧！");
		$(this).css("color", "#ccc")
	}
})
$(".pinglun").bind("keyup change", function() {
		var val = $(this).val();
		if(val != "亲！分享给想买的他们吧！") {
			$(this).css("color", "#333")
		} else {
			$(this).css("color", "#ccc")
		}
		if($(this).val().length > 200) {
			window.confirm("请输入小于200字的内容");
			$(this).val(val.substring(0, 200));
		} else {
			$(".zhiNum").html(200 - $(this).val().length)
		}
	})
//商品星星
$(".good i").on("click", function() {
	$(".good i").removeClass("icon-wujiaoxingman").addClass("icon-wujiaoxingkong");
	var index = $(this).index();
	for(var i = 0; i <=index; i++) {
		$(".good i").eq(i).addClass("icon-wujiaoxingman").removeClass("icon-wujiaoxingkong")
	}
})
//物流星星
$(".logisticsService i").on("click", function() {
	$(".logisticsService i").removeClass("icon-wujiaoxingman").addClass("icon-wujiaoxingkong");
	var index = $(this).index();
	for(var i = 0; i < index; i++) {
		$(".logisticsService i").eq(i).addClass("icon-wujiaoxingman").removeClass("icon-wujiaoxingkong")
	}
})
//服务星星
$(".serviceAttitude i").on("click", function() {
	$(".serviceAttitude i").removeClass("icon-wujiaoxingman").addClass("icon-wujiaoxingkong");
	var index = $(this).index();
	for(var i = 0; i < index; i++) {
		$(".serviceAttitude i").eq(i).addClass("icon-wujiaoxingman").removeClass("icon-wujiaoxingkong")
	}
})
//发布评论
$(".fb").on("click",function(){
	var goodxx=0;
	var wxxx=0;
	var fwxx=0;
	//服务星星
	$(".good i").each(function(index,ele){
		if($(ele).hasClass("icon-wujiaoxingman")){
			goodxx++;
		}
	})	
	//物流星星
	$(".logisticsService i").each(function(index,ele){
		if($(ele).hasClass("icon-wujiaoxingman")){
			wxxx++;
		}
	})
	//服务星星
	$(".serviceAttitude i").each(function(index,ele){
		if($(ele).hasClass("icon-wujiaoxingman")){
			fwxx++;
		}
	})
	
	//评论内容
	if($(".pinglun").val()=="亲！分享给想买的他们吧！"){
		var txt="";
	}else{
		var txt=$(".pinglun").val();
	}
	//
	var nm=$(".nmpj")[0].checked
    $.ajax({
    	type:"get",
    	url:"",
    	async:true
    });
})
