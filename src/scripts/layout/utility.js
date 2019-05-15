
console.log("TOOOLS");

tools.closeMenu = function(){
  $('.nav-close').find('*').addBack().on('click', function(){
    $('.grid-responsive-navbar').removeClass('show')

    if ($('.nav-open-word')) {
      $('.nav-open-word').removeClass('visually-hidden')
    }
  })
  $('.grid-responsive-navbar').not('.topnav').on('click touch', function(){
    $('.grid-responsive-navbar').removeClass('show')
    if ($('.nav-open-word')) {
      $('.nav-open-word').removeClass('visually-hidden')
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
      console.log("");
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

    $(".zoom-modal-container").on('mousemove', function(e) {
    var mouseSide;
    if ((e.pageX - this.offsetLeft) < $(this).width() / 2) {
        mouseSide = 'L';
        $('.zoom-modal-container').unbind('click')

        $('body').removeClass('arrow-right')
        $('body').addClass('arrow-left')
        console.log("LEFT SIDE");
        $('.zoom-modal-container').on('click', function(){
          console.log("clicked LEFT");
          $('.zoom-slider').flickity('previous')
        })

    } else {
          $('.zoom-modal-container').unbind('click')
        mouseSide = 'R';
        console.log("RIGHT SIDE");
        $('body').removeClass('arrow-left')
        $('body').addClass('arrow-right')
        $('.zoom-modal-container').on('click', function(){
          console.log("clicked RIGHT");
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
  // debugger
  var handle = $('.article').data('handle')
  console.log('HANDLE');
  console.log(handle);

  function sliderInit(){
    console.log('SLIDERINIT!!!!');
  }

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
           $('.project-airtable-container').append(`<img src='${imageSrc}' />`)
           $('.zoom-slider').append(`<img src='${imageSrc}' />`)
           console.log(itemsProcessed);
           console.log(array.length);
           if (itemsProcessed == array.length) {
             sliderInit()
           }
         })
       }
       console.log(name);
      }
    });
  }
  console.log();
}
