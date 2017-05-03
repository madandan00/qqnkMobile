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
//编辑
$(".edit").on("click",function(){
	var name=$(this).parents(".listBox").find(".name").html();
	var address1=$(this).parents(".listBox").find(".addres1").html();
	var address2=$(this).parents(".listBox").find(".addres2").html();
	var phone=$(this).parents(".listBox").find(".phone").html();
	$("#name").val(name);
	$("#area").val(address1);
	$("#detail").val(address2);
	$("#phone").val(phone);
	$(".box1").hide();
	$(".box2").show();
	$(".save").show();
	$(".add").hide();
})
//删除1
$(".remove").on("click",function(){
	var name=$(this).parents(".listBox").find(".name").html();
	var address1=$(this).parents(".listBox").find(".addres1").html();
	var address2=$(this).parents(".listBox").find(".addres2").html();
	var phone=$(this).parents(".listBox").find(".phone").html();
	$(".mark").show();
	$(".hint").show();
})
$(".SureExit").on("click",function(){
	var name=$(this).parents(".listBox").find(".name").html();
	var address1=$(this).parents(".listBox").find(".addres1").html();
	var address2=$(this).parents(".listBox").find(".addres2").html();
	var phone=$(this).parents(".listBox").find(".phone").html();
	$.ajax({
		type:"get",
		data:{},
		url:"",
		success:function(){
			
		}
	});
	window.location.reload();
})
$(".cancelExit").on("click",function(){
	$(".mark").hide();
	$(".hint").hide();
})
//删除2
$(".cancelAddress").on("click",function(){
	var name=$("#name").val();
	var address1=$("#area").val();
	var address2=$("#detail").val();
	var phone=$("#phone").val();
	$.ajax({
		type:"get",
		data:{},
		url:"",
		success:function(){
			
		}
	});
	window.location.reload();
})
//保存
$(".save").on("click",function(){
	var name=$("#name").val();
	var address1=$("#area").val();
	var address2=$("#detail").val();
	var phone=$("#phone").val();
	$.ajax({
		type:"get",
		data:{},
		url:"",
		success:function(){
			
		}
	});
	window.location.reload();
})
