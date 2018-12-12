/**
 * @file
 * Functionality to enable URL button functionality in CKEditor.
 */

(function ($, Drupal, CKEDITOR) {

  // Register plugin.
  CKEDITOR.plugins.add('myaccountlink', {
    hidpi: true,
    icons: 'myaccountlink',
    init: function ( editor ) {
      // Command to insert initial structure.
      editor.addCommand('addMyAccountLinkCmd', {
        exec: function( editor ) {
          var url_myaccount = new CKEDITOR.dom.element.createFromHtml(
            '<a class="au-btn ckeditor_plugins_myaccount_link" href="https://myaccount.dva.gov.au/" target="_blank">' +
            'Login to MyAccount' +
            '</a>');
          editor.insertElement(url_myaccount);
        }
      });

      // Add single button.
      editor.ui.addButton('myaccountlink', {
        label: Drupal.t('Insert MyAccount link'),
        id: 'myaccountlink',
        command: 'addMyAccountLinkCmd',
      });

      // Add CSS for edition state.
      var cssPath = this.path + 'css/myaccountlink.css';
      editor.on('mode', function () {
        if (editor.mode === 'wysiwyg') {
          this.document.appendStyleSheet(cssPath);
        }
      });
    }
  });
})(jQuery, Drupal, CKEDITOR);
