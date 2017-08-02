//编辑切换
$(".stateChange").on("click", function() {
		if($(this).html() == "编辑") {
			$(this).html("完成");
			$(".item").show();
			$(".tj").show();
		} else {
			$(this).html("编辑");
			$(".item").hide();
			$(".tj").hide();
		}
	})
	//选择被删除的项目
$(".item i").on("click", function() {
		var sum = 0;
		if($(this).hasClass("icon-yuanquan")) {

			$(this).removeClass("icon-yuanquan").addClass("icon-duihao");

		} else {
			$(this).removeClass("icon-duihao").addClass("icon-yuanquan");

		}
		$(".item i").each(function(index, ele) {
			if($(this).hasClass("icon-duihao")) {
				sum++;
			}
		})
		$(".tj").html("");
		$(".tj").html("删除（" + sum + "）")

	})
	//提交删除的项目
$(".tj").on("click", function() {
	$.ajax({
		type: "get",
		url: "",
		async: true
	});

})
$("#select .se_foot ul .addcart").on("click", function() {

	if(confirm("亲，确认加入购物车吗")) {

		//console.log(getGoodId(this))	
		var goods = $("#select").attr("goodsId") //商品ID
		var sum = Number($("#num").val()) //数量
		var nor = $("#select .se_nor ul .active").html() //规格
		var isSave = checkHasGoodsById(goods);
		//console.log(isSave)
		if(isSave) {
			updateGoodsById(goods, sum);
			console.log($.cookie("goodsList"))
				//			$(".num").html(getTotalCount())
				//			console.log(getTotalCount())
		} else {
			var obj = {
				pid: goods,
				goodsId: goods,
				count: sum,
				nor: nor
			}
			addGoodsToCart(obj)
			console.log($.cookie("goodsList"))
				//			console.log(getTotalCount())
				//			$(".num").html(getTotalCount())

		}
		location.href = "http://127.0.0.1:8020/qqnkph/cart.html"
	} else {
		console.log("放弃")
	}

})
$(".cart").on("click", function() {
	var goods = $(this).attr("data-id");
	var sum = 1;
	var nor = $(this).attr("data-norms");
	var isSave = checkHasGoodsById(goods);
	//console.log(goods)
	if(isSave) {
		updateGoodsById(goods, sum);
		
	} else {
		if(goods != undefined) {
			var obj = {
				pid: goods,
				goodsId: goods,
				count: sum,
				nor: nor
			}
			addGoodsToCart(obj);
		}
		
	}
console.log($.fn.cookie("goodsList"))
$(".tt").html("加入购物车").show(500);
setTimeout(function(){
	$(".tt").hide();
},1000)
})