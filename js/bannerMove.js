window.onload=function(){
	move();
	daojishi();
	huadongdf();
	bannerTouch();
}
	function move(){
	//获取li的宽度，设置ul宽度
	var li=document.querySelector(".firest");       
	var liw=li.offsetWidth;
	var ul=document.querySelector(".ul1");
	var count=0;
	setInterval(function(){ 
		ul.style.transition="all 0.3s";
		count++;
		if(count>4)
		{
			ul.style.transition="none";
			count=0;
			ul.style.marginLeft=0+"px"
		}
		ul.style.marginLeft=-count*liw+"px";
	},2000)
	}
	
	//倒计时
	function daojishi(){
        var li=document.querySelectorAll(".li");
		var shi=3;
		var fen=0;
		var miao=0;
		var li6=0;
		var li4=0;
		setInterval(function(){
			miao--;
			if(miao==-1)
			{
				miao=59;
				li[7].innerHTML=miao%10;
				li[6].innerHTML=parseInt(miao/10);
				fen--;
			}
			else{
				li[7].innerHTML=miao%10;
				li[6].innerHTML=parseInt(miao/10);
			}
			
			if(fen==-1)
			{
				fen=59;
				li[3].innerHTML=parseInt(fen/10);
				li[4].innerHTML=fen%10;
				shi--;
			}
			else{
				li[3].innerHTML=parseInt(fen/10);
				li[4].innerHTML=fen%10;
			}
				if(shi==-1)
			{
				shi=59;
				li[0].innerHTML=parseInt(shi/10);
				li[1].innerHTML=shi%10;
			}
			else{
				li[0].innerHTML=parseInt(shi/10);
				li[1].innerHTML=shi%10;
			}
		},1000)
	}
	
	function huadongdf(){
		var banner=document.querySelector(".lunbotu");
		var baw=banner.offsetHeight;
		var a=document.querySelector("header");
		var ah=a.offsetHeight;
		var result=baw-ah;
		window.onscroll = function() {
	
	var iTop = document.body.scrollTop || document.documentElement.scrollTop;
	
	if (iTop > result) {
		banner.style.position = "fixed"
		banner.style.top = 0
		banner.style.left = 0
	} else {
		banner.style.position = "static"
	}
}
	}
	
	// 拖拽移动轮播图
function bannerTouch() {
	
	// 思路：
	//   1. 保存开始的点坐标 x
	//   2. 通过获取移动的坐标x，和开始坐标进行比较
	
	
	// 找到banner元素
	var oBanner = document.querySelector(".lunbotu")
	 
	// 找到 ul 元素
	var oUl = oBanner.querySelector(".ul1") 
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
	console.log(oUl)
//		console.log("touchStartX: " + touchStartX, "endX: " + endX)
		if (touchStartX > endX) {  	// 往左滑
			// 当前x  减去  1张图片的宽度
			
			var x = currentX - oLi.offsetWidth
			
		} else {				// 往右滑
			console.log("jinlaile")
			var x = currentX + oLi.offsetWidth
		}
		
		console.log("end:", x)
		
		// 更新ul的left值
		oUl.style.marginLeft = x + "px"
	})
	
	
}

	

	function chumo(){
	var startX;
	var X;
	var startX;
	var banners=document.querySelector(".lunbotu")
	var bann=document.querySelector(".ul1");
	//移动banner
		banners.addEventListener("touchstart",function(e){
				startx=e.touches[0].clientX;
				startx=startx
				console.log(bann.offsetLeft)
				
		})
		banners.addEventListener("touchmove",function(e){
				x=e.touches[0].clientX;
				x=x-parseFloat(bann.offsetLeft);
				var result=x-startx;
			    
			    
			    
			    bann.style.transition="none";
					
				bann.style.marginLeft=parseFloat(bann.style.marginLeft)+result+"px";
		})
		banners.addEventListener("touchend",function(e){
		//		endx=e.touches[0].clientX;
				bann.style.transition="all 0.3s";
		})
			//触摸结束后进行对banner图片的移动
			//按照值得正负形进行可对banner移动方向判定
		
	}

