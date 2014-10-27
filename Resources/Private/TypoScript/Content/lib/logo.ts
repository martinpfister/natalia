#-------------------------------------------------------------------------------
#    Logo
#-------------------------------------------------------------------------------
lib.logo = COA
lib.logo {
    10 = IMAGE
    10 {
        file = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Public/Template/images/logo.png
        altText = {LLL:EXT:{$plugin.templatebootstrap.packageKey}/Resources/Private/Language/locallang.xlf:logo} {$company.name}
        altText.insertData = 1
        stdWrap.typolink {
            title.data = LLL:EXT:{$plugin.templatebootstrap.packageKey}/Resources/Private/Language/locallang.xlf:home
            parameter = {$site.url}
            ATagParams = id="logo"
        }
    }
}