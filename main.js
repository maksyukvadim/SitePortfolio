

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
        var thisClass = this.className.slice(0, 2);
        $('#recommendation').css({ 'margin-top': '60%' });
        $('div.t1').hide();
        $('div.t2').hide();
        $('div.t3').hide();
        $('div.t4').hide();
        $('div.t5').hide();
        $('div.' + thisClass).animate({
            opacity: 'toggle',
            height: 'toggle'
        }, {
                duration: 500,
                specialEasing: {
                    opacity: 'swing',
                    height: 'swing'
                },
            });

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

        if (target.hasClass('t5')) {
            $('#activeBlock').css({ 'width': '15%' });
            targetFix += 18;
            drag = 10;
        } else {
            $('#activeBlock').css({ 'width': '20%' });
            targetFix += 15;
            drag = -10;
        }

        if (targetOffsetLeft > blockTargetLeft) {
            var position = targetOffsetLeft - targetFix;
        } else {
            var position = targetFix - targetOffsetLeft;

        }
        element.animate({
            left: position,
        }, 200);

        setTimeout((function () {
            $('ul.menu-portfolio li').removeClass('tab-current');
            target.addClass('tab-current');
        }), 100);
    }
});









