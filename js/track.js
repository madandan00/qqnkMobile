$(".clear").on("click",function(){
	$.ajax({
		type:"get",
		url:"",
		async:true
	});
	$(".content").html("");
})
