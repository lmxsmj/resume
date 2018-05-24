
$(document).ready(function(){

	 // 跨浏览器兼容
      var EventUtil={
         addHandler:function(element,type,handler){ //添加事件
            if(element.addEventListener){ 
               element.addEventListener(type,handler,false);  //使用DOM2级方法添加事件
            }else if(element.attachEvent){                    //使用IE方法添加事件
               element.attachEvent("on"+type,handler);
            }else{
               element["on"+type]=handler;          //使用DOM0级方法添加事件
            }
         },  

         getEvent:function(event){  //使用这个方法跨浏览器取得event对象
            return event?event:window.event;
         },

         getWheelDelta:function(event){ //获取表示鼠标滚轮滚动方向的数值
         if(event.wheelDelta){
            return event.wheelDelta;
         }else{
            return -event.detail*40;         //Firefox
         }
      }
   };

      var page=$('.page')
      var len=page.length;
      var num=0;
      var list=$('#page1 nav li');
      var pageH=page.height();
      var win=$(window);
      var sc=$(document);
      var a=$('#page1 a');


      $('.navtext').show();
      function handleMouseWheel(event){
         event=EventUtil.getEvent(event);
      var delta=EventUtil.getWheelDelta(event);  //重点语句，delta是表示鼠标滚轮滚动方向的数值
         if(delta<0){            //小于0向下翻页;4
            if(num<=len){
               $("html, body").animate({scrollTop:"+="+pageH},300);
               num++;
             }else{return false};
         }else if(delta>0){
				if(num>=0){          //大于0向上翻页;
                   $("html, body").animate({scrollTop:"-="+pageH},300);
                   num--;
                }else{return false};
         };
        
      };
        
		EventUtil.addHandler(document,"mousewheel",handleMouseWheel);      //非Firefox
        EventUtil.addHandler(document,"DOMMouseScroll",handleMouseWheel);   

       win.scroll(function() {
        	page.each(function(p){
        		if(sc.scrollTop()>=$(this).offset().top){
        		var p=$(this).index();
        			list.eq(p).find('a span').addClass('liSelected').end().
        			siblings('li').find('a span').removeClass('liSelected');

        			if(list.eq(p).find('a span').hasClass('liSelected')){
        				list.eq(p).find('span:first').show().end().
        				siblings('li').find('span:first').hide();
        			}
        		}

        	});
      });


       a.each(function(e){
       		 $(this).click(function(e){
       		$("html, body").animate({scrollTop:$($(this).attr('href')).offset().top}, 300);
       		return false;
       });
   });
      

	//page3
	var page3=$('#page3');
	var skill=page3.find('.skill');

	skill.each(function(ee) {
		var th=$(this);
		var left_c=th.find('.left-c');
		var right_c=th.find('.right-c');
		var percentNum=th.find('.mask span').text()*3.6;
		var deg=percentNum-180;
			
		$(this).mouseenter(function(ee){
			left_c.css({
				transform:'rotate('+(0)+'deg)',
				transition:'all ' +'0s '+'linear'
			});

			right_c.css({
				transform:'rotate(0deg)',
				transition:'all ' +'0s '+'0s '+'linear'
			});
			
			var timer=setTimeout(function(){
				mhover(ee);
			},100);	
		});

	function mhover(ee){
		right_c.css({
			transform:'rotate(180deg)',
			transition:'all ' +'1s '+'linear'

		});

		left_c.css({
			transform:'rotate('+deg+'deg)',
			transition:'all ' +'1s '+'1s '+'linear'

		});

	};	
		mhover(ee);
});

	// page4
	var exp=$('#experience');
	var myExp=$('#my-experience');
	var expUl=myExp.find('ul');
	var expLi=myExp.find('ul li');
	var navLi=exp.find('.content nav li');
	var navLiSpan=navLi.find('span');
	var w=myExp.width();

	navLiSpan.each(function(i) {
		$(this).click(function(){
			expLi.eq(i).addClass('lirotated').siblings('li').removeClass('lirotated');
			expUl.animate({left:i*(-w)}, 400);
			$(this).addClass('liSelected').parent('li').siblings('li').find('span').removeClass('liSelected');
		});
	});

		$(window).resize(function(){ 
			rw=$(window).width();
			w=0.75*rw;
			myExp.width(0.75*rw);
			expLi.width(0.75*rw);
	
		});


});