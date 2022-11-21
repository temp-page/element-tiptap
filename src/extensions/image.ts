import { Editor, mergeAttributes } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-3';
import TiptapImage from '@tiptap/extension-image';
import InsertImageCommandButton from '@/components/MenuCommands/Image/InsertImageCommandButton.vue';
import ImageView from '@/components/ExtensionViews/ImageView.vue';
import { ImageDisplay } from '@/utils/image';
import {
  DEFAULT_IMAGE_WIDTH,
  DEFAULT_IMAGE_DISPLAY,
  DEFAULT_IMAGE_URL_REGEX,
} from '@/constants';

const Image = TiptapImage.extend({
  // https://github.com/ueberdosis/tiptap/issues/1206
  inline() {
    return true;
  },

  group() {
    return 'inline';
  },

  addAttributes() {
    return {
      ...this.parent?.(),
      display: {
        default: DEFAULT_IMAGE_DISPLAY,
        parseHTML: (element) => {
          const { cssFloat, display } = element.style;
          let dp =
            element.getAttribute('data-display') ||
            element.getAttribute('display');
          if (dp) {
            dp = /(inline|block|left|right)/.test(dp)
              ? dp
              : ImageDisplay.INLINE;
          } else if (cssFloat === 'left' && !display) {
            dp = ImageDisplay.FLOAT_LEFT;
          } else if (cssFloat === 'right' && !display) {
            dp = ImageDisplay.FLOAT_RIGHT;
          } else if (!cssFloat && display === 'block') {
            dp = ImageDisplay.BREAK_TEXT;
          } else {
            dp = ImageDisplay.INLINE;
          }

          return dp;
        },
        renderHTML: (attributes) => {
          return {
            'data-display': attributes.display,
          };
        },
      },
    };
  },

  addOptions() {
    return {
      ...this.parent?.(),
      inline: true,
      uploadRequest: null,
      urlPattern: DEFAULT_IMAGE_URL_REGEX,
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
