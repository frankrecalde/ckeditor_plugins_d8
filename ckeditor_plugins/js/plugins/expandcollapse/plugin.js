/**
 * @file
 * Functionality to enable expand collapse functionality in CKEditor.
 */

(function () {
  'use strict';

  // Register plugin.
  CKEDITOR.plugins.add('expandcollapse', {
    hidpi: true,
    icons: 'expandcollapse',
    init: function (editor) {
      // Command to insert initial structure.
      editor.addCommand('addExpandCollapseCmd', {
        exec: function (editor) {
          editor.insertHtml('<div class="ckeditor_plugins_expandcollapse"><a href="#" class="ckeditor_plugins_expand">Show all</a> / <a href="#" class="ckeditor_plugins_collapse">Hide all</a></div>');
        }
      });

      // Add single button.
      editor.ui.addButton('expandcollapse', {
        label: Drupal.t('Expand / Collapse all'),
        id: 'expandcollapse',
        command: 'addExpandCollapseCmd',
      });

      // Add CSS for edition state.
      var cssPath = this.path + 'css/ec.css';
      editor.on('mode', function () {
        if (editor.mode === 'wysiwyg') {
          this.document.appendStyleSheet(cssPath);
        }
      });
    }
  });
})();
