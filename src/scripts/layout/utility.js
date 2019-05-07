
tools.barbaInit = function () {
  // VIEW
  var Homepage = Barba.BaseView.extend({
    namespace: 'homepage',
    onEnter: function() {
      console.log("barba homepage init");
      $('.hero-static').addClass('load')
      $(document).on('click touchstart', function(){
        $('.grid-responsive-navbar').addClass('show')
      })

      // The new Container is ready and attached to the DOM.
    },
    onEnterCompleted: function() {
      // The Transition has just finished.

    },
    onLeave: function() {
      // A new Transition toward a new page has just started.

    },
    onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
      // bismuth.homePageHeaderOffset()
    }
  });


  var Product = Barba.BaseView.extend({
    namespace: 'product',
    onEnter: function() {
      console.log("barba product init");

      // The new Container is ready and attached to the DOM.
    },
    onEnterCompleted: function() {
      // bismuth.imageSnifferFade('.product-slide-image')
      // The Transition has just finished.

    },
    onLeave: function() {
      // A new Transition toward a new page has just started.

    },
    onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
    }
  });

  var Collection = Barba.BaseView.extend({
    namespace: 'collection',
    onEnter: function() {
      console.log("barba collection init");
      // The new Container is ready and attached to the DOM.
      bismuth.imageSnifferFade('.product-card-image')


      //visibility bug fix
      if ( $('.product-collection-item.opacity-hidden').length ) {
        $('.product-collection-item').removeClass('opacity-hidden').addClass('opacity-shown')
      }
      // bismuth.productPageSliderFix()

    },
    onEnterCompleted: function() {
      // The Transition has just finished.
    },
    onLeave: function() {
      $('.collection-container').children().fadeOut()
      // A new Transition toward a new page has just started.
    },
    onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
    }
  });

  var Page = Barba.BaseView.extend({
    namespace: 'page',
    onEnter: function() {
      console.log("barba page init");


      // The new Container is ready and attached to the DOM.
    },
    onEnterCompleted: function() {
      // The Transition has just finished.

    },
    onLeave: function() {
      // A new Transition toward a new page has just started.

    },
    onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
      // bismuth.homePageHeaderOffset()
    }
  });

  var Cart = Barba.BaseView.extend({
    namespace: 'cart',
    onEnter: function() {
      console.log("barba cart init");

      // The new Container is ready and attached to the DOM.
    },
    onEnterCompleted: function() {
      // The Transition has just finished.
    },
    onLeave: function() {
      // A new Transition toward a new page has just started.
    },
    onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
      // bismuth.homePageHeaderOffset()
    }
  });

  // // Don't forget to init the view!


  // TRANSITIONS

  var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      /**
      * This function is automatically called as soon the Transition starts
      * this.newContainerLoading is a Promise for the loading of the new container
      * (Barba.js also comes with an handy Promise polyfill!)
      */
      // console.log("STARTED!");
      // As soon the loading is finished and the old page is faded out, let's fade the new page
      // Promise
      // .all([this.newContainerLoading, this.fadeOut()])
      // .then(this.fadeIn.bind(this));
      this.newContainerLoading
      .then( this.fadeOut())
      .then(this.fadeIn.bind(this))
      .then(this.finish.bind(this))
    },

    fadeOut: function() {
      // console.log("FADE OUT");
      /**
      * this.oldContainer is the HTMLElement of the old Container
      */
      //  var fade =  new Promise(function(resolve, reject) {
        //    resolve( $(this.oldContainer).addClass('fade-out'), 300, true )
        // });
        //
        // return fade

        if ( $('#menu-icon').hasClass('change') ) {
          $('#menu-icon').removeClass('change')
          $('.mobile-nav').removeClass('open')
          $('html').removeClass('body-lock')
        }

        // return $(this.oldContainer).animate({ opacity: 0 }).promise();
        // return $(this.oldContainer).addClass('fade-out').promise();


        return $(this.oldContainer).find('.shopify-section').animate({ opacity: 0 }).promise();
      },

      fadeIn: function() {
        /**
        * this.newContainer is the HTMLElement of the new Container
        * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
        * Please note, newContainer is available just after newContainerLoading is resolved!
        */


        var _this = this;
        var old = $(this.oldContainer)
        var $el = $(this.newContainer);

        $(this.oldContainer).hide();

        document.body.scrollTop = document.documentElement.scrollTop = 0;

        if ( $el.data('namespace') == 'collection' ) {
          var children = $el.find('.collection-container').children()
        } else if ($el.data('namespace') == 'cart') {
          console.log("CART TRANSITION");
          var children = $el.find('.cart-container')
        } else if ($el.data('namespace') == 'page') {
          console.log("PAGE");
          var children = $el.find('.page-container')
        } else {
          var children = $el.find('.shopify-section').children()
        }

        $el.css({
          visibility : 'visible',
          opacity : 1
        });

        children.css({
          visibility : 'visible',
          opacity : 0
        });

        // children.animate({ opacity: 1 }, 450, function() {
        //   /**
        //   * Do not forget to call .done() as soon your transition is finished!
        //   * .done() will automatically remove from the DOM the old Container
        //   */
        //
        //   // _this.done()
        // });

        return children.animate({ opacity: 1 }, {
          duration: 400
        }).promise()



      },
      finish: function(){
        this.done()
      }
    });

    /**
    * Next step, you have to tell Barba to use the new Transition
    */

    Barba.Pjax.getTransition = function() {
      return FadeTransition;
    };

    Barba.Prefetch.init();
    Homepage.init()
    Product.init()
    Collection.init()
    Page.init()
    Cart.init()
    Barba.Pjax.start();

}
