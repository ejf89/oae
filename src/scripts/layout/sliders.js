$(document).ready(function(){


  $('.featured-product-slider').flickity({
    contain: false,
    wrapAround: true,
    imagesLoaded: true,
    variableWidth:true,
    on: {
      change: function( index ){


        $this = $(this)
        var $parent = $('html').find(this.element).closest('.product-section-block')
        var $variants = $parent.find('.product-variant')
        var $imgId = $parent.find('.slide-parent.is-selected').children().first().data('product-image-id')

        $variants.each(function(i, el){
          if ($(el).data('variant-image-id') == $imgId) {
            var optionValue = $(this).text().trim().split(' / ')[0]
            $parent.find('.master-select').find(`[data-value='${optionValue}']`).parent().val(optionValue).change()
            return
          }
        })

      }
    }
  })


  // $('.featured-product-slider').flickity({
  //   contain: false,
  //   wrapAround: true,
  //   imagesLoaded: true,
  //   variableWidth:true
  // })

  $('.hero-slider').flickity({
    contain: true,
    wrapAround: true,
    imagesLoaded: true,
    variableWidth:true
  })

  $('.blog-slider').flickity({
    contain: false,
    wrapAround: true,
    imagesLoaded: true,
    variableWidth: true
  })

  $('.collection-slider').flickity({
    contain: false,
    wrapAround: true,
    imagesLoaded: true,
    variableWidth: true
  })

  // if ( $('html').find('.product-collection-slider').length > 0 ) {
  //   console.log("GOT ONE");
  //   $('.product-collection-slider').flickity({
  //     contain: false,
  //     wrapAround: true,
  //     imagesLoaded: true,
  //     variableWidth: true
  //   })
  // }

  if ( $('html').find('.mobile-slider').length > 0 ) {
    $('.mobile-slider').flickity({
      contain: false,
      wrapAround: true,
      imagesLoaded: true,
      variableWidth: true,
      watchCSS: true
    })

  }


})
