

$(document).ready(function () {
        var heig = $(window).height();
        var widthNew = $(window).width();

        if(widthNew > 768) {
        $(window).resize(function(){
            positionElementFirstWindow ();    
            });
        }
   $('.background').css({"height":heig});
        
    function positionElementFirstWindow () {
            var heig = $(window).height();
            var width = $(window).width();
            $('#Introducing').css({"marginTop":heig});
            $('#header').css({"height":heig});
            $('.maint-text-block').css({"marginTop":(heig/10) });
            $('.caption-text-bclok').css({"marginTop":(heig/50) });
            $('.blockBtn').css({"marginTop":(heig/5) });
            $('#header .row:first-child').css({"marginTop":(heig/20)});
            $('.maint-text-head').css({"fontSize":((heig/30+width/45)) });
            $('.caption-text').css({"fontSize":(heig/50)});

    }

    positionElementFirstWindow ();
  
    
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
        

        $('#activeBlock').animate(function () {
            offset({ top: 20, left: 100 });
        });

        
    });

    
    if(widthNew < 768) {

        $('#bs-example-navbar-collapse-1 a' ).click(function(){
            $('#btnMenu').trigger('click'); 
    });
    }
    
    $(".navbar").click(function(){   
  $(".top-menu").toggle();
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









