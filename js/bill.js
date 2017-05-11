$(".btn").on("click",function(){
	//alert($(this).attr("data-slide"))
	$(".btn").removeClass("border1 active");
	$(this).addClass("border1 active");
	mySwiper.slideTo($(this).attr("data-slide"))
})
