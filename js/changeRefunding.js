$(".btn").on("click",function(){
	//alert($(this).attr("data-slide"))
	$(".btn").removeClass("border1");
	$(this).addClass("border1");
	var slide=$(this).attr("data-slide")
	$.ajax({
		type:"get",
		url:"",
		data:"",
		success:function(){
			
		}
	});
	
})
