# ******************************************************************************
#    (c) 2012 Georg Ringer <typo3@ringerge.org>
#
#    You can redistribute it and/or modify it under the terms of the
#    GNU General Public License as published by the Free Software Foundation;
#    either version 2 of the License, or (at your option) any later version.
# ******************************************************************************

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:news/Configuration/TypoScript/setup.txt">



# **********************************************************
# Changes to EXT:news
# **********************************************************

plugin.tx_news {
    view {
        templateRootPath = EXT:template/Resources/Private/Extensions/news/main/Templates/
        partialRootPath = EXT:template/Resources/Private/Extensions/news/main/Partials/
        layoutRootPath = EXT:template/Resources/Private/Extensions/news/main/Layouts/
        widget.Tx_News_ViewHelpers_Widget_PaginateViewHelper.templateRootPath = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Private/Extensions/news/main/
    }

    settings {
        cssFile >
        list {
            paginate {
                insertAbove = 0
                insertBelow = 1
                itemsPerPage = 10
            }

            media {
                image {
                    maxWidth = 400
                    maxHeight = 350
                }
            }

            rss.channel {
                title = FSP
                description =
                link = http://redesign.psychologie.ch/
                language = de_CH
                copyright = FSP
                category =
                generator = TYPO3
            }
        }
        detail {
            media {
                image {
                    maxWidth = 900
                    maxHeight = 600
                }
            }
        }

    }
}

[globalVar = TSFE:id = 10]
    plugin.tx_news {
        view {
            templateRootPath = EXT:template/Resources/Private/Extensions/news/home/Templates/
        }
        settings {
            cropMaxCharacters = 100
            list {
                media.image {
                    maxWidth = 140
                    maxHeight = 120
                }
            }
        }
    }
[global]
[globalVar = TSFE:id = 22]
    plugin.tx_news {
        view {
            templateRootPath = EXT:template/Resources/Private/Extensions/news/home/Templates/
        }
        settings {
            cropMaxCharacters = 100
            list {
                media.image {
                    maxWidth = 140
                    maxHeight = 120
                }
            }
        }
    }
[global]

#-------------------------------------------------------------------------------
#    EXT:news Latest news
#-------------------------------------------------------------------------------

lib.extensions.news_latest = USER
lib.extensions.news_latest {
    userFunc = tx_extbase_core_bootstrap->run
    extensionName = News
    pluginName = Pi1

    switchableControllerActions {
        News {
            1 = list
        }
    }
    settings < plugin.tx_news.settings
    settings {
        topNewsRestriction = 1
        hidePagination = 1
        cropMaxCharacters = {$plugin.theme_configuration.extensions.news.latest.cropMaxCharacters}
        detailPid = {$plugin.theme_configuration.extensions.news.latest.detailPid}
        limit = {$plugin.theme_configuration.extensions.news.latest.limit}
        startingpoint = {$plugin.theme_configuration.extensions.news.latest.startingpoint}
        isLatest = 1
    }
}
