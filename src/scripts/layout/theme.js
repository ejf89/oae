// import "../../styles/theme.scss.liquid";
// import "../../styles/theme.scss";
import './init.js'
import "./slate.js"
import "./sliders.js"
import "./utility.js"
import "./vendor.js"
import "./barba-config.js"
import "../sections/featured-products.js"


$(document).ready(function(){
  // $('.product-section-block').trigger('click'); <-- needed for dynamic cart
  console.log("FIRING");
  tools.main = function () {
    var init = function(){
      // tools.barbaInit()
      $('.hero-static').addClass('load')
      $('.product-section-block').trigger('click');

      tools.openMenu()
      tools.closeMenu()
      tools.sliderInit()
      tools.pdpLightBox()
      tools.variantRadioLogic()

      // bismuth.collectionSelect()
    }
    console.log("utilites init'd");
    init()
  }

  tools.main()
})
