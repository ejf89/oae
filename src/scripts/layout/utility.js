
console.log("TOOOLS");

tools.closeMenu = function(){
  $('.nav-close').find('*').addBack().on('click', function(){
    $('.grid-responsive-navbar').removeClass('show')

    if ($('.nav-open-word')) {
      $('.nav-open-word').removeClass('visually-hidden')
    }
  })
  $('.grid-responsive-navbar').on('click touch', function(){
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
  })
}
