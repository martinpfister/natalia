#-------------------------------------------------------------------------------
#    Logo
#-------------------------------------------------------------------------------
lib.logo = COA
lib.logo {
    10 = IMAGE
    10 {
        file = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/images/logo.png
        altText = {$company.name}
        stdWrap.typolink {
            title.data = LLL:EXT:{$plugin.templatebootstrap.packageKey}/Resources/Private/Language/locallang.xlf:home
            parameter = {$site.url}
            ATagParams = id="logo"
        }
    }
}