<?php if (!defined('APPLICATION')) exit;

$PluginInfo['epiceditor'] = array(
    'Name'        => "EpicEditor",
    'Description' => "An editor plugin for Vanilla that uses EpicEditor, an embeddable JavaScript Markdown editor written by Oscar Godson.",
    'Version'     => '1.1.0',
    'Author'      => "Kasper Kronborg Isager",
    'AuthorEmail' => 'kasperisager@gmail.com',
    'AuthorUrl'   => 'https://github.com/kasperisager',
    'License'     => 'MIT',
    'RequiredApplications' => array('Vanilla' => '2.1.x')
);

/**
 * EpicEditor Plugin
 *
 * @author    Kasper Kronborg Isager <kasperisager@gmail.com>
 * @copyright 2014 (c) Kasper Kronborg Isager
 * @license   MIT
 * @package   EpicEditor
 * @since     1.0.0
 */
class EpicEditorPlugin extends Gdn_Plugin
{
    /**
     * Initialize EpicEditor
     *
     * @param Gdn_Form $sender
     */
    public function Gdn_Form_beforeBodyBox_handler($sender)
    {
        // Make sure that Markdown is used
        $sender->setValue('Format', 'Markdown');

        // Remove jQuery Autogrow as it interfeers with the editor
        Gdn::controller()->removeJsFile('jquery.autogrow.js');

        // Add the assets we need for the editor
        Gdn::controller()->addJsFile('editor.min.js', 'plugins/epiceditor');
    }
}
