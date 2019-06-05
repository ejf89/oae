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
      var atUrl = localStorage.getItem('atUrl')

      // tools.barbaInit()
      $('.hero-static').addClass('load')
      console.log('NO JS LOAD');
      console.log('NO JS LOAD');
      console.log('NO JS LOAD');
      console.log('NO JS LOAD');
      $('.product-section-block').trigger('click');

      tools.letterCLass()
      tools.openMenu()
      tools.closeMenu()
      tools.searchLogic()
      tools.sliderInit()
      tools.pdpLightBox()
      tools.variantRadioLogic()
      tools.projectAirtableQuery(atUrl)
      tools.categoryTagLogic()
      tools.navPositionToggle()
      tools.policyHeaders()
      tools.headerCleanUp()
      tools.topLogic()

      // bismuth.collectionSelect()
    }
    console.log("utilites init'd");
    init()
  }

  tools.main()
})
