<?php
namespace Staempfli\TemplateBootstrap\Utility;

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
use TYPO3\CMS\Core\Utility\GeneralUtility;


class PostInstallFileHandler {

    /**
     * Creates or replaces robots.txt on save
     *
     * @param $newConfiguration
     * @param $configurationController
     */
    public function handleRobotsTxt($newConfiguration, $configurationController) {
        global $BE_USER;

        $packageKey                 = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['Staempfli/TemplateBootstrap']['PackageKey'];
        $robotsTemplateStartMarker  = '# Inserted by ext. '. $packageKey .' - start';
        $robotsHint                 = '# (may be overwritten by ext manager as long as the enclosing comments persist)';
        $robotsTemplateEndMarker    = '# Inserted by ext. '. $packageKey .' - end';
        $environment = trim($newConfiguration['environment']['value']);

        // Quit, if this feature is not enabled at all
        $writeRobots = boolval($newConfiguration['writerobots']['value']);
        if(!$writeRobots) { return; }

        // If no environment has been chosen, write log and exit.
        if (empty($environment) || $environment == 'none') {
            $BE_USER->simplelog('(extension configuration) No environment has been chosen. No robots file written.', $packageKey, 0);
            return;
        }

        $robotsPath = GeneralUtility::getFileAbsFileName('robots.txt');
        $robotsTemplatePath = GeneralUtility::getFileAbsFileName('EXT:'. $packageKey .'/Initialisation/robots/robots-'. $newConfiguration['environment']['value'] .'.txt');

        // Load current robots.txt content
        $replaceRobots = false;
        $robotsExists = is_file($robotsPath);

        // Write robots, txt if it doesn't exist yet.
        if (!$robotsExists) {
            $replaceRobots = true;
        // Decide whether to write robots, if the whole content
        } else {
            $robotsContent = trim(file_get_contents($robotsPath));
            $markerBeginPos = strpos($robotsContent, $robotsTemplateStartMarker);
            $markerEndPos = strrpos($robotsContent, $robotsTemplateEndMarker);
            if (empty($robotsContent) || ($markerBeginPos === 0 && $markerEndPos !== false)) {
                if (empty($robotsContent) || ($markerEndPos + strlen($robotsTemplateEndMarker) == strlen($robotsContent))) {
                    $replaceRobots = true;
                }
            }
        } // rewrite robots, if empty or whole content wrapped by markers

        // Replacing robots content
        if ($replaceRobots) {

            // Check existence of template file
            $robotsTemplateExists = is_file($robotsTemplatePath);
            if (!$robotsTemplateExists) {
                $BE_USER->simplelog('(extension configuration) Template for robots.txt does not exist ('. $robotsTemplatePath .')!.', $packageKey, 2);
                return;
            }

            // Generate content
            $newRobotsContent = $robotsTemplateStartMarker . chr(10)
                . $robotsHint . chr(10)
                . file_get_contents($robotsTemplatePath) . chr(10)
                . $robotsTemplateEndMarker;

            // Write file
            $written = GeneralUtility::writeFile($robotsPath, $newRobotsContent);

            // Write log
            if ($written) {
                $BE_USER->simplelog('(extension configuration) Robots file has been successfully changed.', $packageKey, 0);
            } else {
                $BE_USER->writeLog('(extension configuration) Attempted to change robots file, but failed!', $packageKey, 2);
            }
        } // if replace robots.txt content

        return;

    } // function handleRobotsTxt
} // class PostInstallFileHandler

?>