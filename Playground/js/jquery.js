$(document).ready(function(){
	$('#hw').click(function(){
		$('#fadeInHelloWorld').fadeIn(2000);
	});
	$('#moveLeft').click(function(){
		$('#image').animate({'marginLeft':"-=30px"});
    });
    $('#moveRight').click(function(){
    	$('#image').animate({'marginLeft':"+=30px"});
    });
    $('#moveDown').click(function(){
    	$('#image').animate({'marginTop':"+=30px"});
    });
    $('#moveUp').click(function(){
        $('#image').animate({'marginTop':"-=30px"});
	});
});