// /dist/components/side-menu/side-menu-directive.js

hackApp.directive('sideMenu', function( debounce ){
  return {
    restrict : 'A',
    link : function( scope, element, attrs ){
      var $window = $(window);
      var origElOffset = element.offset().top;

      var addFixedClass = debounce( function(){
        var winOffset = $window.scrollTop();
        var elOffset = element.offset().top;

        if( winOffset > elOffset ){
          element.addClass('fixed');
        } else if ( origElOffset >= elOffset ){
          element.removeClass('fixed');
        }
      }, 10);

      $window.scroll( addFixedClass );
    }
  }
});
