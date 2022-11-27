import { Editor } from '@tiptap/core';
import TiptapImage from '@tiptap/extension-image';
import InsertImageCommandButton from '@/components/MenuCommands/Image/InsertImageCommandButton.vue';
import {
  DEFAULT_IMAGE_URL_REGEX,
} from '@/constants';

const Image = TiptapImage.extend({
  // https://github.com/ueberdosis/tiptap/issues/1206
  inline() {
    return false;
  },

  group() {
    return 'block';
  },

  addAttributes() {
    return {
      ...this.parent?.(),
    };
  },

  addOptions() {
    return {
      ...this.parent?.(),
      inline: true,
      uploadRequest: null,
      urlPattern: DEFAULT_IMAGE_URL_REGEX,
      HTMLAttributes:{
        class:"apex-blog-editor-img"
      },
      button({ editor }: { editor: Editor }) {
        return {
          component: InsertImageCommandButton,
          componentProps: {
            editor,
          },
        };
      },
    };
  },
  parseHTML() {
    return [
      {
        tag: 'img[src]',
      },
    ];
  },
});

export default Image;
