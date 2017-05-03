//保存
$(".cancelAddress").on("click", function() {
		var name = $("#name").val();
		var address1 = $("#area").val();
		var address2 = $("#detail").val();
		var phone = $("#phone").val();
		$.ajax({
			type: "get",
			data: {},
			url: "",
			success: function() {

			}
		});
		window.location.href = ""
	})
	//默认地址
$(".choose").on("click", function() {
	if($(this).hasClass("icon-yuanquan")) {

		$(".choose").removeClass("icon-duihao").addClass("icon-yuanquan");
		$(this).removeClass("icon-yuanquan ").addClass("icon-duihao");
		var name = $(this).parents(".listBox").find(".name").html();
		var address1 = $(this).parents(".listBox").find(".addres1").html();
		var address2 = $(this).parents(".listBox").find(".addres2").html();
		var phone = $(this).parents(".listBox").find(".phone").html();

		$.ajax({
			type: "get",
			data: {},
			url: "",
			success: function() {

			}
		});
	} else {
		$(this).removeClass("icon-duihao").addClass("icon-yuanquan")
	}
})