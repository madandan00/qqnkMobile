//评论限制
$(".pinglun").on("focus", function() {
	if($(this).val() == "请输入文字描述") {
		$(this).val("");
	}
})
$(".pinglun").on("blur", function() {
	if($(this).val() == "") {
		$(this).val("请输入文字描述");
		$(this).css("color", "#ccc")
	}
})
$(".pinglun").bind("keyup change", function() {
	var val = $(this).val();
	if(val != "请输入文字描述") {
		$(this).css("color", "#333");
		$(this).css({
			"color": "#333"
		})
	} else {
		$(this).css("color", "#ccc")
	}
	if($(this).val().length > 100) {
		alert("请输入小于200字的内容");
		$(this).val(val.substring(0, 100));
	} 
})
//退货原因出现
$(".refundReason").on("click",function(){
	$(".mark").show();
})
$(".mark li").on("click",function(){
	var val=$(this).html();
	$(".RefundReason").html(val);
	$(".mark").hide();
})
//提交申请
$(".tj").on("click",function(){
	var reason=$(".RefundReason").html();//选择的原因
	var reasonTxt=$(".pinglun").val();//手写的原因
	
	$.ajax({
		type:"get",
		url:"",
		success:function(){
			
		}
	});
})
