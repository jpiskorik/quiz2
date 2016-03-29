var $Array;

$(document).ready(function(){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.
	
	//not sure how to implement the cookie but below is my best guess

	
	var mouseover = $('.mouse-over');
	var click     = $('.click');
	var sub       = $('.submit');
	var clicking = $('.title');
	var keepit  = $('.keepit');
	var buttonexists=0;

		
	mouseover.on('mouseover', function() {
		
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	click.click('click', function() {
		$(this).html('Peace Out!')
		$(this).fadeOut(1500);
		return false;
	});

	$("form").submit(function(e) {
		e.preventDefault();
		if ($('#form').val() !== '') {
			$('input').each(function() {
				$(this).fadeOut('slow');
			});
			$(this).append('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	});

	$(document).on('ready', function() 
	{
		setTimeout(function(){
			$("timeout").fadeIn('slow');},1000);
	});
	
	clicking.click('gettitle', function()
	{
		
		$.ajax({
  		method: "GET",
  		url: "http://www.mattbowytz.com/simple_api.json",
  		dataType:"json",
 		data: {data:"quizData"},
 		success: function(data)
 		{
 			$Array=data.data;
 			for(var i =0; i<$Array.length; i++)
 			{
 				$('.data-list').append("<li>"+$Array[i]+"</li>");
 			}	
 			
 			$('.dataItems').show();
 		}
 		});
 		console.log($('.button').length)
 		if(buttonexists==0)
 		{
			var r= $('<input type="button" onClick=setCookie() value="keep it"/>');
        	$("body").append(r);
        	buttonexists=1;
        }
        
        $("#gettitle").val('Change it');	
	});
		var newitem= getCookie();
		$('.data-list').append("<li>" + newitem+ "</li>");
	

});

function setCookie()
{
	document.cookie= $Array + "; " + "10000000";
}

function getCookie() 
{
    var cookie = document.cookie.split(';')[0];
      if (cookie.length > 0)
      {
		   return cookie;
	  }
    return "";
}