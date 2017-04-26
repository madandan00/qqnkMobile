//显示退出提示
$(".exit").on("click",function(){
	$(".mark").show();
	$(".sureExit").show();
})
//确定退出
$(".SureExit").on("click",function(){
	//清除cookie
	
	
	$(".mark").hide();
	$(".sureExit").hide();
})
//取消退出
$(".cancelExit").on("click",function(){
	$(".mark").hide();
	$(".sureExit").hide();
})
