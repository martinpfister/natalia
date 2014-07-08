########################################################################
# Setup for new sites
########################################################################
- Make sure the new extension key (i.e. directory name) differs from "templatebootstrap"!
- Make sure .git/config DOES NOT refer to "templatebootstrap" but to *your* GIT repo.
- Change extension name in ext_emconf.php
- Activate extension in the extension manager
- Choose "Site environment" in extension configuration accordingly.
- Install extension "realurl"
- RealURL: Set "basic.configFile" (in ext conf) to
    "typo3conf/ext/[YOUR NEW EXTENSION KEY]/Resources/Private/Extensions/realurl/realurl_conf.php"
- Install extension "gridelements"
- Run "npm install" and then "grunt" from "typo3conf/ext/[YOUREXTENSIONKEY]/Resources/Public/Template" in order
    to install node modules and get going with SCSS.
- Start developing.