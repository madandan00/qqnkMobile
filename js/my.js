$(function(){
	if($.cookie("user_id")==""){
		
	}else{
		
	}
})

//在线客服模块显示
$(".linkCus").on("click",function(){
	//alert(1)
	$(".mark").show();
	$("#linkKeFu").show();
})
//取消打电话
$(".KefuCancel").on("click",function(){
	$(".mark").hide();
	$("#linkKeFu").hide();
})
//在线客服
$(".online").on("click",function(){
	$(".mark").hide();
	$("#linkKeFu").hide();
})
//打电话
$(".call").on("click",function(){
	$(".mark").hide();
	$("#linkKeFu").hide();
})