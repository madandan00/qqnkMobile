//编辑切换
$(".stateChange").on("click", function() {
		if($(this).html() == "编辑") {
			$(this).html("完成");
			$(".item").show();
			$(".tj").show();
		} else {
			$(this).html("编辑");
			$(".item").hide();
			$(".tj").hide();
		}
})
//选择被删除的项目
$(".item i").on("click", function() {
	var sum = 0;
	if($(this).hasClass("icon-yuanquan")) {

		$(this).removeClass("icon-yuanquan").addClass("icon-duihao");

	} else {
		$(this).removeClass("icon-duihao").addClass("icon-yuanquan");

	}
	$(".item i").each(function(index, ele) {
		if($(this).hasClass("icon-duihao")) {
			sum++;
		}
	})
	$(".tj").html("");
	$(".tj").html("删除（" + sum + "）")

})
//提交删除的项目
$(".tj").on("click",function(){
	$.ajax({
		type:"get",
		url:"",
		async:true
	});

})
