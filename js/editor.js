;(function ($, window, document, undefined) {

  window.Editor = window.Editor || function (options) {
    this.options = {
      textarea: '.js-text-box'
    };

    if (options) {
      $.extend(this.options, options);
    }
  };

  Editor.prototype.attachEditor = function (textarea) {
    var $textarea = $(textarea);

    // If an editor is already attached, bail out
    if ($textarea.data('editor')) return;

    // Create an element that we can attach the editor to
    var $container = $('<div class="js-editor"></div>');

    // Add the editor element after the text box
    $textarea.after($container);

    var editor = new EpicEditor({
      container : $container[0]
    , textarea  : textarea
    , parser    : marked
    , autogrow  : true
    , basePath  : gdn.url('/plugins/epiceditor')
    , theme     : {
        base    : '/design/editor.css'
      , preview : '/design/editor-preview.css'
      , editor  : '/design/editor-theme.css'
      }

      // Let Vanilla handle drafts
    , clientSideStorage: false

      // Don't use native full-screen
    , useNativeFullscreen: false
    });

    // Attach the editor to the textarea
    $textarea.data('editor', editor);

    // Fire in the hole!
    editor.load(function () {
      // Hide the original textarea once the editor is loaded
      $textarea.addClass('Hidden');
    });
  };

  Editor.prototype.attachEditorHandler = function () {
    var self = this;

    $(this.options.textarea).each(function () {
      self.attachEditor(this);
    });
  };

  Editor.prototype.clearEditor = function (textarea) {
    var editor = $(textarea).data('editor');

    // Import an empty, non-existing file
    editor.importFile('');
  };

  Editor.prototype.clearEditorHandler = function (e) {
    var self = this;

    $(this.options.textarea, e.target).each(function () {
      self.clearEditor(this);
    });
  };

})(jQuery, window, document);
