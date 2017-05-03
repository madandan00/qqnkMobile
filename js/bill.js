$(".btn").on("click",function(){
	//alert($(this).attr("data-slide"))
	$(".btn").removeClass("border1");
	$(this).addClass("border1");
	mySwiper.slideTo($(this).attr("data-slide"))
})
