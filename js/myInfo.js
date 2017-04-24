//修改生日
$(".birthday").on("click",function(){
	$("#calendar").show();
})
$(".calendar2").on("change",function(){
	$(".calendar1").val($(".calendar2").val())
})
$(".sure").on("click",function(){
	var time=$(".calendar1").val();
	$.ajax({
		type:"get",
		data:{"time":time},
		url:"",
		async:true,
		success:function(){
			
		}
	});
	
	
	$("#calendar").hide();
})
$(".cancel").on("click",function(){
	$("#calendar").hide();
})
