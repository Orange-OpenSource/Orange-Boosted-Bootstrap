// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (http://getbootstrap.com)
 * Copyright 2011-2016 The Bootstrap Authors
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global Clipboard, anchors */

!function ($) {
  'use strict';

  $(function () {

    // Tooltip and popover demos
    $('.tooltip-demo').tooltip({
      selector: '[data-toggle="tooltip"]',
      container: 'body'
    })

    $('[data-toggle="popover"]').popover()

    // Demos within modals
    $('.tooltip-test').tooltip()
    $('.popover-test').popover()

    // Indeterminate checkbox example
    $('.bd-example-indeterminate [type="checkbox"]').prop('indeterminate', true)

    // Disable empty links in docs examples
    $('.bd-example [href="#"]').click(function (e) {
      e.preventDefault()
    })

    // Modal relatedTarget demo
    $('#exampleModal').on('show.bs.modal', function (event) {
      var $button = $(event.relatedTarget)      // Button that triggered the modal
      var recipient = $button.data('whatever')  // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var $modal = $(this)
      $modal.find('.modal-title').text('New message to ' + recipient)
      $modal.find('.modal-body input').val(recipient)
    })

    // Insert copy to clipboard button before .highlight
    $('.highlight').each(function () {
      var btnHtml = '<div class="bd-clipboard"><span class="btn-clipboard" title="Copy to clipboard">Copy</span></div>'
      $(this).before(btnHtml)
      $('.btn-clipboard').tooltip()
    })

    var clipboard = new Clipboard('.btn-clipboard', {
      target: function (trigger) {
        return trigger.parentNode.nextElementSibling
      }
    })

    clipboard.on('success', function (e) {
      $(e.trigger)
        .attr('title', 'Copied!')
        .tooltip('_fixTitle')
        .tooltip('show')
        .attr('title', 'Copy to clipboard')
        .tooltip('_fixTitle')

      e.clearSelection()
    })

    clipboard.on('error', function (e) {
      var fallbackMsg = /Mac/i.test(navigator.userAgent) ? 'Press \u2318 to copy' : 'Press Ctrl-C to copy'

      $(e.trigger)
        .attr('title', fallbackMsg)
        .tooltip('_fixTitle')
        .tooltip('show')
        .attr('title', 'Copy to clipboard')
        .tooltip('_fixTitle')
    })

  })

}(jQuery)

;(function () {
  'use strict';

  anchors.options.placement = 'left';
  anchors.add('.bd-content > h1, .bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5')
})();

!function ($) {
  'use strict';

  $(function () {

    $('[href="#"]').click(function (e) {
      e.preventDefault()
    });

    $(document).ready(function () {

      // init megamenu demo
      $('.mega-menu.panel').megamenu();

      $(window).scroll(function () {
        if ($(this).scrollTop() > window.innerHeight) {
          $('.scroll-top').fadeIn(function () {
          });
        } else {
          $('.scroll-top').fadeOut();
        }
      });

      $('.scroll-top').click(function () {

        $('html, body').animate({
          scrollTop: 0
        }, 600, function () {
          $('a.navbar-brand:visible').first().focus();
        });

        return false;
      });
    });
  })
}(jQuery);

(function () {
  'use strict';

  function isElementInViewport(el, topOffset) {
    var rect = el.getBoundingClientRect();

    if (!topOffset){ topOffset = 0; }

    return rect.bottom > topOffset &&
           rect.right > 0 &&
           rect.left < (window.innerWidth || document. documentElement.clientWidth) &&
           rect.top < (window.innerHeight || document. documentElement.clientHeight);
  }

  function onSidebarVisibilityChange(el) {
    if (el) {
      return function () {

        var sidebar = document.getElementById('docsNavbarContent');

        if (isElementInViewport(el)) {
          sidebar.style.position = 'static';
          sidebar.style.top = 'auto';
        } else {
          sidebar.style.position = 'fixed';
          sidebar.style.top = '0';
        }
      };
    }
  }

  function onFooterVisibilityChange(el, scrollTopElm, defaultPos) {
    if (el && window.innerWidth > 768) {
      return function () {

        var footerRect = el.getBoundingClientRect();

        if (isElementInViewport(el)) {
          scrollTopElm.style.bottom = (window.innerHeight - footerRect.top + parseInt(defaultPos)) + 'px';
        } else {
          scrollTopElm.style.bottom = defaultPos;
        }
      };
    }
  }

  window.onload = function () {
    var pageHeader = document.getElementById('page_header');
    var pageWatcher = onSidebarVisibilityChange(pageHeader);
    var findScrollTopElm = document.getElementsByClassName('scroll-top');
    var scrollTopElm = findScrollTopElm.item(0);
    var scrollTopStyles;
    var scrollTopDefaultBottom;
    var findFooter = document.getElementsByTagName('footer');
    var footerELm = findFooter.item(findFooter.length - 1);
    var footerWatcher;

    if (scrollTopElm) {
      scrollTopStyles = window.getComputedStyle(scrollTopElm, null);
      scrollTopDefaultBottom = scrollTopStyles.bottom;
      footerWatcher = onFooterVisibilityChange(footerELm, scrollTopElm, scrollTopDefaultBottom);
    }

    if (window.addEventListener) {
      if (window.innerWidth > 768) {
        addEventListener('scroll', pageWatcher, false);
      }
      if (footerWatcher) {addEventListener('scroll', footerWatcher, false);}
    } else if (window.attachEvent)  {
      attachEvent('onscroll', pageWatcher);
      if (footerWatcher) {attachEvent('scroll', footerWatcher);}
    }
  };
})();
