(function($){
	// Make all divs same height
	var windowHalf = $(window).height() / 2;
	//hels us find the height of the window
	//console.log(windowHalf); helps us see the height..always remove this from your code
	$('.grid-item'). height(windowHalf);
	// And position the h2's in the middle
	//set window height

	// make div height half of window height
	// get half height of h2
	// get half hight of div
	// set the h2 top margin to half the div height
	// less half the h2 height
	var h2Half = $('.grid-item h2').height() / 2;
	var gridHalf = windowHalf / 2 -h2Half;
	$('.grid-item h2').css('margin-top', gridHalf);

	

	// close section on clicking close by removing class
    	$('.close').on('click', function(){
    		$(this).parent().removeClass('active').addClass('inactive');
    		$(window).scrollTop(0);
    		$('body').css('overlow', 'hidden');
    		$('.grid-portfolio').css('margin-top', 0);
    		$('header').removeClass('active');
    	})

	// add class to section on click 
	$('.grid-item').on('click', function(){
		var gridItem = '.' + $(this).attr('id');
		if ($(this).attr('id') == 'grid-portfolio'){
            $( gridItem ).css('margin-top', -400);
            $('body').css('overflow', 'visible');
            $('header').addClass('active');
		} else {
		  $( gridItem ).removeClass('inactive').addClass('active');
		  
		}
	})


	//add easter egg if page name clicked
	$('#grid-home').on('click', function(){
		$('#grid-home h2').append("  <div class='easter-egg'><p>giggle, giggle</p></div>  ");
        setTimeout(function(){
        	$(".easter-egg").fadeOut('slow');
        	// slow can also be replace a number without the ''
        }, 500);
	})
	
		// transition it out after 1 second
		
		// remove it from code after 3 seconds
		

	//show header when portfolio hits top of window

		//set where the top of the page is
	    
	    	// get distance of .portfolio-top from top of page


})(jQuery);