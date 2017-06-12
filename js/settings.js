//显示退出提示
$(".exit").on("click",function(){
	$(".mark").show();
	$(".hint").show();
})
//确定退出
$(".SureExit").on("click",function(){
	//清除cookie
	$.cookie("", null); 
	$.cookie("",null);
	$(".mark").hide();
	$(".hint").hide();
})
//取消退出
$(".cancelExit").on("click",function(){
	$(".mark").hide();
	$(".hint").hide();
})
