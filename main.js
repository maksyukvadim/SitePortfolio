

$(document).ready(function () {
    $(".top-menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $('#icoUp').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500);
        return false;
    });

    $('ul.menu-portfolio li').click(function () {
        

        setTimeout((function () {
            $('#recommendation').css({ 'margin-top': '10%' });
        }), 400);

        $('#activeBlock').animate(function () {
            offset({ top: 20, left: 100 });
        });

        moveTo($('#activeBlock'), $(this));
    });

    var blockTargetLeft = $('#activeBlock').offset().left;

    function moveTo(element, target) {
        var targetOffsetLeft = target.offset().left;
        var position = 0;
        var drag = 0;
        var targetFix = blockTargetLeft;
        if (targetOffsetLeft > blockTargetLeft) {
            var position = targetOffsetLeft - targetFix;
        } else {
            var position = targetFix - targetOffsetLeft;

        }
        element.animate({
            left: position,
        }, 200);

    }

    $('#bs-example-navbar-collapse-1 a' ).click(function(){
            $('#btnMenu').trigger('click'); 
    });

    $('#carousel-example-generic').carousel({interval: 5000});



    $(function () {
		
		var filterList = {
		
			init: function () {
			
				$('#portfoliolist').mixItUp({
  				selectors: {
    			  target: '.item-image',
    			  filter: '.filter'	
    		  },
    		  load: {
      		  filter: '.web'  
      		}     
				});								
			
			}

		};
		
		// Run the show!
		filterList.init();
		
		
	});	
});









