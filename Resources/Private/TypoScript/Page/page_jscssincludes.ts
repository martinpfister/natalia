page {
    # CSS files to be included
    includeCSS {

        normalizer = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/css/lib/normalize.css
        normalizer.media = screen,print
        mainCSS = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/css/app.css
        mainCSS.media = screen,print
        fancybox = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/fancybox/jquery.fancybox.css
        fancyboxThumbnailHelper = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/fancybox/jquery.fancybox-thumbs.css
    }


    # JS libs header
    includeJSlibs {
        modernizr = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/modernizr/modernizr.js
    }


    # JS footer
    includeJSFooter {
        mainJS = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/app.js
    }

    # JS libs footer
    includeJSFooterlibs {
        jQuery = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/jquery-1.11.1.min.js
        jQueryCookie = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/jquery.cookie.js
        # Move/swipe events (swipe depends on move!)
        jQueryMove = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/jquery.event.move.js
        jQuerySwipe = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/jquery.event.swipe.js

        foundation = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/foundation.js
        navigation = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/foundation.navigation.js
        topbar = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/foundation.topbar.js

        clearing = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/foundation.clearing.js
        forms = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/foundation.forms.js
        alert = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/foundation.alerts.js
        buttons = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/foundation.buttons.js
        reveal = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/foundation.reveal.js

        offcanvas = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/jquery.offcanvas.js
        placeholder = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/jquery.placeholder.js

        tabs = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/jquery.foundation.tabs.js
        accordion = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/foundation/jquery.foundation.accordion.js

        fancybox = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/fancybox/jquery.fancybox.js
        fancyboxMediaHelper = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/fancybox/jquery.fancybox-media.js
        fancyboxThumbnailHelper = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/fancybox/jquery.fancybox-thumbs.js

        slickslider = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/jquery/slick/slick.js

        # Click delay removal for mobile browsers
        fastclick = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/fastclick/fastclick.js
        # Respond polyfill for IE<9
        respond = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/js/respond/respond.js

    } #includeJSFooterlibs

} #page



# **********************************************************
# Google analytics (conditionally)
# **********************************************************
[globalVar = LIT:1 = {$site.googleAnalytics}]
    page.includeJSFooter.googleanalytics = COA
    page.includeJSFooter.googleanalytics {
        stdWrap.wrap = <script type="text/javascript">|</script>

        10 = TEXT
        10.insertData = 1
        10.value (
		  var pluginUrl = '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', '{$site.googleAnalytics.account}']);
		  _gaq.push (['_gat._anonymizeIp']);
		  _gaq.push(['_require', 'inpage_linkid', pluginUrl]);
		  _gaq.push(['_trackPageview']);


		  (function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();
        )
    }
[global]