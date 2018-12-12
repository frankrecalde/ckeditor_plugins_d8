/**
 * @file
 * Functionality to enable URL button functionality in CKEditor.
 */

(function ($, Drupal, CKEDITOR) {

  // Register plugin.
  CKEDITOR.plugins.add('myservicelink', {
    hidpi: true,
    icons: 'myservicelink',
    init: function ( editor ) {
      // Command to insert initial structure.
      editor.addCommand('addMyServiceLinkCmd', {
        exec: function( editor ) {
          var url_my_service = new CKEDITOR.dom.element.createFromHtml(
            '<a class="au-btn ckeditor_plugins_myservice_link" href="https://www.dva.gov.au/myservice/" target="_blank">' +
            'Login to MyService' +
            '</a>');
          editor.insertElement(url_my_service);
        }
      });

      // Add single button.
      editor.ui.addButton('myservicelink', {
        label: Drupal.t('Insert MyService link'),
        id: 'myservicelink',
        command: 'addMyServiceLinkCmd',
      });

      // Add CSS for edition state.
      var cssPath = this.path + 'css/myservicelink.css';
      editor.on('mode', function () {
        if (editor.mode === 'wysiwyg') {
          this.document.appendStyleSheet(cssPath);
        }
      });
    }
  });
})(jQuery, Drupal, CKEDITOR);
