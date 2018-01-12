$(document).ready(function() {
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    });
   //$('h1').click(function() {
//       $(this).css('background-color', '#ff0000');
//   })
    
    /*
    
var waypoint = new Waypoint({
  element: document.getElementById('element-waypoint'),
  handler: function(direction) {
    notify(this.element.id + ' triggers at ' + this.triggerPoint)
  },
  offset: '75%'
})    
    */
});