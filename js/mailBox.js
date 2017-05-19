function isEmail(str){
       var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
       return reg.test(str);
}
$("#mailBox").bind("keyup input propertychange", function() {
	//setTimeout(function() {
		
		var val=$(this).val();
		
		if(isEmail(val)){
			console.log(val)
			$(".next").addClass("nextActive")
		}else{
			$(".next").removeClass("nextActive")
		}
	//}, 300);

})
$(".next").on("click",function(){
	if($(this).hasClass("nextActive")){
		$.ajax({
			type:"get",
			url:"",
			async:true
		});
		
		console.log($("#mialBox").val())
		$("#mail").html($("#mailBox").val())
		$(".contentBox").hide();
		$(".content").show();
	}
})
$(".checkMail").on("click",function(){
	
})
