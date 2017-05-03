//跳转页到支付页面
$(".next").on("click",function(){
	var val=$("#money").val();
	if(val>0){
		$(".Money").html(val);
		$(".box1").hide();
		$(".box2").show();
	}
	
	//localStorage.setItem("save",val)
})
//输入金额控制
$("#money").bind("keyup",function(){
	var val=$("#money").val();
	if(!/^\d+$/.test(val)){
		$(this).val(val.slice(0,val.length-1));
	}
	
})
//选择支付方式
$(".choose").on("click",function(){
	$(".choose").removeClass("icon-duihao").addClass("icon-yuanquan");
	$(this).removeClass("icon-yuanquan").addClass("icon-duihao");
})
//付款
$(".pay").on("click",function(){
	var val=$(".Money").html();
	$(".choose").forEach(function(ele,index){
		if($(ele).hasClass("alipay")){
			$.ajax({
				type:"get",
				url:"",
				async:true
			});
		}else if($(ele).hasClass("wechat")){
			$.ajax({
				type:"get",
				url:"",
				async:true
			});
		}
	})
})
