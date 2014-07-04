<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}
use \TYPO3\CMS\Core\Utility\GeneralUtility;
use \TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
use \TYPO3\CMS\Backend\Sprite\SpriteManager;

/***************
 * Embed static TS
 */
ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/Production', $_EXTKEY .' PRODUCTION');
ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/Development', $_EXTKEY .' DEVELOPMENT');

/* Embed constants & setup for prod environment */
ExtensionManagementUtility::addTypoScript($_EXTKEY, 'constants', '
	<INCLUDE_TYPOSCRIPT: source="FILE:EXT:'. $_EXTKEY .'/Resources/Private/TypoScript/constants-production.ts">', $_EXTKEY .'/Configuration/TypoScript/Production/');
ExtensionManagementUtility::addTypoScript($_EXTKEY, 'setup', '
	<INCLUDE_TYPOSCRIPT: source="FILE:EXT:'. $_EXTKEY .'/Resources/Private/TypoScript/setup-production.ts">', $_EXTKEY .'/Configuration/TypoScript/Production/');

/* Embed constants & setup for dev environment */
ExtensionManagementUtility::addTypoScript($_EXTKEY, 'constants', '
	<INCLUDE_TYPOSCRIPT: source="FILE:EXT:'. $_EXTKEY .'/Resources/Private/TypoScript/constants-development.ts">', $_EXTKEY .'/Configuration/TypoScript/Development/');
ExtensionManagementUtility::addTypoScript($_EXTKEY, 'setup', '
	<INCLUDE_TYPOSCRIPT: source="FILE:EXT:'. $_EXTKEY .'/Resources/Private/TypoScript/setup-development.ts">', $_EXTKEY .'/Configuration/TypoScript/Development/');



/***************
 * Backend skinning
 */
$GLOBALS['TBE_STYLES']['logo_login'] = '/typo3conf/ext/' . $_EXTKEY . '/Resources/Public/Backend/Skin/img/logo_login.png';
$TBE_STYLES['htmlTemplates']['EXT:backend/Resources/Private/Templates/login.html'] = ExtensionManagementUtility::extRelPath($_EXTKEY) . 'Resources/Public/Backend/Skin/login.html';

$GLOBALS['TBE_STYLES']['skins'][$_EXTKEY .'_skin'] = array();
$GLOBALS['TBE_STYLES']['skins'][$_EXTKEY .'_skin']['name'] = $_EXTKEY .' skin';
$GLOBALS['TBE_STYLES']['skins'][$_EXTKEY .'_skin']['stylesheetDirectories'] = array(
    'structure' => 'EXT:'. $_EXTKEY .'/Resources/Public/Backend/Skin/',
    'visual' => 'EXT:'. $_EXTKEY .'/Resources/Public/Backend/Skin/',
);

/***************
 * BackendLayoutDataProvider
 */
GeneralUtility::requireOnce(ExtensionManagementUtility::extPath($_EXTKEY) . 'Classes/Hooks/Provider/BackendLayoutDataProvider.php');
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['BackendLayoutDataProvider'][$_EXTKEY] = 'Staempfli\TemplateBootstrap\Hooks\Provider\BackendLayoutDataProvider';


/***************
 * Add icons to the page tree
 */
$availableIcons = array('system', 'layouts', 'menufolder');
foreach($availableIcons as $icon) {
	SpriteManager::addTcaTypeIcon(
		'pages',
		'contains-' . $icon,
		ExtensionManagementUtility::extRelPath($_EXTKEY) . 'Resources/Public/Backend/Icons/PageTree/' . $icon . '.png');

    $GLOBALS['TCA']['pages']['columns']['module']['config']['items'][] = array(
		0 => 'LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/Backend.xml:pagetree.page_contains_' . $icon ,
		1 => $icon,
	);
}

?>