import { Node, mergeAttributes } from '@tiptap/core';
import { Editor, VueNodeViewRenderer } from '@tiptap/vue-3';
import IframeCommandButton from '@/components/MenuCommands/IframeCommandButton.vue';
import IframeView from '@/components/ExtensionViews/IframeView.vue';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    iframe: {
      setIframe: (options: { src: string }) => ReturnType;
    };
  }
}

const Iframe = Node.create({
  name: 'video',

  // schema
  group: 'block',
  selectable: true, // so we can select the video
  draggable: true, // so we can drag the video
  atom: true,

  addAttributes() {
    return {
      ...this.parent?.(),
      src: {
        default: null,
        parseHTML: (element) => {
          const src = element.getAttribute('src');
          return src;
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'video[src]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'video',
      mergeAttributes(HTMLAttributes),
    ];
  },

  addCommands() {
    return {
      setIframe:
        (options) =>
          ({ commands }) => {
            return commands.insertContent({
              type: this.name,
              attrs: options,
            });
          },
    };
  },

  addOptions() {
    return {
      button({ editor }: { editor: Editor }) {
        return {
          component: IframeCommandButton,
          componentProps: {
            editor,
          },
        };
      },
    };
  },

  addNodeView() {
    return VueNodeViewRenderer(IframeView);
  },
});

export default Iframe;
