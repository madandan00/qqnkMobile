/*
 	操作本地数据 cookie的相关操作
 */

/*
 	获取本地cookie的值，返回JSON对象
 */
function getGoosListObj(){
	/*
	 	cookie的名称：goodsList
	 	当加载这个页面的时候，若有cookie，直接使用本地对应cookie。
	 	若没有，则先创建一个对应cookie，然后再进行其他操作。
	 */
	var goodsListStr = $.cookie("goodsList");
	if(!goodsListStr){  //如果没有
		$.cookie("goodsList","[]");//设置路径{}
		goodsListStr = $.cookie("goodsList");
		
	}
	var goodsListObj = JSON.parse(goodsListStr);
	return goodsListObj;
}
/*
 	获取商品的总数量
 */
function  getTotalCount(){
	var goodsListObj = getGoosListObj();
	var sum = 0;
	for(var i = 0;i<goodsListObj.length;i++){
		sum = goodsListObj[i].count+sum;
	}
	return  sum;
}

/*
 	根据id查找本是否含有指定的商品
 	参数：id  商品的编号
 	返回值  有（true)  或  没有(false)  
 */
function checkHasGoodsById(id){
	var goodListObj = getGoosListObj();
	var flag = false;  //默认没有
	for(var i = 0;i<goodListObj.length;i++){
		if(goodListObj[i].goodsId==id){
			flag = true; 
			break;
		}
	}
	return flag;
}

/*
 	添加新的商品到购车中
 	参数：
 		goods 代表一种商品    Object
 */
function  addGoodsToCart(goods){
	var goodListObj = getGoosListObj();  //[]
	//[]
	goodListObj.push(goods)
	//[{}]
	var goodListStr = JSON.stringify(goodListObj);  //'[{}]'
	$.cookie("goodsList",goodListStr);
}

/*
 	根据商品编号（id)从本地中取出来，更改该商品的数量增加num
 	参数：
 		id：商品的编号
 		num:增加的数量      
 */
function updateGoodsById(id,num){   
	var goodsListObj = getGoosListObj();
	for(var i = 0;i<goodsListObj.length;i++){
		if(goodsListObj[i].goodsId==id){
			goodsListObj[i].count = goodsListObj[i].count + num;
			break;
		}
	}
	var goodsListStr = JSON.stringify(goodsListObj);
	$.cookie("goodsList",goodsListStr);//设置路径
}


/*
 	删除本地数据
 	[{pid:1001},{pid:1002},{pid1003}]
 	//pid  {}    索引 
 	splice(1,1)
 	数组对象.splice(从哪里开始删索引，删几个)
 	参数：id   商品的编号
 */

function  deleteGoodsById(id){
	var goodListObj =  getGoosListObj();  
	for(var i = 0;i<goodListObj.length;i++){
		if(goodListObj[i].pid==id){
			//  i
			goodListObj.splice(i,1);
			break;
		}
	}
	var goodListStr = JSON.stringify(goodListObj);
	$.cookie("goodsList",goodListStr);//设置路径
	
}
