function slideSwitch() {

    $('img').css('display','none');
    var $active = $('#slideshow1 IMG.active');
    
    if ( $active.length == 0 ){ 
        $active = $('#slideshow1 IMG:last');
    }
    
    var $next;
    if ($active.next().length){
        $next = $active.next();
    }else{
        $next = $('#slideshow1 IMG:first');
    }
    
    $active.addClass('last-active');
    
    $next.css({opacity: 0.0})
        .addClass('active')
        .css('display','block')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
    }
    
    $(function() {
      setInterval( "slideSwitch()", 5000 );
    });