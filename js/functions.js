	$function () {
	$('h2').hide().slideDown();
	var $li = $('li');
	$li.hide().each(function(index) 
	{
	$(this).delay(700 * index).fadeIn(700);
	}
	);
	};
	$li.on('click' , fuction()
	{
	$(this).fadeOut(700);
	}
	)
(function (document, window, undefined) {
  'use strict';
  
  // Find each tooltip
  var tooltip = $('.tooltip');

  tooltip.each(function() {
    // Create tooltip element
    var $this = $(this),
        tooltipText = $('<div class="tooltip-text">' + $this.data('tooltip-text') + '</div>');
      
    // Add tooltip to body on mouse over
    $this.on('mouseover', function() {
        tooltipText.appendTo('body');
    });
  
    // Remove tooltip on mouseout
    $this.on('mouseout', function() {
        tooltipText.remove();
    });
  
    // Attach the tooltip to the mouse cursor
    $this.on('mousemove', function(e) {
        tooltipText.css('top', (e.pageY + 20) + 'px');
        tooltipText.css('left', (e.pageX + 20) + 'px');
    });
  
  });
  
})(document, window);