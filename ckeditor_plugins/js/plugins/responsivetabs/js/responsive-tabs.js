/**
 * @file
 * Responsive Tabs functionality.
 */

(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.responsiveTabs = {
    attach: function (context, settings) {

      // Create accordion functionality if the required elements exist is available.
      var $responsiveTabs = $('.responsive-tabs');

      // Get viewport width
      var viewportWidth = $(window).width();

      // Set height variables
      var $addToHeight = 25;
      var $currentHeight = -1;
      var $newHeight = -1;

      if ($responsiveTabs.length > 0) {
        // Create simple accordion mechanism for each tab.
        $responsiveTabs.each(function () {
          var $accordion = $(this);
          if ($accordion.hasClass('styled')) {
            return;
          }

          $accordion.children('dt:first').addClass('active');
          $accordion.children('dd:first').addClass('active');
          $accordion.children('dd:first').css('display', 'block');
          // Set height container based on viewport and height of content
          if (viewportWidth >= 768) {
            $currentHeight = $accordion.children('dd:first').height() + $addToHeight;
            $accordion.height($currentHeight);
          }

          // Turn the accordion tabs to links so that the content is accessible & can be traversed using keyboard.
          $accordion.children('dt').each(function () {
            var $tab = $(this);
            var tabText = $tab.text().trim();
            var toggleClass = $tab.hasClass('active') ? ' active' : '';
            $tab.html('<span class="responsive-tabs-toggle' + toggleClass + '"></span><a class="responsive-tabs-toggler" href="#">' + tabText + '</a>');
          });

          // Wrap the accordion in a div element so that quick edit function shows the source correctly.
          $accordion.addClass('styled').removeClass('responsive-tabs').wrap('<div class="responsive-tabs-container"></div>');

          // Fire an event so other modules know when the accordion has been created.
          $accordion.trigger('responsiveTabsAttached');
        });

        // Add click event to body once because quick edits & ajax calls might reset the HTML.
        $('body').once('responsiveTabsToggleEvent').on('click', '.responsive-tabs-toggler', function (e) {
          var $t = $(this).parent();
          var $parent = $t.parent();

          // Clicking on open element, close it.
          if ($t.hasClass('active')) {
            viewportWidth = $(window).width();

            // Close element functionlity depending on viewport
            if (viewportWidth < 768) {
              $t.removeClass('active');
              $t.next().slideUp();
            }
          }
          else {
            // Remove active classes.
            $parent.children('dt.active').removeClass('active').children('a').removeClass('active');
            $parent.children('dd.active').slideUp(function () {
              $(this).removeClass('active');

              // Set height container based onviewport and height of content
              if (viewportWidth >= 768) {
                $newHeight = $('dd.active').height() + $addToHeight;
                $('dl.styled').height($newHeight);
              }

            });

            $t.addClass('active');
            $t.next().slideDown(300).addClass('active');
          }

          e.preventDefault();
        });
      }
    }
  };
})(jQuery, Drupal, drupalSettings);
