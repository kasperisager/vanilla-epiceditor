;(function ($, window, document, undefined) {

  // These events will trigger an editor attachment
  var attachTriggers = [
    'ready'
  , 'EditCommentFormLoaded'
  ];

  // These events will trigger an editor clearing
  var clearTriggers = [
    'clearCommentForm'
  ];

  // Intialize the Editor plugin
  var editor = new Editor({
    textarea: '.TextBox'
  });

  // Attach event handlers
  $(document)
    .on(attachTriggers.join(' '), editor.attachEditorHandler.bind(editor))
    .on(clearTriggers.join(' '),  editor.clearEditorHandler.bind(editor));

  // Noop jQuery Autogrow so things don't break
  $.fn.autogrow = $.noop;

})(jQuery, window, document);
