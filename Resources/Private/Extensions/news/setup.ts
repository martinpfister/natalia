<INCLUDE_TYPOSCRIPT: source="FILE:EXT:news/Configuration/TypoScript/setup.txt">

plugin.tx_news.view {
    templateRootPaths.100 = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Private/Extensions/news/main/Templates/
    partialRootPaths.100 = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Private/Extensions/news/main/Partials/
    layoutRootPaths.100 = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Private/Extensions/news/main/Layouts/
    widget.Tx_News_ViewHelpers_Widget_PaginateViewHelper.templateRootPath = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Private/Extensions/news/main/
}