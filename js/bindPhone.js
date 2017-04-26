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
//手机号触发获取验证码事件
$("#yzm").bind("click", function() {
		if($("#yzm").html() == "获取验证码") {
			sentPhone("bindPhone", "yzm");
		} else if($("#yzm").html() == "重新获取") {
			sentPhone("bindPhone", "yzm");
		} else {
			return false;
		}
	})
	//绑定
$(".bd").on("click", function() {

})
$("#inYzm").bind("keyup input propertychange", function() {
	//setTimeout(function() {
		
		if($(this).val().length == 6) {
			$(".next").addClass("nextActive")
		}
	//}, 300);

})