
console.log("TOOOLS");

tools.closeMenu = function(){
  $('.nav-close').find('*').addBack().on('click', function(){
    $('.grid-responsive-navbar').removeClass('show')
    $('.nav-open-word').removeClass('hide')
  })
}

tools.openMenu = function(){
  $('.grid-responsive-navbar, .nav-close').on('click touchstart', function(e){
    console.log("OPEN");
    e.stopPropagation()
    if (!$('.grid-responsive-navbar').hasClass('show')) {
      $('.grid-responsive-navbar').addClass('show')
    } else {
      $('.grid-responsive-navbar').removeClass('show')
      $('.nav-open-word').removeClass('hide')

    }
  })
}

tools.menuWordLogic = function(){
  $('.nav-open-word').on('click', function(){
    $('.grid-responsive-navbar').addClass('show')
    $('.nav-open-word').addClass('hide')
  })
}
