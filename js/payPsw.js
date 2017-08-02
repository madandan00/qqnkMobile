$(".eliminate").on("click", function() {
	$(this).parent().find("input").val('');
})
//支付密码判断
function checkPay(id) {
	var userPwd = $("#" + id).val() || $("#" + id).html();
	if((/^[0-9]{6}$/.test(userPwd))) {
		return true;
	} else {
		return false;
	}
}

//验证手机号
function checkPhone(id) {
	var userPhone = $("#" + id).html() || $("#" + id).val();
	//alert(userPhone);
	if((/^1[34578]\d{9}$/.test(userPhone))) {
		return true;
	} else {
		return false;
	}
}

//发送手机号到后台
function sentPhone(id1, id2) {
	//dtime()
	if(checkPhone(id1) == true) {
		var phone = $("#" + id1).html() || $("#" + id1).val();
		//console.log(phone)
		dtime(id2)
			//	    	$.ajax({
			//	    		type:"get",
			//	    		data:{"user_name":phone},
			//	    		url:"",
			//	    		dataType: "json",
			//	    		async:true,
			//	    		success:function(data){
			//	    			
			//	    			console.log(data)
			////	    			alert(1)
			//	    			
			//	    		}
			//	    		
			//	    	});
	}
}
//验证码获取后倒计时事件函数	
function dtime(id) {
	var s = 5;
	var timer = setInterval(function() {
		s--;
		$("#" + id).html("还剩" + s + "秒");
		$("#" + id).css({
			"color": "#fff",
			"background": "rgba(246,186,119,0.6)"
		})
		if($("#" + id).html() == "还剩0秒") {
			clearInterval(timer);
			$("#" + id).html("重新获取");
			$("#" + id).css({
				"color": "#fff",
				"background": "#ff8b00"
			})
		}
	}, 1000)
}
//旧手机号触发获取验证码事件,第一步	
$("#yzm").bind("click", function() {
	if($("#yzm").html() == "获取验证码") {
		sentPhone("phone", "yzm");
	} else if($("#yzm").html() == "重新获取") {
		sentPhone("phone", "yzm");
	} else {
		return false;
	}
})
//下一步
$(".nextActive").on("click",function(){
	$(".content").hide();
	$(".contentBox").show();
})
//确认密码
$(".qrmm").on("click",function(){
	var payPsw=$("#payPsw").val();
	var againPayPsw=$("#againPayPsw").val();
	if(checkPay("payPsw")){
		if(payPsw==againPayPsw){
			$.ajax({
				type:"get",
				url:"",
				data:{"payPsw":payPsw},
				async:true,
				success:function(){
					
				}
			});
		}else{
			alert("两次输入的密码不一致")
		}
	}else{
		alert("支付密码格式错误")
	}
})
//验证码输入框变化
$("#inYzm").bind("keyup", function() {
	//setTimeout(function() {
		if($(this).val().length = 6) {
			$(".next").addClass("nextActive")
		}
	//}, 300);

})