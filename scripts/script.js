$(document).ready(function(){
	var elementPosition = $('#toc').offset();
	var heading1Position = $('#s1').offset();
	var heading2Position = $('#s2').offset();
	var heading3Position = $('#s3').offset();
	
	$(window).scroll(function(){
    	if($(window).scrollTop() > elementPosition.top){
    		$('#toc').css('position','fixed').css('top','0px');
		} else {
			$('#toc').css('position','static');
		}    
	});
	$(window).scroll(function(){
    	if($(window).scrollTop() + 30 < heading1Position.top){
    		$('#s1l').stop().animate({'color':'#222'}, 200);
			$('#s2l').stop().animate({'color':'#222'}, 200);
			$('#s3l').stop().animate({'color':'#222'}, 200);
		}    
	});
	$(window).scroll(function(){
    	if($(window).scrollTop() + 30 > heading1Position.top && $(window).scrollTop() + 30 < heading2Position.top){
    		$('#s1l').stop().animate({'color':'#3cf'}, 200);
			$('#s2l').stop().animate({'color':'#222'}, 200);
			$('#s3l').stop().animate({'color':'#222'}, 200);
		} else {
			$('#s1l').stop().animate({'color':'#222'}, 200);
		}
	});
	
	$(window).scroll(function(){
    	if($(window).scrollTop() + 30 > heading2Position.top && $(window).scrollTop() + 30 < heading3Position.top){
    		$('#s1l').stop().animate({'color':'#222'}, 200);
			$('#s2l').stop().animate({'color':'#3cf'}, 200);
			$('#s3l').stop().animate({'color':'#222'}, 200);
		} else {
			$('#s2l').stop().animate({'color':'#222'}, 200);
		}
	});
	
	$(window).scroll(function(){
    	if($(window).scrollTop() + 30 > heading3Position.top){
    		$('#s1l').stop().animate({'color':'#222'}, 200);
			$('#s2l').stop().animate({'color':'#222'}, 200);
			$('#s3l').stop().animate({'color':'#3cf'}, 200);
		} else {
			$('#s3l').stop().animate({'color':'#222'}, 200);
		} 
	});
});