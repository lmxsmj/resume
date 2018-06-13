
//oBox最外层box oWrap要切换的圆点父元素
	function Tag(oBox,oWrap){
		var oList = oBox.getElementsByTagName("ul")[0];
		var oLi = oList.getElementsByTagName("li");
		var oA = oWrap.getElementsByTagName("span");
		var n=oA.length;
		var disX=0;
		var w =oBox.offsetWidth;
		var listL=0;
		var num=0;
		oList.innerHTML+=oList.innerHTML;
		var len =oLi.length;
		oList.style.width=len*w +'px';

		oList.addEventListener('touchstart',start);
		oList.addEventListener('touchmove',move);
		oList.addEventListener('touchend',end);

		function start(ev){
			var ev=ev.changedTouches[0];
			disX=ev.pageX;
			oList.style.transition="none";

			num=Math.round(oList.offsetLeft/w);
			if(num==0){
				num=n;
				oList.style.left=-num*w+'px';
			}
			if(-num==len-1){
				num=n-1;
				oList.style.left=-num*w+'px';
			}

			listL=this.offsetLeft;

		}

		function move(ev){
			var ev=ev.changedTouches[0];
			oList.style.left=(ev.pageX-disX)+listL+'px';
			
		}
		function end(ev){
			num=Math.round(oList.offsetLeft/w);
			oList.style.transition="0.5s";
			oList.style.left=num*w+'px';
			for(var i=0;i<n;i++){
				oA[i].className='';
			}
			oA[-num%n].className="active";

		}
	}
}