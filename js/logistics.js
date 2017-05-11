//选着物流弹框出现
$(".choseWl").on("click",function(){
	$(".express").show(500);
})
//选着物流弹框关闭
$(".close").on("click",function(){
	$(".express").hide(500);
})
//选择快递
$(".componey li").on("click",function(){
	$(".componey").find("i").removeClass("icon-duihao").addClass("icon-yuanquan");
	$(this).find("i").removeClass("icon-yuanquan").addClass("icon-duihao");
})
//确定选择快递
$(".wl").on("click",function(){
	var wl="";//快递公司
	$(".componey li i").each(function(index,ele){
		if($(ele).hasClass("icon-duihao")){
			wl=$(ele).parent().find("span").html();
		}
	})
	$(".logistics").attr("data-wl",wl);
	$(".choseWl").val(wl)
    $(".express").hide();
	
})
$(".save").on("click",function(){
	if($(".choseWl").val()!=""&&$(".expressNum").val()!=""){
		var wl=$(".choseWl").val();
		var num=$(".expressNum").val();
		$.ajax({
			type:"get",
			url:"",
			success:function(){
				
			}
		});
	}
	
})
