# **********************************************************
# Content element rendering
# **********************************************************
tt_content {

    # **********************************************************
    # "to top" link
    stdWrap.innerWrap2.cObject = COA
    stdWrap.innerWrap2.cObject {
        10 = TEXT
        10 {
            value = |
        }

        20 = TEXT
        20 {
            wrap = <p class="linkToTop no-print">|</p>
            data = LLL:EXT:css_styled_content/pi1/locallang.xml:label.toTop
            typolink {
                parameter.dataWrap = {getIndpEnv:TYPO3_REQUEST_URL}#top
            }
        }
    }


    # **********************************************************
    # Lightbox
    image.20.1.imageLinkWrap {
        JSwindow = 0
        directImageLink = 1
        linkParams.ATagParams {
            dataWrap = class= "lightbox" rel="lightbox{field:uid}"
        }
    }


    # **********************************************************
    # Image column wraps
    # Implement foundation's "block grid"
    image.20 {

        # Handle columns
        addClassesCol.override >
        rendering.noCaption {
            columnStdWrap.wrap = <li class="csc-textpic-imagecolumn###CLASSES###">|</li>

            rowStdWrap >
            rowStdWrap.wrap = |
            rowStdWrap.cObject = CASE
            rowStdWrap.append = TEXT
            rowStdWrap.append.value = |</ul>
            rowStdWrap.cObject {

                stdWrap.noTrimWrap = |<ul class="csc-textpic-imagerow |">|
                key.field = imagecols
                1 = TEXT
                1.value = small-block-grid-1
                2 = TEXT
                2.value = small-block-grid-1 medium-block-grid-2
                3 = TEXT
                3.value = small-block-grid-1 medium-block-grid-2 large-block-grid-3
                4 = TEXT
                4.value = small-block-grid-1 medium-block-grid-2 large-block-grid-4
                5 = TEXT
                5.value = small-block-grid-1 medium-block-grid-2 large-block-grid-5
                6 = TEXT
                6.value = small-block-grid-1 medium-block-grid-2 large-block-grid-6
                7 = TEXT
                7.value = small-block-grid-1 medium-block-grid-2 large-block-grid-7
                8 = TEXT
                8.value = small-block-grid-1 medium-block-grid-2 large-block-grid-8
            }
            noRowsStdWrap < .rowStdWrap
            noRowsStdWrap.cObject.stdWrap.noTrimWrap = |<ul class="csc-textpic-imagerow csc-textpic-imagerow-none |">|
            lastRowStdWrap < .rowStdWrap
            lastRowStdWrap.cObject.stdWrap.noTrimWrap = |<ul class="csc-textpic-imagerow csc-textpic-imagerow-last |">|

        }
        rendering.splitCaption.rowStdWrap.wrap < .rendering.noCaption.rowStdWrap
        rendering.splitCaption.noRowsStdWrap.wrap < .rendering.noCaption.noRowsStdWrap
        rendering.splitCaption.lastRowStdWrap.wrap < .rendering.noCaption.lastRowStdWrap
        rendering.splitCaption.columnStdWrap.wrap < .rendering.noCaption.columnStdWrap.wrap

        # Handle rows
        imageColumnStdWrap.dataWrap = <li class="csc-textpic-imagecolumn" style="width:{register:columnwidth}px;">|</li>
    }


    # **********************************************************
    # COA for content element classes
    # based on section_frame and responsive display classes
    stdWrap.innerWrap.cObject.default.20.10 >
    stdWrap.innerWrap.cObject.default.20.10 = COA
    stdWrap.innerWrap.cObject.default.20.10 {
        # Default content element class
        5 = TEXT
        5.value = element
        5.noTrimWrap = || |

        10 = TEXT
        10.value = {field:CType}-element
        10.insertData = 1
        10.noTrimWrap = || |

        # Content element layout class
        15 = TEXT
        15.if.value = 0
        15.if.isGreaterThan.field = layout
        15.value = layout-{field:layout}
        15.value.insertData = 1
        15.noTrimWrap = || |

        # Placeholder for responsive display class
        20 = TEXT
    }


    # Add responsive display classes
    # Hierarchy (X.20.10.20):
    #   X: "content_frame" number
    #       20: native COA for element tag creation
    #           10: COA for element classes (TYPO3 would add TEXT element w/ class "csc-default" natively)
    #               20: Responsive display class (see stdWrap.innerWrap.cObject.default further up)
    stdWrap.innerWrap.cObject {
        20 =< tt_content.stdWrap.innerWrap.cObject.default
        20.20.10.20.value = show-for-small-only
        21 =< tt_content.stdWrap.innerWrap.cObject.default
        21.20.10.20.value = show-for-medium-only
        22 =< tt_content.stdWrap.innerWrap.cObject.default
        22.20.10.20.value = show-for-medium-up
        23 =< tt_content.stdWrap.innerWrap.cObject.default
        23.20.10.20.value = show-for-large-only
        24 =< tt_content.stdWrap.innerWrap.cObject.default
        24.20.10.20.value = show-for-large-up
        25 =< tt_content.stdWrap.innerWrap.cObject.default
        25.20.10.20.value = show-for-xlarge-only
        26 =< tt_content.stdWrap.innerWrap.cObject.default
        26.20.10.20.value = show-for-xlarge-up
        27 =< tt_content.stdWrap.innerWrap.cObject.default
        27.20.10.20.value = show-for-xxlarge-up
    }
}

# **********************************************************
# Remove csc-firstHeader header classes
# (will not work with nested elements anyway)
# **********************************************************
lib.stdheader.3.headerClass.cObject.20 >