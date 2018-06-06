window.onload=function(){
	var pic=document.getElementById("pic");
	var oul=pic.getElementsByTagName("ul")[0];
	var oli=oul.getElementsByTagName("li");
	var pre=pic.getElementsByClassName("prev")[0];
	var next=pic.getElementsByClassName("next")[0];
	var tagbtn=pic.getElementsByClassName("tagbtn");
	var timer=null;
	var pWidth=pic.offsetWidth;
	var num=0;
	var target=null;
	for(var i=0;i<tagbtn.length;i++){
		tagbtn[i].index=i;
		tagbtn[i].onclick=function(){
			target=this.index*pWidth;
			doMove(oul,-target,"left",50);
			for(var j=0;j<tagbtn.length;j++){
				tagbtn[j].classList.remove('active');
			};
			this.classList.add('active');
		};
		next.onclick=function(){
			num++;
			if(num>=oli.length-1){
				num=oli.length-1;
			}
			target=num*pWidth;
			doMove(oul,-target,"left",50);
			for(var j=0;j<tagbtn.length;j++){
				tagbtn[j].classList.remove('active');
			};
			tagbtn[num].classList.add("active")
			
		};
		pre.onclick=function(){
			num--;
			if(num<=0){
				num=0;
			}
			 target=num*pWidth;
			doMove(oul,-target,"left",100);
			for(var j=0;j<tagbtn.length;j++){
				tagbtn[j].classList.remove('active');
			};
			tagbtn[num].classList.add("active")	
		};
	}
	

function getStyle(obj,attr){
	return obj.currentStyle? obj.currentStyle[attr] : getComputedStyle(obj)[attr];	
};

function doMove(obj,target,attr,dir,callback){
	dir=parseInt(getStyle(obj,attr))<target? dir : -dir;
	clearInterval(timer);				
	timer=setInterval(function(){
		var speed=parseInt(getStyle(obj,attr))+dir;
		if(speed>target&&dir>0||speed<target&&dir<0){
			speed=target;
		}

		obj.style[attr]=speed +"px";
		if(speed==target){
			clearInterval(timer);
			callback&&callback();
		}
	},50)

};

};
