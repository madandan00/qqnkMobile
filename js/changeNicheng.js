$(".tj").on("tap",function(){
	var val=$("#nc").val();
	
	$.ajax({
		type:"get",
		url:"",
		data:{"nc":val},
		async:true,
		success:function(){
			
		}
	});
})
