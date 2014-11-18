/************************************************************
 *     doubleTapMenu
 *     @author Stämpfli Webteam / 18.11.2014
 *     Requires: jQuery, Modernizr
 *
 *     Usage:
 *     $('#yourelement').doubleTapMenu();
 *                  or
 *     $('#yourelement').doubleTapMenu({
 *          tapClassName:'yourOwnTouchedClass'
 *      });
 *
 *     What it does:
 *     1.   Appends class "touched" (or user defined class in
 *          options) to parent menu item on first click, if
 *          it is a touch device. Prevents default behavior
 *          of link at the same time.
 *     2.   Respects default behavior of link on second click
 *          or removes "touched" class if any other
 *          item has been clicked/touched.
 *
 *      Visibility etc. needs to be handled via CSS!
 ************************************************************/
(function($) {
    $.fn.doubleTapMenu = function(options) {

        var menu = this;
        var defaultOptions = {tapClassName:'touched'}
        var settings = $.extend( {}, defaultOptions, options );

        // Catch click events
        $(document).bind('click', {menu:menu, settings:settings}, function(event){

            // Only respect click events for touch-enabled devices
            // and if touched element is a link as well as a sub element
            // of the passed reference.
            if (!Modernizr.touch || !$(event.target).is('a') || $(event.target).parents(menu).length < 1) {
                $(menu).find('.'+ settings.tapClassName).removeClass(settings.tapClassName);
                return true;
            }

            var menuElement = $(event.target).closest('li');
            event.stopPropagation();
            var hasSubmenu = $(menuElement).children('ul').length;

            // Add class and prevent click default behavior (redirect to new
            // page), if this link has been clicked the first time.
            if (hasSubmenu > 0 && !$(menuElement).hasClass(settings.tapClassName)) {
                event.preventDefault();
                $(menu).find('.'+ settings.tapClassName).removeClass(settings.tapClassName);
                $(menuElement).parents('li').addClass(settings.tapClassName);
                $(menuElement).addClass(settings.tapClassName);
            } else {
                return true;
            }
        });

        // Return this same object for chained actions / processing
        return this;
    };
}(jQuery));