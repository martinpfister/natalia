#-------------------------------------------------------------------------------
#  User TSConfig
#-------------------------------------------------------------------------------
options {
    # Allow creation of new folders in Element Browser
    createFoldersInEB = 1

    # No alert box ad type change
    alertPopups = 254

    # Page tree
    pageTree {
        showPathAboveMounts = 1
        showPageIdWithTitle = 1

        # Shows the navigation title instead of the title if available
        showNavTitle = 1

        # Shows the domain name as a suffix of the title if available
        showDomainNameWithTitle = 1

      	# Disables the left click on an icon that opens the contextmenu
        disableIconLinkToContextmenu = 0

        # Disable the filter feature in the top panel
        # hideFilter = 1

        # List of pages with a dedicated color for permanent highlighting in the tree
        #backgroundColor.<pid> = red
        
    }

    # Available clear cache-buttons
    # (always available for admins)
    clearCache {
        pages = 1
        all = 1
    }
}


#-------------------------------------------------------------------------------
#  FE admin panel
#-------------------------------------------------------------------------------
admPanel {
    enable.preview = 1
    enable.edit = 1
    enable.info = 1
}
