

// 整个页面加载完成之后
window.onload = function() {

	// 拖拽移动banner图
	bannerTouch()
	

	// 轮播图
	// bannerMove()
}

// 拖拽移动轮播图
function bannerTouch() {
	
	// 思路：
	//   1. 保存开始的点坐标 x
	//   2. 通过获取移动的坐标x，和开始坐标进行比较
	
	
	// 找到banner元素
	var oBanner = document.querySelector(".banner")
	
	// 找到 ul 元素
	var oUl = oBanner.querySelector(".pic")
	
	var touchStartX = 0;	// 触摸开始的点
	var startX = 0;			// 开始点的x坐标
	var currentX = 0;		// 获取轮播图当前X值
	
	// 1. 给banner添加触摸事件
	oBanner.addEventListener("touchstart", function(e) {
		
		currentX = oUl.offsetLeft;		// 在触摸开始时保存ul的起始位置
		
		// 得到ul的偏移值
		var offsetX = oUl.offsetLeft;
		
		
		touchStartX = e.touches[0].clientX; 	// 触摸开始的内容
		
		startX = e.touches[0].clientX;	// 起始点x坐标值
		startX -= offsetX;				// 加上初始ul的偏移值
		
		 console.log("触摸开始", startX)
	})
	
	var endX = 0;				// 定义全局变量保存触摸点的x值
	
	oBanner.addEventListener("touchmove", function(e) {
		endX = e.touches[0].clientX;  	// 移动的x坐标值
		
		var detaX = endX - startX; 		// 与起始点的x差值
		
//		 console.log("触摸移动", startX, endX, detaX)
		
		// 通过差值，修改 ul 的位置
		oUl.style.marginLeft = detaX+"px"
		
	})
	
	// 【存在问题】 如果只触摸一下，那么并没有移动。
	// 思路：
	//   1. 找到松手的位置 endX
	//   2. 与 touchStartX 之间进行比较
	//             决定是往左边还是往右滑
	//   3. 设置轮播图 移动对应 一张图片的 距离
	oBanner.addEventListener("touchend", function(e) {

		var oLi = oUl.querySelector("li");  	// 得到li
	
//		console.log("touchStartX: " + touchStartX, "endX: " + endX)
		if (touchStartX > endX) {  	// 往左滑
			// 当前x  减去  1张图片的宽度
			var x = currentX - oLi.offsetWidth
			
		} else {				// 往右滑
			var x = currentX + oLi.offsetWidth
		}
		
		console.log("end:", x)
		
		// 更新ul的left值
		oUl.style.marginLeft = x + "px"
	})
	
	
}







// 轮播图效果
function bannerMove() {

	// 1. 找到元素
	var oBanner = d