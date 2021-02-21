(function($) {
    $(document).ready(function(){
        // Add a click handler to just these buttons
        $('button.test1').on('click', clickHandler);
        // Define the clickHandler function, as before
        function clickHandler(event) {
        	var items = $('div.wp-block-stingless-custom-slider-slide.slide-image');
			var currentItem = items.filter('.active');
        	var prevItem = currentItem.prev().filter('.slide-image');
    		currentItem.removeClass('active');

    		var dots = $('a.slider__indicator');
			var currentDot = dots.filter('.clicked');
        	var prevDot = currentDot.prev();
    		currentDot.removeClass('clicked');

        	if(prevItem.length)
        	{
        		currentItem = prevItem.addClass('active');
        		currentDot = prevDot.addClass('clicked');
        	}
        	else
        	{
        		currentItem = items.last().addClass('active');
        		currentDot = dots.last().addClass('clicked');
        	}
        }
    });
})(jQuery);
(function($) {
    $(document).ready(function(){
        // Add a click handler to just these buttons
        $('button.test2').on('click', clickHandler);
        // Define the clickHandler function, as before
        function clickHandler(event) {
        	var items = $('div.wp-block-stingless-custom-slider-slide.slide-image');
			var currentItem = items.filter('.active');
        	var nextItem = currentItem.next().filter('.slide-image');
    		currentItem.removeClass('active');

    		var dots = $('a.slider__indicator');
			var currentDot = dots.filter('.clicked');
        	var nextDot = currentDot.next();
    		currentDot.removeClass('clicked');

        	if(nextItem.length)
        	{
        		currentItem = nextItem.addClass('active');
        		currentDot = nextDot.addClass('clicked');
        	}
        	else
        	{
        		currentItem = items.first().addClass('active');
        		currentDot = dots.first().addClass('clicked');
        	}

        }

    });
})(jQuery);
(function($) {
    $(document).ready(function(){
        // Add a click handler to just these buttons
        $('a.slider__indicator').on('click', clickHandler);
        // Define the clickHandler function, as before
        function clickHandler(event) {
        	var position = event.currentTarget.id;
        	$('a.slider__indicator.clicked').removeClass('clicked');
        	$('a.slider__indicator').eq(position).addClass('clicked');
        	$('div.slide-image.active').removeClass('active');
        	$('div.slide-image').eq(position).addClass('active');
            
        }

    });
})(jQuery);
(function($) {
    $(document).ready(function(){
    	function test() {
        	var items = $('div.wp-block-stingless-custom-slider-slide.slide-image');
			var currentItem = items.filter('.active');
        	var nextItem = currentItem.next().filter('.slide-image');
    		currentItem.removeClass('active');

    		var dots = $('a.slider__indicator');
			var currentDot = dots.filter('.clicked');
        	var nextDot = currentDot.next();
    		currentDot.removeClass('clicked');

        	if(nextItem.length)
        	{
        		currentItem = nextItem.addClass('active');
        		currentDot = nextDot.addClass('clicked');
        	}
        	else
        	{
        		currentItem = items.first().addClass('active');
        		currentDot = dots.first().addClass('clicked');
        	}
    	}
    	if($( 'div.wp-block-stingless-custom-slider' ).hasClass( "autoplay" ))
		{
			var autoplay = setInterval(test, 5000);
		}
	});	    
})(jQuery);