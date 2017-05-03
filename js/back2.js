$(".back").on("click",function(){
	if($(".box2").css("display")=="none"){
		window.history.back();
	}else{
//		$(".box1").show();
//		$(".box2").hide();
		location.reload()
	}
})
