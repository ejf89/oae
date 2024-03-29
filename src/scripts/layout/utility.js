
tools.letterCLass = function(){
  $('.anim-typewriter').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
function(e) {

// code to execute after animation ends
// $('.anim-typewriter').css('display', 'contents')

});
}

tools.closeMenu = function(){
  $('.nav-close').find('*').addBack().on('click', function(){
    // $('.grid-responsive-navbar').removeClass('show')
    $('.grid-responsive-navbar').addClass('opacity-hidden')
    $('.menu-icon').removeClass('hide')
    setTimeout(function(){

      $('.grid-responsive-navbar').removeClass('show')
      $('.grid-responsive-navbar').removeClass('opacity-hidden')
    }, 300)

    if ($('.nav-open-word')) {
      $('.nav-open-word').removeClass('visually-hidden')
    }
  })

  $('.grid-responsive-navbar').on('click touch', function(e){
    e.stopPropagation()
    e.stopImmediatePropagation()

    var $target = $(e.target)

    if ($target.hasClass('search-input')) {
        $('.search-form').focus()
    } else {
      if (!$target.hasClass('nav-link')) {
        // $('.grid-responsive-navbar').css('opacity', 0)
        $('.grid-responsive-navbar').addClass('opacity-hidden')
        $('body').removeClass('body-lock')

        setTimeout(function(){
          $('.grid-responsive-navbar').removeClass('show')
          $('.grid-responsive-navbar').removeClass('opacity-hidden')
        }, 300)
        if ($('.nav-open-word')) {
          $('.nav-open-word').removeClass('visually-hidden')
        }
      }
    }
    // $('.grid-responsive-navbar').fadeOut()
  })
}

tools.openMenu = function(){
  $('.hero-static, .js-menu-toggle, .logo-wrapper ').on('click touch', function(e){
    console.log("TOUCHING ");
    e.stopPropagation()
    e.stopImmediatePropagation()

    if (!$(e.target).hasClass('dynamic-word')) {
      if (!$('.grid-responsive-navbar').hasClass('show')) {
        $('.grid-responsive-navbar').addClass('show')
        $('.nav-close').removeClass('hide')
        $('.menu-icon').addClass('hide')
        $('body').addClass('body-lock')
      }
      if ($('.nav-open-word')) {
        $('.nav-open-word').addClass('visually-hidden')
      }
    }
  })

  if ($('html').hasClass('touchevents') && location.pathname == "/") {
    $('.main-container').on('click touch', function(e){
      console.log('up in hYEaRRRRr');
      $('#menu-icon').trigger('click')
    })

  }


}

tools.menuWordLogic = function(){
  $('.nav-open-word').on('click', function(){
    $('.grid-responsive-navbar').addClass('show')
    $('.nav-open-word').addClass('hide')
  })
}

tools.searchLogic = function(){
      //setup before functions
    var typingTimer;                //timer identifier
    var doneTypingInterval = 2000;  //time in ms (2 seconds)

    //on keyup, start the countdown
    $('#Search').keyup(function(){
        clearTimeout(typingTimer);
        if ($('#Search').val()) {
            typingTimer = setTimeout(doneTyping, doneTypingInterval);
        }
    });

    //user is "finished typing," do something
    function doneTyping () {
        $('#SearchSubmit').click()
    }

  $('.search-toggle').on('click touch', function(e){
    e.preventDefault()
    $('.search-toggle span').text(':')
    $('.nav-search-wrapper').removeClass('opacity-hidden').addClass('opacity-shown')
    $('#Search').get(0).focus()
  })

}

tools.pdpLightBox = function(){
  if ( $('html').hasClass('no-touchevents') ) {

    $('#product-image-block').on('click', function(){


      tools.mouseFollowHide()

      $('.zoom-modal-container').removeClass('opacity-hidden no-pointer z-minus-10')
      $('.product-description').addClass('z-minus-10')
      $('.nav-open-word').addClass('hide')
      $('.cart-link-container').addClass('hide')
      $('.topnav').addClass('pointer-none')
      tools.arrowFollow()
      // $('.zoom-modal-container').addClass('arrow-right')
      $('.zoom-modal-container').addClass('z-plus-10')
      $('body').addClass('body-lock')
      $(".zoom-modal-container").on('mousemove', function(e) {
      var mouseSide;
      if ((e.pageX - this.offsetLeft) < $(this).width() / 2) {
          mouseSide = 'L';
          $('.zoom-modal-container').removeClass('arrow-right')
          $('.zoom-modal-container').unbind('click')
          $('.mouse-follow').addClass('left')
          // $('body').removeClass('arrow-right')
          // $('body').addClass('arrow-left')
          $('.zoom-modal-container').on('click', function(){
            $('.zoom-slider').flickity('previous')
          })

      } else {
            $('.zoom-modal-container').unbind('click')
          mouseSide = 'R';
          $('.mouse-follow').removeClass('left')

          // $('body').removeClass('arrow-left')
          // $('body').addClass('arrow-right')
          $('.zoom-modal-container').on('click', function(){
            $('.zoom-slider').flickity('next')
          })
        }
      });

      document.onkeydown = function(evt) {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
        $('.zoom-close').trigger('click')
        }
      if (evt.keyCode == 37) {
        $('.zoom-slider').flickity('previous')
        }
      if (evt.keyCode == 39) {
        $('.zoom-slider').flickity('next')
        }
      };
    })
  } else {
    $('#product-image-block').on('click touch', function(){
      $('.product-slider').flickity('next')
    })
  }

  $('.zoom-close').on('click touch', function(){
    $('.zoom-modal-container').addClass('opacity-hidden no-pointer z-minus-10')
    $('.product-description').removeClass('z-minus-10')
    $('.nav-open-word').removeClass('hide')
    $('.cart-link-container').removeClass('hide')
    $('.cart-link-container').removeClass('hide')
    $('.topnav').removeClass('pointer-none')
    $('*').removeClass('arrow-right')
    $('*').removeClass('arrow-left')
    $('body').removeClass('body-locky')
    $('.zoom-modal-container').removeClass('z-plus-10')
    $('.product-slider').flickity('destroy')
    tools.sliderInit()
  })
}


tools.arrowFollow = function(){
    $(document).on('mousemove', function(e){
      $('.mouse-follow').css({
         left:  e.pageX,
         top:   e.pageY
      });
  });
}

tools.currencyFormat = function(num){
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

tools.randomFixedInteger = function (length) {
  return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
}


tools.variantRadioLogic = function(){

if ($('.variant-radio-wrapper').length > 0) {
  $('.variant-radio-wrapper input').first().click()
}

  $('.variant-radio-button').on('change', function(){
    var value = $(this).val()
    $('.master-select select').val(value).trigger('change')
  })
}

tools.projectAirtableQuery = function(url){
  console.log('AIRTABLEING');
  var atContainer = $('.project-airtable-container')
  var math = tools.randomFixedInteger(18)
  var handle = $('.article').data('handle')
  if (atContainer.length > 0) {
    var itemsProcessed = 0;

    // jQuery.getJSON("//cdn.shopify.com/s/files/1/0080/8992/7727/t/2/assets/airtable.json?" + math, function(data){
    jQuery.getJSON(url + math, function(data){
      var records = data.records
      for (var i = 0; i < records.length; i++) {
       console.log(records[i]);
       var name = records[i].fields.Name
       console.log('name = ' + name);
       console.log('handle = ' + handle);
       if (name == handle) {
         console.log("NAME FOUND");
         var assets = records[i].fields.assets
         assets.forEach(function(el, i, array){
           var imageSrc = el.url
           itemsProcessed++;
           console.log(imageSrc);
                      // $('.project-airtable-container').append(`<img class="project-slider-slide" src='${imageSrc}' />`)
           // $('.project-airtable-container').prepend(`  <div class="article-image-wrapper project-slider-slide">
           //     <div class=" article-image dark-shadow " style="background-image:url(${imageSrc})">
           //     </div>
           //   </div>`)
           $('.project-airtable-container').prepend(`  <div class="article-image-wrapper project-slider-slide">
                <img class="article-image dark-shadow" src='${imageSrc}' />
             </div>`)

           // $('.zoom-slider').prepend(`<div class='zoom-slide' style="background-image:url(${imageSrc})" ></div>`)
           $('.zoom-slider').prepend(`<img class="zoom-slide dark-shadow" src='${imageSrc}' />`)
           if (itemsProcessed == array.length ) {
             console.log("HERE");
             sliderInit()
             if ($('.project-slider-slide').length == 1) {
               console.log("JUST ONE INIT");
               $('.project-slider').flickity({
                 draggable: false,
                 wrapAround: true,
                 imagesLoaded: true,
                 variableWidth:false,
                 prevNextButtons: false,
                 pageDots: false,
                 autoPlay: 2000,
                 imagesLoaded: true
               })
               $('.project-slider-slide').addClass('is-selected')
             } else {
               console.log("SLIDER INIT project");
               sliderInit()
             }
           } else {
             console.log("THERE");
             // sliderInit()
           }
         })
       } else {
         console.log('NO NAME FOUND');


         //no airtable
         // if ($('.project-slider-slide').length == 1) {
         //   console.log("JUST ONE INIT LOWWW");
         //   $('.project-slider').flickity({
         //     draggable: true,
         //     wrapAround: true,
         //     imagesLoaded: true,
         //     variableWidth:false,
         //     prevNextButtons: false,
         //     pageDots: false,
         //     autoPlay: 2000,
         //     imagesLoaded: true
         //   })
         //   // $('.zoom-slider').flickity({
         //   //   draggable: false,
         //   //   wrapAround: true,
         //   //   imagesLoaded: true,
         //   //   variableWidth:false,
         //   //   prevNextButtons:false,
         //   //   pageDots: false,
         //   //   autoPlay: false,
         //   //   imagesLoaded: true,
         //   //   fade: true,
         //   //   accessibility: true,
         //   //   on: {
         //   //     ready: function(){
         //   //       console.log("READYU");
         //   //       $('.zoom-slide-count').text('1/' + this.cells.length)
         //   //     },
         //   //   change: function( index ) {
         //   //          $('.zoom-slide-count').text(index + 1 + '/' + this.cells.length)
         //   //     }
         //   //   }
         //   // })
         //   $('.project-slider-slide').addClass('is-selected')
         //
         // }
       }
      }
    });
  }

    function sliderInit(){
      if (!$('html').hasClass('touchevents')) {
        console.log("NO TOUCH");
        tools.articleLightboxLogic()
      } else {
        console.log("TOICJ");
        $('.article-image-wrapper').on('touchstart', function(e){
          e.stopPropagation()
          e.stopImmediatePropagation()
          console.log("TOUCH");
              $('.project-slider').flickity('next')
        })
      }

        $('.project-slider').flickity({
          draggable: false,
          wrapAround: true,
          imagesLoaded: true,
          variableWidth:false,
          prevNextButtons: false,
          pageDots: false,
          autoPlay: 2000,
          imagesLoaded: true,
          accesible: false
        })
        // $('.project-slider').flickity('remove', $('.article-image-wrapper').last() )



      $('.zoom-slider').flickity({
        draggable: false,
        wrapAround: true,
        imagesLoaded: true,
        variableWidth:false,
        prevNextButtons:false,
        pageDots: false,
        autoPlay: false,
        imagesLoaded: true,
        fade: false,
        accessibility: true,
        contain: true,
        cellAlign: "center",
        on: {
          ready: function(){
            $('.zoom-slide-count').text('1/' + this.cells.length)
          },
        change: function( index ) {
               $('.zoom-slide-count').text(index + 1 + '/' + this.cells.length)
          }
        }
      })
    }

    document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      $('.zoom-close').trigger('click')
      }
    if (evt.keyCode == 37) {
      $('.zoom-slider').flickity('previous')
      }
    if (evt.keyCode == 39) {
      $('.zoom-slider').flickity('next')
      }
    };
}

tools.articleLightboxLogic = function(){
  $('.project-airtable-container').on('click', function(){
    console.log('ARTICLE CLICK');
    $('.zoom-modal-container').removeClass('opacity-hidden no-pointer z-minus-10').addClass('z-plus-10')
    $('.nav-open-word').addClass('hide')
    $('.topnav').addClass('pointer-none')
    $('body').addClass('body-lock')
    $('.cart-link-container').addClass('hide')
    $('.project-slider').blur()


    tools.arrowFollow()
    tools.mouseFollowHide()


    $(".zoom-modal-container").on('mousemove', function(e) {
    var mouseSide;
    if ((e.pageX - this.offsetLeft) < $(this).width() / 2) {
        mouseSide = 'L';
        $('.zoom-modal-container').unbind('click')
        $('.zoom-modal-container').removeClass('arrow-right')
        $('.mouse-follow').addClass('left')


        $('.zoom-modal-container').on('click', function(){
          $('.zoom-slider').flickity('previous')
        })

    } else {
          $('.zoom-modal-container').unbind('click')
        mouseSide = 'R';
        $('.mouse-follow').removeClass('left')

        $('.zoom-modal-container').on('click', function(){
          $('.zoom-slider').flickity('next')

        })
      }
    });

  })

  $('.zoom-close').on('click touch', function(){
    $('.zoom-modal-container').addClass('opacity-hidden no-pointer z-minus-10')
    $('.nav-open-word').removeClass('hide')
    $('.topnav').removeClass('pointer-none')
    $('*').removeClass('arrow-right')
    $('*').removeClass('arrow-left')
    $('body').removeClass('body-lock')
    $('.cart-link-container').removeClass('hide')
    $('.project-slider').flickity('destroy')
    $('.project-slider').flickity({
      draggable: false,
      wrapAround: true,
      imagesLoaded: true,
      variableWidth:false,
      prevNextButtons: false,
      pageDots: false,
      autoPlay: 2000,
      imagesLoaded: true
    })

  })

}

tools.mouseFollowHide = function(){
  $('.zoom-close').on('mouseover', function(){
    $('.mouse-follow').addClass('opacity-hidden')
  }).mouseleave(function(){
    if ($('.mouse-follow').hasClass('opacity-hidden')) {
      $('.mouse-follow').removeClass('opacity-hidden')
    }
  })
}

// tools.zoomSliderCounter = function(){
//   console.log("COUNTER");
//   var $gallery = $('.zoom-slider').flickity();
//   var $galleryStatus = $('.zoom-slide-count');
//   var flkty = $gallery.data('flickity');
//
// function updateStatus() {
//   // var cellNumber = flkty.selectedIndex + 1;
//   // $galleryStatus.text( cellNumber + '/' + flkty.slides.length );
// }
// updateStatus();
// $gallery.on( 'select.flickity', updateStatus );
// }

tools.categoryTagLogic = function(){
  if ($('.category-tag').length > 0) {
    $('.category-tag').on('mouseover', function(e){
      var $this = $(this)
      var tag = $this.data('tag')
      $this.addClass('active')
      $('.collection-title').addClass('color-grey')

      var shown = $(`.product-collection-item[data-tag="${tag}"]`)
      var hidden = $(`.product-collection-item[data-tag!="${tag}"]`)

      shown.addClass('opacity-shown')
      hidden.addClass('opacity-hidden').removeClass('opacity-shown')


    })
    .on('mouseleave', function(e){
      $('.collection-title').removeClass('color-grey')

      $('.product-collection-item').removeClass('opacity-hidden').removeClass('opacity-shown')
    })
  }
}

tools.navPositionToggle = function(){
  $(window).on('scroll', function() {
    scrollPosition = $(this).scrollTop();
    if (scrollPosition >= 100) {
        // If the function is only supposed to fire once
        $('.logo-wrapper-container').addClass('toggle-up')
        $('.opacity-header').addClass('opacity-hidden').removeClass('opacity-shown')
        // Other function stuff here...
    } else {
      // $('.logo-wrapper-container').removeClass('toggle-up')
      // $('.opacity-header').addClass('opacity-hidden').removeClass('opacity-shown')
      var lastScrollTop = 0;
      $(window).scroll(function(event){
         var st = $(this).scrollTop();
         if (st < lastScrollTop){
           // console.log('scrolling up');
           $('.logo-wrapper-container').removeClass('toggle-up')
           $('.opacity-header').removeClass('opacity-hidden').addClass('opacity-shown')
         } else {
            // upscroll down
         }
         lastScrollTop = st;
      });
    }
});
}

tools.policyHeaders = function(){
  if (location.href.indexOf('policies') > -1) {
    $('.dynamic-word').remove()
    $('.index-link span').last().text(":")
  }
}

tools.headerCleanUp = function(){
  if ($('html').hasClass('touchevents')) {
    // $('.word').text().replace(/&nbsp;/gi,'');
    $('.word').each(function(i, el){
      $(el).text().replace('&nbsp', '')
    })
  }
}

tools.topLogic = function(){
  if ($('html').hasClass('no-touchevents')) {
    $(window).on('resize',function() {
      var space = (window.innerWidth / 100) * 3.8;
      var height = $('.logo-wrapper-container').position().top + $('.logo-wrapper-container').outerHeight(true) + space ;

      $('.js-margin-top').css('margin-top', height + 'px')
    }).trigger('resize');
  }
}

tools.cartRemoveFix = function(){
  $('.cart-remove-x').on('click touch', function(){
    $(this).parent().click()
  })
}

tools.imageSnifferFade = function(el){
  console.log('SNIFFING');
  var $el = $(el)
  $el.waitForImages({
      finished: function() {
          console.log('FINISHED');
          $(this).removeClass('opacity-hidden').addClass('opacity-shown')

      },
      each: function() {
        console.log('IMAGE SBNIFFED');
         $(this).removeClass('opacity-hidden').addClass('opacity-shown')
      },
      waitForAll: false
  });
}
