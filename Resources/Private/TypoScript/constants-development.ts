<INCLUDE_TYPOSCRIPT: source="FILE:./constants-production.ts">
# *******************************************************************
# DEV constants
# Overwrite values set in production constants.
# *******************************************************************
site {
    url = http://{$plugin.templatebootstrap.packageKey}.dev.staempfli.com/
    enableRealURL = 0
    compressAndMergeAssets = 0
}