$(document).ready(function(){
	var demo=$('#demo');
	var ul=demo.find('ul');
	var li=ul.find('li');
	var bgc=["yellowgreen","pink","skyblue"];
	var str='';
	li.each(function(index, el) {
		this.style.backgroundColor=bgc[index%bgc.length];	//取模
		
		$(this).mouseover(function(){
			str=this.style.backgroundColor;
			this.style.backgroundColor="#ccc";
		});
			$(this).mouseout(function(){
			this.style.backgroundColor=str
		});
	});






});