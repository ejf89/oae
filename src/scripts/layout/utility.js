tools.closeMenu = function(){
  $('.nav-close').find('*').addBack().on('click', function(){
    $('.grid-responsive-navbar').removeClass('show')

    if ($('.nav-open-word')) {
      $('.nav-open-word').removeClass('visually-hidden')
    }
  })

  $('.grid-responsive-navbar').on('click touch', function(e){
    e.stopPropagation()
    e.stopImmediatePropagation()

    var $target = $(e.target)

    if (!$target.hasClass('nav-link')) {
      $('.grid-responsive-navbar').removeClass('show')
      if ($('.nav-open-word')) {
        $('.nav-open-word').removeClass('visually-hidden')
      }
    }
    // $('.grid-responsive-navbar').fadeOut()
  })
}

tools.openMenu = function(){
  $('.hero-static, .nav-open-word').on('click touchstart', function(e){
    console.log("OPEN");
    e.stopPropagation()
    console.log("HERE");
    if (!$('.grid-responsive-navbar').hasClass('show')) {
      $('.grid-responsive-navbar').addClass('show')
      $('.nav-close').removeClass('hide')
    }
    if ($('.nav-open-word')) {
      $('.nav-open-word').addClass('visually-hidden')
    }
  })
}

tools.menuWordLogic = function(){
  $('.nav-open-word').on('click', function(){
    $('.grid-responsive-navbar').addClass('show')
    $('.nav-open-word').addClass('hide')
  })
}

tools.pdpLightBox = function(){
  $('#product-image-block').on('click', function(){
    console.log('PDP CLICK');
    $('.zoom-modal-container').removeClass('opacity-hidden no-pointer z-minus-10')
    $('.product-description').addClass('z-minus-10')
    $('.nav-open-word').addClass('hide')
    $('.topnav').addClass('pointer-none')
    $('.zoom-modal-container').addClass('arrow-right')
    $('body').addClass('body-lock')
    $(".zoom-modal-container").on('mousemove', function(e) {
    var mouseSide;
    if ((e.pageX - this.offsetLeft) < $(this).width() / 2) {
        mouseSide = 'L';
        $('.zoom-modal-container').unbind('click')

        $('body').removeClass('arrow-right')
        $('body').addClass('arrow-left')
        $('.zoom-modal-container').on('click', function(){
          $('.zoom-slider').flickity('previous')
        })

    } else {
          $('.zoom-modal-container').unbind('click')
        mouseSide = 'R';
        $('body').removeClass('arrow-left')
        $('body').addClass('arrow-right')
        $('.zoom-modal-container').on('click', function(){
          $('.zoom-slider').flickity('next')

        })
      }
    });
  })

  $('.zoom-close').on('click touch', function(){
    $('.zoom-modal-container').addClass('opacity-hidden no-pointer z-minus-10')
    $('.product-description').removeClass('z-minus-10')
    $('.nav-open-word').removeClass('hide')
    $('.topnav').removeClass('pointer-none')
    $('*').removeClass('arrow-right')
    $('*').removeClass('arrow-left')
    $('body').removeClass('body-locky')

  })
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

tools.projectAirtableQuery = function(){
  console.log('AIRTABLEING');
  var atContainer = $('.project-airtable-container')
  var math = tools.randomFixedInteger(18)
  var handle = $('.article').data('handle')
  if (atContainer.length > 0) {
    var itemsProcessed = 0;

    jQuery.getJSON("//cdn.shopify.com/s/files/1/0080/8992/7727/t/2/assets/airtable.json?" + math, function(data){
      var records = data.records
      for (var i = 0; i < records.length; i++) {
       console.log(records[i]);
       var name = records[i].fields.Name
       if (name == handle) {
         var assets = records[i].fields.assets
         assets.forEach(function(el, i, array){

           var imageSrc = el.url
           itemsProcessed++;
           $('.project-airtable-container').append(`<img class="project-slider-slide" src='${imageSrc}' />`)
           $('.zoom-slider').append(`<img class='zoom-slider-slide' src='${imageSrc}' />`)
           if (itemsProcessed == array.length) {
             sliderInit()
           }
         })
       }
       console.log(name);
      }
    });
  }

    function sliderInit(){

      tools.articleLightboxLogic()


        $('.project-slider').flickity({
          draggable: false,
          wrapAround: true,
          imagesLoaded: true,
          variableWidth:false,
          prevNextButtons: false,
          pageDots: false,
          autoPlay: 3000,
          imagesLoaded: true
        })

      $('.zoom-slider').flickity({
        draggable: false,
        wrapAround: true,
        imagesLoaded: true,
        variableWidth:false,
        prevNextButtons:false,
        pageDots: false,
        autoPlay: false,
        imagesLoaded: true,
        fade: true,
        on: {
          ready: function(){
            console.log("READYU");
            $('.zoom-slide-count').text('1/' + this.cells.length)
          },
        change: function( index ) {
               $('.zoom-slide-count').text(index + '/' + this.cells.length)
          }
        }
      })
    }
}

tools.articleLightboxLogic = function(){
  $('.project-airtable-container').on('click', function(){
    console.log('PDP CLICK');
    $('.zoom-modal-container').removeClass('opacity-hidden no-pointer z-minus-10').addClass('z-plus-10')
    $('.nav-open-word').addClass('hide')
    $('.topnav').addClass('pointer-none')
    $('body').addClass('body-lock')


    $(".zoom-modal-container").on('mousemove', function(e) {
    var mouseSide;
    if ((e.pageX - this.offsetLeft) < $(this).width() / 2) {
        mouseSide = 'L';
        $('.zoom-modal-container').unbind('click')

        $('body').removeClass('arrow-right')
        $('body').addClass('arrow-left')
        $('.zoom-modal-container').on('click', function(){
          $('.zoom-slider').flickity('previous')
        })

    } else {
          $('.zoom-modal-container').unbind('click')
        mouseSide = 'R';
        console.log("RIGHT SIDE");
        $('body').removeClass('arrow-left')
        $('body').addClass('arrow-right')
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
console.log('CATEGORY');
  if ($('.category-tag').length > 0) {
    $('.category-tag').on('mouseover', function(e){
      var $this = $(this)
      var tag = $this.data('tag')
      $this.addClass('active')

      var shown = $(`.product-collection-item[data-tag="${tag}"]`)
      var hidden = $(`.product-collection-item[data-tag!="${tag}"]`)

      shown.addClass('opacity-shown')
      hidden.addClass('opacity-hidden').removeClass('opacity-shown')


      console.log('MOUSEOVER');
    })
    .on('mouseleave', function(e){
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

        // Other function stuff here...
    } else {
      $('.logo-wrapper-container').removeClass('toggle-up')

    }
});
}
