
function $(v){
	if(typeof v==="function"){
		window.onload=v;
	}else if(typeof v==="string"){
		return document.getElementById(v);
	}else if(typeof v ==="object"){ 
		return v;
	}
};

function getStyle(obj,attr){
	return obj.currentStyle? obj.currentStyle[attr] : getComputedStyle(obj)[attr];	//为了兼容ie8以下和其他浏览器
};

function doMove(obj,target,attr,dir,callback){
	dir=parseInt(getStyle(obj,attr))<target? dir : -dir;	//若当前位置小于目标位置，说明向前移动，dir为正；否则为负
	clearInterval(obj.timer);				//自定义一个属性timer；不用再外面声明了
	obj.timer=setInterval(function(){
		var speed=parseInt(getStyle(obj,attr))+dir;
		if(speed>target&&dir>0||speed<target&&dir<0){
			speed=target;
		}

		obj.style[attr]=speed +"px";
		if(speed==target){
			clearInterval(obj.timer);
			callback&&callback();		//相当于if(callback){callback()};
		}
	},50)

};