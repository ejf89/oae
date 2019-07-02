tools.sliderInit = function(){
  if ( $('.js-slider-hook').length ) {
    $('.js-slider-hook').each(function(i, el){
      var $this = $(el)
      var sliderHandle = $this.data('slider')
      var options = $this.data('options')

      if (options.length) {
        eval('var options_obj = ' + options);
        console.log("!!!!!!!!");
        console.log(options_obj);

        var slider =  $('.' + sliderHandle)
        if (slider.hasClass('hero-slider')) {
          slider.on('ready.flickity', function(){
            $(this).find('.slideshow-slide').removeClass('visually-hidden')
          })
        }

        if (slider.hasClass('featured-collection-slider')) {
          slider.on('ready.flickity', function(){
            $(this).find('.slideshow-slide').toggleClass('opacity-hidden opacity-shown')
          })
        }

        if (slider.hasClass('product-collection-slider')) {
          slider.on('ready.flickity', function(){
            $(this).find('.product-collection-slide').removeClass('opacity-hidden').addClass('opacity-shown')
          })
        }

        $('.' + sliderHandle).flickity(options_obj)

        slider.on('dragStart.flickity', function(){
          slider.find('.product-collection-slide').css('pointer-events', 'none')
        })

        slider.on('dragEnd.flickity', function(){
          slider.find('.product-collection-slide').css('pointer-events', 'all')
        })

      }
    })
  }
}
