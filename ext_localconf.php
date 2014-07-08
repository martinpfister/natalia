<?php

if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
use TYPO3\CMS\Core\Utility\GeneralUtility;

$settings = unserialize($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]);


# Adding page and user tsconfig
# Parse files and replace ###PACKAGE_KEY### though!
$pageTSConfigAbsFileName = GeneralUtility::getFileAbsFileName('EXT:' . $_EXTKEY . '/Resources/Private/TsConfig/Page.ts');
$RTETSConfigAbsFileName = GeneralUtility::getFileAbsFileName('EXT:' . $_EXTKEY . '/Resources/Private/TsConfig/RTE.ts');
$pageTSConfig = GeneralUtility::getUrl($pageTSConfigAbsFileName);
$RTETSConfig = GeneralUtility::getUrl($RTETSConfigAbsFileName);
$pageTSConfig = str_replace('###PACKAGE_KEY###', $_EXTKEY, $pageTSConfig . $RTETSConfig);
ExtensionManagementUtility::addPageTSConfig($pageTSConfig);

$userTSConfigAbsFileName = GeneralUtility::getFileAbsFileName('EXT:' . $_EXTKEY . '/Resources/Private/TsConfig/User.ts');
$userTSConfig = GeneralUtility::getUrl($userTSConfigAbsFileName);
$userTSConfig = str_replace('###PACKAGE_KEY###', $_EXTKEY, $userTSConfig);
ExtensionManagementUtility::addUserTSConfig($userTSConfig);


# Register constants to use package key and version in TS later
ExtensionManagementUtility::addTypoScriptConstants('plugin.templatebootstrap.packageKey='. $_EXTKEY);
ExtensionManagementUtility::addTypoScriptConstants('plugin.templatebootstrap.packageVersion='. ExtensionManagementUtility::getExtensionVersion($_EXTKEY));

# Load constants & setup according to chosen environment
$environment = $settings['environment'];
if ($environment == 'local' || $environment == 'development' || $environment == 'production') {
    ExtensionManagementUtility::addTypoScriptConstants('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:'. $_EXTKEY .'/Resources/Private/TypoScript/constants-'. $environment .'.ts">');
    ExtensionManagementUtility::addTypoScriptSetup('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:'. $_EXTKEY .'/Resources/Private/TypoScript/setup-'. $environment .'.ts">');
}

# Register extconf variable to use in scripts
# (such as the layout provider hook)
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['Staempfli/TemplateBootstrap']['PackageKey'] = $_EXTKEY;
?>