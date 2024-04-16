import { mergeAttributes, Node } from '@tiptap/core';
import { Editor } from '@tiptap/vue-3';
import IframeVideoCommandButton from '@/components/MenuCommands/IframeVideoCommandButton.vue';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    iframe: {
      setIframeVideo: (options: { src: string }) => ReturnType;
    };
  }
}

const IframeVideo = Node.create({
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
      mergeAttributes(HTMLAttributes, { class: 'apex-video', controls: true }),
    ];
  },

  addCommands() {
    return {
      setIframeVideo:
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
          component: IframeVideoCommandButton,
          componentProps: {
            editor,
          },
        };
      },
    };
  },
});

export default IframeVideo;
