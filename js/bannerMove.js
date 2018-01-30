window.onload=function(){
//	move();
	function move(){
	//获取li的宽度，设置ul宽度
	var li=document.querySelector(".firest");       
	var liw=li.offsetWidth;
	var ul=document.querySelector(".ul1");
	var count=0;
	setInterval(function(){ 
		console.log(oli[count].style.height);
		ul.style.transition="all 0.3s";
		count++;
		if(count>=5)
		{
			ul.style.transition="none";
			count=0;
			ul.style.marginLeft=0+"px"
		}
		ul.style.marginLeft=-count*liw+"px";
	},2000)
	}
}
