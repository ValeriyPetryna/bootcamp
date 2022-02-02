import { AngularEditorConfig } from '@kolkov/angular-editor';

const config: AngularEditorConfig = {
  editable: true,
  spellcheck: true,
  height: 'auto',
  minHeight: '200',
  maxHeight: 'auto',
  width: 'auto',
  minWidth: '0',
  translate: 'yes',
  enableToolbar: true,
  showToolbar: true,
  placeholder: 'Enter text here...',
  defaultParagraphSeparator: '',
  defaultFontName: '',
  defaultFontSize: '',
  fonts: [
    { class: 'arial', name: 'Arial' },
    { class: 'times-new-roman', name: 'Times New Roman' },
    { class: 'calibri', name: 'Calibri' },
    { class: 'comic-sans-ms', name: 'Comic Sans MS' },
  ],
  customClasses: [
    {
      name: 'quote',
      class: 'quote',
    },
    {
      name: 'redText',
      class: 'redText',
    },
    {
      name: 'titleText',
      class: 'titleText',
      tag: 'h1',
    },
  ],
  uploadWithCredentials: false,
  sanitize: true,
  toolbarPosition: 'top',
  toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
};

const validationInfo: object = {
  author: {
    required: 'Article author field is required.',
    minlength: 'Article author field should be at least 4 characters long.',
    maxlength: 'Article author field should be less than 50 characters long.',
  },
  title: {
    required: 'Article title field is required.',
    minlength: 'Article title field should be at least 5 characters long.',
  },
  content: {
    required: 'Article content field is required.',
    minlength: 'Article content field should be at least 10 characters long.',
  },
};

export { config, validationInfo };
