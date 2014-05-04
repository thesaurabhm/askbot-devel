/* Author:

*/
jQuery.fn.outer = function() {
    return $($('<div></div>').html(this.clone())).html();
}

$(document).ready(function() {

	$('#divider, #question-mark').css({ height: $('#inner-box').height() });

	var $container = $('#container'),
	    containerHeight = $container.outerHeight();
	    
	$(window).resize(function() {
	
		var windowHeight = $(this).height();
	
		if(containerHeight < windowHeight) {
			
			$container.css({ marginTop: ((windowHeight - containerHeight) / 2) });
			
		}
	
	}).trigger('resize');
	    
	
	if(!Modernizr.borderradius || !Modernizr.cssgradients || !Modernizr.boxshadow || !Modernizr.textshadow) {
	
		var $box = $('#box'),
		    content = $box.find('#inner-box').html();
		
		var fallback  = '<div id="box-header">';
		    fallback +=     '<div id="box-header-left"></div>';
		    fallback +=     '<div id="box-header-right"></div>';
		    fallback +=     '<div id="box-header-center"></div>';
		    fallback += '</div>';
		    fallback += '<div id="box-content">';
		    fallback +=     '<div id="box-content-left">';
		    fallback +=     '<div id="box-content-right">';
		    fallback +=         '<div id="box-content-center" class="clearfix">' + content + '</div>';
		    fallback +=     '</div>';
		    fallback +=     '</div>';
		    fallback += '</div>';
		    fallback += '<div id="box-footer">';
		    fallback +=     '<div id="box-footer-left"></div>';
		    fallback +=     '<div id="box-footer-right"></div>';
		    fallback +=     '<div id="box-footer-center"></div>';
		    fallback += '</div>';
		
		$fallback = $(fallback);
		 
		$fallback.find('input[type=submit]').each(function() {
		
			var $item = $(this);
			
			$item.after('<div class="button"><div>' + $item.val() + '</div></div>').remove();
		
		});
		
		$fallback.find('input[type=text]').each(function() {
		
			var $item = $(this);
			
			$item.after('<div class="input"><div class="input-left"></div><div class="input-right"></div><div class="input-center">' + $item.outer() + '</div></div>').remove();
		
		});
		
		$('#box').attr('style', 'border:none;background-color:transparent;-webkit-border-radius:0px;border-radius:0px;-webkit-box-shadow:none;box-shadow:none;padding:0px;margin-bottom:0px;').html($fallback);
	
	}
	
	if(Modernizr.csstransforms) {

		$('#icon').css({ opacity: 0, scale: 0.01, rotate: '-30deg' });
		
		$('h1.title').css({ opacity: 0, x: 200 });
		$('h3.description').css({ opacity: 0, x: 200 });
		
		$('#box').css({ opacity: 0, scale: 0.01 });
		
		$('nav').css({ opacity: 0, y: -30 });
		
		$('#container').css({ visibility: 'visible' });
		
		setTimeout(function() {
		
			$('#icon').transition({ scale: 1, opacity: 1, rotate: '0deg' }, 600, 'snap');
			
			$('h1.title').transition({ opacity: 1, x: 0 }, 600, 'snap');
			
			setTimeout(function() {
			
				$('h3.description').transition({ opacity: 1, x: 0 }, 600, 'snap');
				
				setTimeout(function() {
				
					$('#box').transition({ scale: 1, opacity: 1 }, 600, 'snap', function() {
					
						$('nav').transition({ opacity: 1, y: 0 }, 200, 'snap');
					
					});
				
				}, 100);
				
			}, 100);
		
		}, 500);
	
	}
	
	$('#container').css({ visibility: 'visible' });
	
	$('#switch').find('select').change(function() {
	
		$('#icon').attr('class', $(this).val());
	
	});
		
});