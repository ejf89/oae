$(document).ready(function(){


Barba.Pjax.start();

var lastElementClicked;
Barba.Dispatcher.on('linkClicked', function(el) {
  lastElementClicked = el;
});


Barba.Dispatcher.on('initStateChange', function () {



});

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */
     //  var fade =  new Promise(function(resolve, reject) {
     //     $(this.oldContainer).addClass('fade-out')
     // });
     //
     // return true

    return $(this.oldContainer).animate({ opacity: 0 }).promise();
    // return $(this.oldContainer).addClass('fade-out').promise();

  },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */



    var _this = this;
    var $el = $(this.newContainer);


    $(this.oldContainer).hide();
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    if ( $('.js-slider-hook').length ) {
      $('.js-slider-hook').each(function(i, el){
        // console.log(i);
        // console.log(el);
        var $this = $(el)
        var sliderHandle = $this.data('slider')
        var options = $this.data('options')
        eval('var options_obj='+options);
        $('.' + sliderHandle).flickity(options_obj)
        // console.log("SUCCESS!");
      })
    }


    $el.css({
      visibility : 'visible',
      opacity : 0
    });

    $el.animate({ opacity: 1 }, 200, function() {
      /**
       * Do not forget to call .done() as soon your transition is finished!
       * .done() will automatically remove from the DOM the old Container
       */

      _this.done();
    });

    // $el.addClass('fade-in')
    //  _this.done();

     console.log("BOTOOM FADEOUT");
  }
});

/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function() {
  return FadeTransition;
};

// Barba.Prefetch.init();


})
