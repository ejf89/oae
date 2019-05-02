/*================ Gradient scroll ================*/


$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  function amountscrolled(){
    var winheight = $(window).height()
    var docheight = $(document).height()
    var scrollTop = $(window).scrollTop()
    var trackLength = docheight - winheight
    var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    return pctScrolled
  }



function gradientSwapper(){
  var prods = $('.featured-product-block')
  var gradients = $('.gradient')
  var amt = amountscrolled()
  // $(function() {
  //   $(window).scroll(function () {
  //     // console.log( amountscrolled() );
  //     var amt = amountscrolled()
  //     console.log(amt);
  //
  //
  //     if (amt >= 0 && amt < 30) {
  //       console.log('here');
  //       $(gradients[0]).removeClass('opacity-hidden')
  //       gradients.not($(gradients[0])).addClass('opacity-hidden')
  //     } else if (amt > 30 && amt < 60) {
  //       console.log('there');
  //       $(gradients[1]).removeClass('opacity-hidden')
  //       gradients.not($(gradients[1])).addClass('opacity-hidden')
  //     } else if (amt > 60) {
  //       console.log("bottom");
  //       $(gradients[2]).removeClass('opacity-hidden')
  //       gradients.not($(gradients[2])).addClass('opacity-hidden')
  //
  //     }
  //   });
  // });

    prods.each(function(i, el){
      console.log(i);
      console.log(el.id);


      positionTrigger(el.id)
    })

}


function positionTrigger(element_id){
  var element = $(`#${element_id}`)
  var element_position = $(`#${element_id}`).offset().top;
  var screen_height = $(window).height();
  var activation_offset = 0.5;//determines how far up the the page the element needs to be before triggering the function
  var activation_point = element_position - (screen_height * activation_offset);
  var max_scroll_height = $('body').height() - screen_height - 5;//-5 for a little bit of buffer

  //Does something when user scrolls to it OR
  //Does it when user has reached the bottom of the page and hasn't triggered the function yet
  $(window).on('scroll', function() {
      var y_scroll_pos = window.pageYOffset;

      var element_in_view = y_scroll_pos > activation_point;
      var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

      if(element_in_view || has_reached_bottom_of_page) {

          var trigger_check = element.data('animation-triggered')
            if (!trigger_check) {
              var target = $(`#${element.data('animation-target')}`)
              $('.gradients').not(element).removeClass('opacity-shown').addClass('opacity-hidden')
              target.addClass( target.data('animation-target-class') )
              element.data('animation-triggered', true)
              console.log('TARGET');
              console.log(target);
            }
          } else {
          var trigger_check = element.data('animation-triggered')
            //element out of view
            console.log("OUT OF VIEW ");
            if (trigger_check) {
              console.log("TRUE!!!!");
              var target = $(`#${element.data('animation-target')}`)
              target.removeClass( target.data('animation-target-class') )
              element.data('animation-triggered', false)


            }
          }
  });
}


$(document).ready(function(){
  gradientSwapper()
  // positionTrigger()




  $(window).trigger('scroll')
})
