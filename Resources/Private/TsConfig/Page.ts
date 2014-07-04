#-------------------------------------------------------------------------------
#  Pages
#-------------------------------------------------------------------------------
TCEFORM.pages {

    # Page alias
    alias.disabled = 1

    # Categories
    categories.disabled = 1

    # Page type "backend user section" (remove)
    doktype.removeItems = 6

    # Frontend layouts
    # (disabled per default)
    layout {
        disabled = 1

        # Purge all items, only keep "default / inherit" (displayed as empty option field)
        #keepItems = 0
        #addItems.1 = LLL:EXT:###PACKAGE_KEY###/Resources/Private/Language/Backend.xlf:frontend_layout.examplelayout
    }

    # Backend layouts
    # Remove "none"
    backend_layout.removeItems = -1
    backend_layout_next_level.removeItems = -1

    # "new until"
    newUntil.disabled = 1

    # Author
    author.disabled = 1
    author_email.disabled = 1

    # Last updated
    lastUpdated.disabled = 1
}


#-------------------------------------------------------------------------------
#  Content elements
#-------------------------------------------------------------------------------
TCEFORM.tt_content {

    # Header position
    header_position.disabled = 1

    # Date
    date.disabled = 1

    # Categories
    categories.disabled = 1

    # Only allow headers 2, 3, and 4
    header_layout {
        keepItems = 2,3,4
    }

    # Content element layouts
    layout.disabled = 0
    layout.keepItems = 0,1
    layout.altLabels.1 = LLL:EXT:###PACKAGE_KEY###/Resources/Private/Language/Backend.xlf:tt_content.layout.examplelayout

    # Frames
    section_frame {
        label = LLL:EXT:###PACKAGE_KEY###/Resources/Private/Language/Backend.xlf:tt_content.section_frames

        # Purge all
        keepItems =

        # Add empty as well as responsive classes
        addItems {
            0 =
            20 = LLL:EXT:###PACKAGE_KEY###/Resources/Private/Language/Backend.xlf:tt_content.section_frame.small-only
            21 = LLL:EXT:###PACKAGE_KEY###/Resources/Private/Language/Backend.xlf:tt_content.section_frame.medium-only
            22 = LLL:EXT:###PACKAGE_KEY###/Resources/Private/Language/Backend.xlf:tt_content.section_frame.medium-up
            23 = LLL:EXT:###PACKAGE_KEY###/Resources/Private/Language/Backend.xlf:tt_content.section_frame.large-only
            24 = LLL:EXT:###PACKAGE_KEY###/Resources/Private/Language/Backend.xlf:tt_content.section_frame.large-up
            25 = LLL:EXT:###PACKAGE_KEY###/Resources/Private/Language/Backend.xlf:tt_content.section_frame.xlarge-only
            26 = LLL:EXT:###PACKAGE_KEY###/Resources/Private/Language/Backend.xlf:tt_content.section_frame.xlarge-up
            27 = LLL:EXT:###PACKAGE_KEY###/Resources/Private/Language/Backend.xlf:tt_content.section_frame.xxlarge-up
        }
    }
}

#-------------------------------------------------------------------------------
# Defaults for new elements
#-------------------------------------------------------------------------------
TCAdefaults {
    tt_content {
        header_layout = 2
    }
}

#-------------------------------------------------------------------------------
#  Permissions for new pages
#-------------------------------------------------------------------------------
TCEMAIN.permissions {
    # Owner
    userid = 1
    # Group
    groupid = 1
    # Permissions
    user = show, editcontent, edit, new, delete
    group = show, editcontent, edit, new, delete
}

#-------------------------------------------------------------------------------
#  Control elements
#-------------------------------------------------------------------------------
mod {
    # Always show "extended view"
    file_list.enableDisplayBigControlPanel = activated
    web_list.enableDisplayBigControlPanel = activated

    # Hide "Quick Edit" & "Page Information" in dropdown on the very top of a page
    web_layout.menu.function {
        0 = 0
        3 = 0
    }
}