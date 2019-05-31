

  /**
 * Theme: Abstack - Bootstrap 4 Web App kit
 * Author: Coderthemes
 * Module/App: Main Js
 */


(function ($) {

    'use strict';
    var  width ;
    var height ;
    
    function initlayout(){
        width = window.innerWidth;
        $('.grid-item').css('width', (width/4)-20);
        $('.grid-item').css('height', (width/4)-20);
        $('.grid-item--width2').css('width', (width/2)-40);
        
    }
    function initMasonry(){
        $('.grid').masonry({
            // options
            itemSelector: '.grid-item',
            
          });
    }

    function init() {
        initlayout();
        initMasonry();
       
    }

    init();
   

})(jQuery);



