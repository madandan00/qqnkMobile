$(function(){
	
})
$(".btn").on("click",function(){
	$(".btn").removeClass("btnActive");
	$(this).addClass("btnActive");
	//mySwiper.slideTo($(this).attr("data-slide"))
	var val=$(this).attr("data-slide");
	$.ajax({
		type:"get",
		data:"",
		url:"",
		success:function(){
			
		}
	});
})
//立即支付
$(".pay").on("click",function(){
	
})
//订单详情
$(".orderDetail").on("click",function(){
	
})
//提醒发货
$(".quik").on("click",function(){
	
})
//物流信息
$(".logistics").on("click",function(){
	
})
//确认收货
$(".receipt").on("click",function(){
	
})
//评价
$(".evaluate").on("click",function(){
	
})
//删除订单
$(".delOrder").on("click",function(){
	
})