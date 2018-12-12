/**
 * @file
 */

// Our dialog definition.
CKEDITOR.dialog.add('customLinkDialog', function (editor) {
  return {

    title: 'Custom Button Link Properties',
    minWidth: 400,
    minHeight: 200,

    contents: [
      {
        id: 'tab-basic',
        label: 'Link Info',
        elements: [
          {
            type: 'text',
            id: 'text',
            label: 'Display Text',
            validate: CKEDITOR.dialog.validate.notEmpty("Display text field cannot be empty."),

            setup: function (element) {
              this.setValue(element.getText());
            },

            commit: function (element) {
              element.setText(this.getValue());
              element.setAttribute('title', this.getValue());
            },

            onShow: function () {
              var selection = editor.getSelection();
              if (!selection || selection.getStartElement().getAscendant('a', true)) {
                return;
              }

              this.setValue(editor.getSelection().getSelectedText());
            }
          },
          {
            type: 'text',
            id: 'url',
            label: 'URL',
            validate: CKEDITOR.dialog.validate.notEmpty("URL field cannot be empty."),

            setup: function (element) {
              this.setValue(element.getAttribute("href"));
            },

            commit: function (element) {
              element.setAttribute('href', this.getValue());
            }
          }
        ]
      },

    ],

    onShow: function () {
      var selection = editor.getSelection();
      var element = selection.getStartElement();

      if (element) {
        element = element.getAscendant('a', true);
      }


      if (!element || element.getName() != 'a') {
        element = editor.document.createElement('a');

        this.insertMode = true;
      }
      else {
        this.insertMode = false;
      }

      this.element = element;

      if (!this.insertMode) {
        this.setupContent(this.element);
      }
    },

    onOk: function () {
      var dialog = this;

      var custom_button_link = this.element;
      custom_button_link.setAttribute('class', 'au-btn ckeditor_plugins_custom_button_link');
      custom_button_link.setAttribute('target', '_blank');

      this.commitContent(custom_button_link);

      if (this.insertMode) {
        editor.insertElement(custom_button_link);
      }
    }
  };
});
