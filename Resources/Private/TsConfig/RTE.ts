# Own text/block classes
RTE.classes {
    examplestyle {
        name = LLL:EXT:###PACKAGE_KEY###/Resources/Private/Language/Backend.xlf:rte.classes.examplestyle
        # Hide in pop-up selector
        noShow = 1
    }
}


RTE.default {
    contentCSS = EXT:###PACKAGE_KEY###/Resources/Public/Backend/RTE.css
    showButtons = orderedlist,unorderedlist,bold,italic,subscript,superscript,link,unlink,blockstyle,textstyle,chMode,removeformat
    keepButtonGroupTogether = 1
    contextMenu.disabled = 1

    # Show classes, defined in RTE.css that aren't assigned to a specific tag (i.e. ".myclass").
    buttons.blockstyle.showTagFreeClasses = 1
    buttons.textstyle.showTagFreeClasses = 1

    # Setting allowed classes
    buttons.blockstyle.tags {
        div.allowedClasses = examplestyle
        table.allowedClasses =
        td.allowedClasses =
        p.allowedClasses = examplestyle
    }

    # Copy allowed classes for textstyle
    buttons.textstyle.tags {
        span.allowedClasses = examplestyle
    }
}


# RTE FE editing
RTE.default.FE < RTE.default
RTE.default.FE.showStatusBar = 0
RTE.default.FE.userElements >
RTE.default.FE.userLinks >