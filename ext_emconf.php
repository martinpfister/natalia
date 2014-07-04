<?php

########################################################################
# Extension Manager/Repository config file
#
# Manual updates:
# Only the data in the array - everything else is removed by next
# writing. "version" and "dependencies" must not be touched!
########################################################################

$EM_CONF[$_EXTKEY] = array(
	'title' => 'Website templatebootstrap',
	'description' => '',
	'category' => 'fe',
	'shy' => 0,
	'dependencies' => 'extbase,fluid',
	'conflicts' => '',
	'priority' => '',
	'loadOrder' => '',
	'module' => '',
	'state' => 'stable',
	'internal' => 0,
	'uploadfolder' => 0,
	'createDirs' => '',
	'modify_tables' => '',
	'clearCacheOnLoad' => 1,
	'lockType' => '',
	'author' => 'Stämpfli AG, Internet+Systeme Team 1',
	'author_email' => 'info@staempfli.com',
	'author_company' => '',
	'CGLcompliance' => '',
	'CGLcompliance_note' => '',
	'version' => '0.0.1',
	'_md5_values_when_last_written' => '',
	'constraints' => array(
		'depends' => array(
			'php' => '5.1.0-0.0.0',
			'typo3' => '6.1.0-0.0.0',
			'fluid' => '',
		),
		'conflicts' => array(
		),
		'suggests' => array(
			'news' => '1.3.0-',
		),
	),
	'suggests' => array(
	),
);

?>