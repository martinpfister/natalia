# **********************************************************
#    Extension constants
# **********************************************************
#<INCLUDE_TYPOSCRIPT: source="FILE:./../Extensions/news/constants.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:./../Extensions/indexed_search/constants.ts">


# **********************************************************
#    Company constants
# **********************************************************
company {
    name = natalia ganzoni
    street = 44
    pobox =
    city = 9999
    phone = 099 999 99 99
    email = natalia.ganzoni@gmail.com
}


# **********************************************************
#    Site settings
# **********************************************************
site {

    url = http://nataliaganzoni.ausruf.ch

    enableRealURL = 1
    enableSocialMediaMetaTags = 1

    # Page title
    pageTitlePrefix < company.name
    pageTitlePrefix := appendString( -)
    pageTitleSuffix =

    # Languages
    languageUids = 0,1,2
    languageLabels = Deutsch |*| Français |*| Italiano

    # Compress / merge CSS / JS
    compressAndMergeAssets = 1

    # Google analytics
    googleAnalytics = 0
    googleAnalytics.account = UA-XXXXXX

    # Pids that may be used in various places
    # such as skiplinks, meta menus or ext configurations
    # Used for skiplinks: home, navigation, content, contact, sitemap, search, optionalSkiplink[1-4]
    pageUids {
        home = 1
        navigation = #navigation
        content = #content
        contact =
        sitemap =
        search =
        optionalSkiplink1 =
        optionalSkiplink2 =
        optionalSkiplink3 =
        optionalSkiplink4 =
    }
}


# **********************************************************
#    Max image widths
# **********************************************************
styles.content.imgtext.maxW = 1200