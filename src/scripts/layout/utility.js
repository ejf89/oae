
console.log("TOOOLS");

tools.closeMenu = function(){
  $('.nav-close').find('*').addBack().on('click', function(){
    $('.grid-responsive-navbar').removeClass('show')
    $('.nav-open-word').removeClass('hide')
  })
  $('.grid-responsive-navbar').on('click touch', function(){
    $('.grid-responsive-navbar').removeClass('show')
    // $('.grid-responsive-navbar').fadeOut()
  })
}

tools.openMenu = function(){
  $('.hero-static').on('click touchstart', function(e){
    console.log("OPEN");
    e.stopPropagation()
    console.log("HERE");
    if (!$('.grid-responsive-navbar').hasClass('show')) {
      $('.grid-responsive-navbar').addClass('show')
    } 
  })
}

tools.menuWordLogic = function(){
  $('.nav-open-word').on('click', function(){
    $('.grid-responsive-navbar').addClass('show')
    $('.nav-open-word').addClass('hide')
  })
}
