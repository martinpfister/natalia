# **********************************************************
#    Extension constants
# **********************************************************
<INCLUDE_TYPOSCRIPT: source="FILE:./../Extensions/news/constants.ts">


# **********************************************************
#    Company constants
# **********************************************************
company {
    name = Muster AG
    street = Musterstrasse 44
    pobox =
    city = 9999 Musterhausen
    phone = 099 999 99 99
    email = muster@musterag.com
}


# **********************************************************
#    Site settings
# **********************************************************
site {

    url = http://www.site.com
    enableRealURL = 1

    # Page title
    pageTitlePrefix < company.name
    pageTitlePrefix := appendString( -&nbsp;)
    pageTitleSuffix =

    # Languages
    languageUids = 0,1,2
    languageLabels = Deutsch |*| Français |*| Italiano

    # Compress / merge CSS / JS
    compressAndMergeAssets = 1

    # Google analytics
    googleAnalytics = 0
    googleAnalytics.account = UA-XXXXXX
}


# **********************************************************
#    Max image widths
# **********************************************************
styles.content.imgtext.maxW = 1200