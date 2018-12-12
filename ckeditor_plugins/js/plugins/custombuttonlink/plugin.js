/**
 * @file
 * Functionality to enable URL button functionality in CKEditor.
 */

(function ($) {

  // Register plugin.
  CKEDITOR.plugins.add('custombuttonlink', {
    hidpi: true,
    icons: 'custombuttonlink',
    init: function (editor) {

      editor.addCommand('addCustomButtonLinkCmd', new CKEDITOR.dialogCommand('customLinkDialog'));

      editor.ui.addButton('custombuttonlink', {

        label: Drupal.t('Insert custom button link'),
        command: 'addCustomButtonLinkCmd',
        toolbar: 'insert',
        icon: this.path + 'icons/custombuttonlink.png'
      });

      if (editor.contextMenu) {
        editor.addMenuGroup('customButtonLinkGroup');
        editor.addMenuItem('customButtonLinkItem', {
          label: 'Modified custom button link',
          icon: this.path + 'icons/custombuttonlink.png',
          command: 'addCustomButtonLinkCmd',
          group: 'customButtonLinkGroup'
        });

        editor.contextMenu.addListener(function (element) {
          if (element.getAscendant('a', true)) {
            return { customButtonLinkItem: CKEDITOR.TRISTATE_OFF };
          }
        });
      }

      CKEDITOR.dialog.add('customLinkDialog', this.path + 'dialogs/custom_button_link.js');
    }
  });
})(jQuery);
