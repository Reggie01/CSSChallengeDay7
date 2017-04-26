( function() {
  var containerSlider = document.getElementById( "container-slider-js" );
  var headerList = document.getElementById( "header-list-js" );
  var sideBarContainer = document.getElementById( "side-bar-container-js" );

  headerList.addEventListener( "click", headerHandler, false );
  
  function headerHandler() {
    console.log( "Hello World" );
    
    var containerSlide = "container-slider";
    var sideBar = "side-bar-container";
    
    containerSlider.className = toggleClassName( containerSlider, containerSlide, "slide-extend", "slide-retract" );
    
    sideBarContainer.className = toggleClassName( sideBarContainer, sideBar, "side-container-extend", "side-container-retract" );
    /* if( classes.indexOf( "slide-extend" ) != -1 ) {
        containerSlider.className = containerSlide + " slide-retract";
    } else {
        containerSlider.className = containerSlide + " slide-extend";
    } */
  }
  
  function toggleClassName( element, base, current, update ) {
    var classes = element.className;
    var updateClass = "";
    if( classes.indexOf( current ) != -1 ) {
        updateClass = base + " " + update;
    } else {
        updateClass = base + " " + current;
    }   
    
    return updateClass; 
  }
  
})();
