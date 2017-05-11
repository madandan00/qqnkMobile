$(".btn").on("click",function(){
	//alert($(this).attr("data-slide"))
	$(".btn").removeClass("border1 active");
	$(this).addClass("border1 active");
	var slide=$(this).attr("data-slide")
	$.ajax({
		type:"get",
		url:"",
		data:"",
		success:function(){
			
		}
	});
	
})
