$(document).ready(function() {
    
    //STICKY NAVIGATION
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px' //create sticky nav menu before reach end of section
    });
    
    //SCROLL ON BUTTONS
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    })

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    })
    

    //SMOOTH SCROLLING TO INTERNAL LINKS
    //FROM: https://css-tricks.com/snippets/jquery/smooth-scrolling/
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    
    //ANIMATION ON SCROLL
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%' //create animation when about halfway do the section
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%' //create animation when about halfway do the section
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%' //create animation when about halfway do the section
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%' //create animation when about halfway do the section
    });

    
    //MOBILE NAVIGATION
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-navicon-round')) {        /* turn mobile menu icon into close icon */
            icon.removeClass('ion-navicon-round');  
            icon.addClass('ion-close-round');
           
        } else {                                        /* turn mobile close menu icon back into regular mobile icon */
            icon.removeClass('ion-close-round');  
            icon.addClass('ion-navicon-round');
        }
    });
    
    //GOOGLE MAPS
    var map = new GMaps({
        div: '.map',
        lat: 43.6565336,
        lng: -79.6017211,
        zoom: 12
    });    
        //43.6565336,-79.6017211
        
    map.addMarker({
        lat: 43.6565336,
        lng: -79.7,
        title: 'Toronto',
        infoWindow: {
            content: '<p>Omnifood Toronto</p>'
        }

    });
        /*
        
        map.addMarker({
          lat: -12.043333,
          lng: -77.028333,
          title: 'Lima',
          infoWindow: {
            content: '<p>HTML Content</p>'
            }
          click: function(e) {
            alert('You clicked in this marker');
          }
        });        
        */
    
    
});