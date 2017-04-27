( function() {
  var containerSlider = document.getElementById( "container-slider-js" );
  var headerList = document.getElementById( "header-list-js" );
  var sideBarContainer = document.getElementById( "side-bar-container-js" );
  var headerSearch = document.getElementById( "header-search-js" );

  headerList.addEventListener( "click", headerHandler, false );
  headerSearch.addEventListener( "click", searchHandler, false );
  
  function headerHandler( e ) {
    console.log( "Hello World" );
    e.preventDefault();
    
    var containerSlide = "container-slider";
    var sideBar = "side-bar-container";
    
    containerSlider.className = toggleClassName( containerSlider, containerSlide, "slide-extend", "slide-retract" );
    
    sideBarContainer.className = toggleClassName( sideBarContainer, sideBar, "side-container-extend", "side-container-retract" );

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
  
  function searchHandler(e) {
    e.preventDefault();
    console.log( "Hello, Foo" );
    var parentDiv = e.target.parentElement;
    if(  parentDiv.className !== "header" ) {
        parentDiv = parentDiv.parentElement; 
    }
    var parent = parentDiv.children[0][0]
    parent.className = toggleClassName( parent, "", "search-extend", "search-retract" )
    
  }
  
})();
