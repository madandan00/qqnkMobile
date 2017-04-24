$(".tj").on("tap",function(){
	var val=$("#xm").val();
	
	$.ajax({
		type:"get",
		url:"",
		data:{"xm":val},
		async:true,
		success:function(){
			
		}
	});
})
