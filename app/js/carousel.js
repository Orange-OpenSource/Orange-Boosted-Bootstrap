(function($) {
  'use strict';
  $('.carousel-indicators').attr('aria-hidden', 'true')
  // Carousel Extension
  // ===============================
    
  $.fn.carousel.Constructor.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        // .emulateTransitionEnd($.fn.carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()
    return this
  }
  
     $.fn.carousel.Constructor.prototype.keydown = function (e) {
       if (/input|textarea/i.test(e.target.tagName)) return
        var k = e.which || e.keyCode
        switch (k) {
          case 37:
          case 38: this.prev(); break
          case 39:
          case 40: this.next(); break
          default: return
        }

        /*
    
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
      */

      e.preventDefault()
      e.stopPropagation()
    }
    $(document).on('keydown.carousel.data-api', 'div[role=option]', $.fn.carousel.Constructor.prototype.keydown)
})(jQuery);