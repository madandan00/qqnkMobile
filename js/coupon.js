$(".btn").on("click",function(){
	//alert($(this).attr("data-slide"))
	$(".btn").removeClass("active");
	$(this).addClass("active");
	mySwiper.slideTo($(this).attr("data-slide"))
})
//
$(".CouponDetail").on("click",function(){
	$(".mark").show()
})
$(".ok").on("click",function(){
	$(".mark").hide()
})
