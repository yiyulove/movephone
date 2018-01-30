window.onload=function(){
	move();
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
	daojishi();
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
	huadongdf();
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
}
