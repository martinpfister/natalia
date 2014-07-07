########################################################################
# Setup for new sites
########################################################################
- Make sure the new extension key (i.e. directory name) differs from "templatebootstrap"!
- Make sure .git/config DOES NOT refer to "templatebootstrap" but to your GIT repo.
- Change extension name in ext_emconf.php
- Activate extension in the extension manager
- Install extension "realurl"
- RealURL: Set "basic.configFile" (in ext conf) to
    "typo3conf/ext/[YOUREXTENSIONKEY]/Resources/Private/Extensions/realurl/realurl_conf.php"
- Install extension "gridelements"
- Include static templates:
    - ONE of the three static ts of your extension - most probably the "local" one
      (it will be named after your extension key and thus appear as "yourextension LOCAL (yourextension)")
- Run "npm install" and then "grunt" from "typo3conf/ext/[YOUREXTENSIONKEY]/Resources/Public/Template" in order
    to install node modules and get going with SCSS.
- Start developing.