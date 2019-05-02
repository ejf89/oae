import "../../styles/theme.scss.liquid";
import "../../styles/theme.scss";
import "./slate.js"
import "./vendor.js"
import "./sliders.js"
import "./barba-config.js"
import "../sections/featured-products.js"


$(document).ready(function(){



  $('.product-section-block').trigger('click');


  /*================ SECOND LEVEL NAV ================*/

  $('.child-with-sub').on('mouseenter', function(){
    var $this = $(this)
    $this.find('.sub-child-menu').addClass('open')

    $this.on('mouseleave', function(){
      $this.find('.sub-child-menu').removeClass('open')
    })
  })


  /*================ SECOND LEVEL NAV -- MOBILE ================*/

  if ( $('html').hasClass('touchevents') ) {
    console.log("HAS ");

    $('.dropbtn').on('touchstart', function(e){
      e.preventDefault()

      var $this = $(this)
      $this.parent().toggleClass('active')

      if ( $this.next().hasClass('sub-child-menu') ) {
        $('.sub-child-menu').toggleClass('open')
      }
    })
  }

  /*================ Mini Cart Toggle ================*/

  // $('.cart-link, .Add-To-Cart-Button').on('click', function (e) {
  //   e.preventDefault();
  //   $('body').toggleClass('mini-cart-open');
  //
  //   $('.mini-cart-overlay, .mini-cart-close').on('click', function(){
  //     $('body').removeClass('mini-cart-open')
  //   })
  // });


  /*================ PDP Zoom ================*/

  //
  // if (window.location.href.indexOf('products') > -1 && $('html').hasClass('no-touchevents')) {
  //   $('.product-slide-image').each(function(i, el){
  //     var image_src = el.children[0].src
  //     $(el).zoom({
  //       url: image_src
  //     })
  //   })
  // }


  /*================ CTA child fix ================*/


  $('.cta').on('click', function(){
     $(this).find('a').trigger('click')
  })




})
