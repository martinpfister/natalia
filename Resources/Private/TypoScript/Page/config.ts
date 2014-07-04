page {
    # page.config overrides default settings from indexed_search/ext_typoscript_setup.txt
    config {
        index_enable = 1
        index_externals = 1
    }
}


config {
    doctype = html5
    xmlprologue = none
    xhtml_cleaning = all
    disablePrefixComment = 1
    meaningfulTempFilePrefix = 100
    noPageTitle = 2

    # remove inline CSS/JS to external
    removeDefaultJS = external
    inlineStyle2TempFile = 1
    compressJs = {$site.compressAndMergeAssets}
    compressCss = {$site.compressAndMergeAssets}
    concatenateJs = {$site.compressAndMergeAssets}
    concatenateCss = {$site.compressAndMergeAssets}

    # RealURL
    simulateStaticDocuments = 0
    baseURL = {$site.url}
    absRefPrefix = {$site.url}
    tx_realurl_enable = {$site.enableRealURL}
    prefixLocalAnchors = all
    prefixLocalAnchors >

    # Spam
    spamProtectEmailAddresses = -2
    spamProtectEmailAddresses_atSubst = <script type="text/javascript">document.write('@');</script>
    spamProtectEmailAddresses_lastDotSubst = <script type="text/javascript">document.write('.');</script>

    # check for valid L-params
    linkVars = L(0-10)
    #uniqueLinkVars = 1

    # Links & content sharing across domains
    typolinkEnableLinksAcrossDomains = 1
    typolinkCheckRootline = 1
    content_from_pid_allowOutsideDomain = 1

    # Cache
    cache_clearAtMidnight = 1
    cache_period = 1200
    sendCacheHeaders = 1

    headerComment = Stämpfli AG // www.staempfli.com // Package version {$plugin.templatebootstrap.packageVersion}


    #HTML tag
    htmlTag_stdWrap {
        setContentToCurrent = 1
        cObject = TEXT
        cObject.value (
            <!--[if IE 8]><html class="no-js lt-ie9"> <![endif]-->
            <!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
        )
    }
}