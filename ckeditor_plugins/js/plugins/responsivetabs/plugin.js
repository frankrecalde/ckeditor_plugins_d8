/**
 * @file
 * Functionality to responsive tabs functionality in CKEditor.
 */

(function () {
  'use strict';

  // Register plugin.
  CKEDITOR.plugins.add('responsivetabs', {
    hidpi: true,
    icons: 'responsivetabs',
    init: function ( editor ) {

      // Add single button
      editor.ui.addButton('responsivetabs', {
        label: Drupal.t('Insert responsive tabs'),
        id: 'responsivetabs',
        command: 'addResponsiveTab',
      });

      // Add CSS for edition state
      var cssPath = this.path + 'css/responsivetabs.css';
      editor.on('mode', function () {
        if (editor.mode == 'wysiwyg') {
          this.document.appendStyleSheet(cssPath);
        }
      });

      // Prevent nesting DLs by disabling button
      editor.on('selectionChange', function (evt) {
        if (editor.readOnly)
          return;
        var command = editor.getCommand('addResponsiveTab'),
          element = evt.data.path.lastElement && evt.data.path.lastElement.getAscendant('dl', true);
        if (element)
          command.setState(CKEDITOR.TRISTATE_DISABLED);
        else
          command.setState(CKEDITOR.TRISTATE_OFF);
      });

      var allowedContent = 'dl dd dt(!responsive-tabs)';

      // Command to insert initial structure
      editor.addCommand('addResponsiveTab', {
        allowedContent: allowedContent,

        exec: function (editor) {
          var dl = new CKEDITOR.dom.element.createFromHtml(
            '<dl class="responsive-tabs">' +
            '<dt>Tab title 1</dt>' +
            '<dd><p>Tab content 1.</p></dd>' +
            '<dt>Tab title 2</dt>' +
            '<dd><p>Tab content 2.</p></dd>' +
            '</dl>');
          editor.insertElement(dl);
        }
      });
      // Other command to manipulate tabs
      editor.addCommand('addResponsiveTabBefore', {
        allowedContent: allowedContent,

        exec: function (editor) {
          var element = editor.getSelection().getStartElement();
          var newHeader = new CKEDITOR.dom.element.createFromHtml('<dt>New tab title</dt>');
          var newContent = new CKEDITOR.dom.element.createFromHtml('<dd><p>New tab content</p></dd>');
          if (element.getAscendant('dd', true)) {
            element = element.getAscendant('dd', true).getPrevious();
          }
          else {
            element = element.getAscendant('dt', true);
          }
          newHeader.insertBefore(element);
          newContent.insertBefore(element);
        }
      });
      editor.addCommand('addResponsiveTabAfter', {
        allowedContent: allowedContent,

        exec: function (editor) {
          var element = editor.getSelection().getStartElement();
          var newHeader = new CKEDITOR.dom.element.createFromHtml('<dt>New tab title</dt>');
          var newContent = new CKEDITOR.dom.element.createFromHtml('<dd><p>New tab content</p></dd>');
          if (element.getAscendant('dt', true)) {
            element = element.getAscendant('dt', true).getNext();
          }
          else {
            element = element.getAscendant('dd', true);
          }
          newContent.insertAfter(element);
          newHeader.insertAfter(element);
        }
      });
      editor.addCommand('removeResponsiveTab', {
        exec: function (editor) {
          var element = editor.getSelection().getStartElement();
          var a;
          if (element.getAscendant('dt', true)) {
            a = element.getAscendant('dt', true);
            a.getNext().remove();
            a.remove();
          }
          else {
            a = element.getAscendant('dd', true);
            if (a) {
              a.getPrevious().remove();
              a.remove();
            }
            else {
              element.remove();
            }
          }
        }
      });

      // Context menu
      if (editor.contextMenu) {
        editor.addMenuGroup('responsiveTabGroup');
        editor.addMenuItem('tabBeforeItem', {
          label: Drupal.t('Add resposive tab before'),
          icon: this.path + 'icons/responsive_tabs.png',
          command: 'addResponsiveTabBefore',
          group: 'responsiveTabGroup'
        });
        editor.addMenuItem('tabAfterItem', {
          label: Drupal.t('Add resposive tab after'),
          icon: this.path + 'icons/responsive_tabs.png',
          command: 'addResponsiveTabAfter',
          group: 'responsiveTabGroup'
        });
        editor.addMenuItem('removeTab', {
          label: Drupal.t('Remove resposive tab'),
          icon: this.path + 'icons/responsive_tabs.png',
          command: 'removeResponsiveTab',
          group: 'responsiveTabGroup'
        });

        editor.contextMenu.addListener(function (element) {
          var parentEl = element.getAscendant('dl', true);
          if (parentEl && parentEl.hasClass('responsive-tabs')) {
            return {
              tabBeforeItem: CKEDITOR.TRISTATE_OFF,
              tabAfterItem: CKEDITOR.TRISTATE_OFF,
              removeTab: CKEDITOR.TRISTATE_OFF
            };
          }
        });
      }
    }
  });
})();
