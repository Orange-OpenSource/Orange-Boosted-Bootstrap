'use strict';  
(function($) {
    $('.carousel-indicators').attr('aria-hidden', 'true')
// Carousel Extension
  // ===============================
  
                     /*
      var slideCarousel = $.fn.carousel.Constructor.prototype.slide
      $.fn.carousel.Constructor.prototype.slide = function (type, next) {
        var $active = this.$element.find('.item.active')
          , $next = next || $active[type]()
        
        slideCarousel.apply(this, arguments)

      // $active
      //   .one('bsTransitionEnd', function () {
      //     $active.attr({'aria-selected':false, 'tabIndex': '-1'})
      //     $next.attr({'aria-selected':true, 'tabIndex': '0'})  
      //     /*
      //     var $ul = $next.closest('div[role=listbox]')
      //       , $items = $ul.find('[role=option]')
      //       , index = $items.index($items.filter('.active'))
      //     
      //       // if index = 0, hide the prev link
      //       if(index===0){
      //           $("[data-slide='prev']", $ul).hide();
      //       }
      //       else{                
      //           $("[data-slide='prev']", $ul).show();
      //       }
      //       // if index = last item, hide the next link
      //       if(index===($items.length -1)){
      //           $("[data-slide='next']", $ul).hide();
      //       }
      //       else{                
      //           $("[data-slide='next']", $ul).show();
      //       }     */
      //       //.focus()
      //  })
      
      //}     

     var $this;
     $.fn.carousel.Constructor.prototype.keydown = function (e) {
     $this = $this || $(this)
     if(this instanceof Node){ $this = $(this)}
     var $ul = $this.closest('div[role=listbox]'),
      $items = $ul.find('[role=option]'),
      $parent = $ul.parent(),
      k = e.which || e.keyCode,
      index;

      if (!/(37|38|39|40)/.test(k)){ return}
      index = $items.index($items.filter('.active'))
      if (k == 37 || k == 38) {                           //  Up
        
        index--
        if(index < 0){ index = $items.length -1;}
        else  {
          $parent.carousel('prev')
          setTimeout(function () {
            $items[index].focus()
          }, 150)      
        }  

      }
      if (k == 39 || k == 40) {                          // Down
        index++
        if(index == $items.length) {
          index = 0
        }  
        else  {
          $parent.carousel('next')
          setTimeout(function () {
            $items[index].focus()
          }, 150)            
        }

      }

      e.preventDefault()
      e.stopPropagation()
    }
    $(document).on('keydown.carousel.data-api', 'div[role=option]', $.fn.carousel.Constructor.prototype.keydown)
})(jQuery);