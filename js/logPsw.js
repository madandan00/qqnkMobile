$(".eliminate").on("click", function() {
	$(this).parent().find("input").val('');
})
$(".tj").on("click", function() {
	var oldPsw = $("#oldPsw").val();
	var newPsw = $("#newPsw").val();
	var again = $("#secondPsw").val();
	if(checkPwd(oldPsw)) {
		if(checkPwd(newPsw)) {
			if(newPsw == again) {
				$.ajax({
					type: "post",
					url: "",
					data: {
						"oldPwd": oldPwd,
						"newPwd": newPwd
					},
					success: function(data) {

					}
				});
			}else{
				alert("两次输入密码不一致");
			}
		} else {
			alert("新密码格式错误");
		}

	} else {
		alert("旧密码格式错误");
	}

})

function checkPwd(a) {
	//var userPwd = $(".newPsw").val();
	if((/^[a-zA-Z0-9_]{6,20}$/.test(a))) {

		return true;
	} else {

		return false;
	}
}