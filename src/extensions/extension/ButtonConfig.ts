import { getAttributes, Mark } from '@tiptap/core';
import { Plugin, PluginKey } from 'prosemirror-state';
export interface BtnOptions {
  /**
   * An array of custom protocols to be registered with linkifyjs.
   */
  protocols: Array<string>;
  /**
   * A list of HTML attributes to be rendered.
   */
  HTMLAttributes: Record<string, any>;
  /**
   * A validation function that modifies link verification for the auto linker.
   * @param url - The url to be validated.
   * @returns - True if the url is valid, false otherwise.
   */
  validate?: (url: string) => boolean;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    btn: {
      /**
       * Set a link mark
       */
      setBtn: (attributes: {
        href: string;
        target?: string;
        class?: string;
        style?: string;
      }) => ReturnType;
    };
  }
}

export const TiptapBtn = Mark.create<BtnOptions>({
  name: 'btn',

  priority: 1000,

  keepOnSplit: false,

  inclusive() {
    return false;
  },

  addOptions() {
    return {
      autolink: true,
      protocols: [],
      HTMLAttributes: {
        target: '_blank',
        style: '',
      },
      validate: undefined,
    };
  },

  addAttributes() {
    return {
      href: {
        default: null,
      },
      target: {
        default: this.options.HTMLAttributes.target,
      },
      style: {
        default: this.options.HTMLAttributes.class,
      },
    };
  },
  parseHTML() {
    return [
      {
        tag: 'a',
        getAttrs: element => {
          // Check if the element has an attribute
          element.hasAttribute('class');
          return element.classList.contains('apex-blog-editor-btn');
        },
        contentElement: 'button'
      }
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'a',
      {
        class: 'apex-blog-editor-btn',
        target: HTMLAttributes.target,
        href: HTMLAttributes.href,
      },
      [
        'button',
        {
          onClick: 'javascript:;',
          style: HTMLAttributes.style,
        },
        0,
      ],
    ];
  },

  addCommands() {
    return {
      setBtn:
        (attributes) =>
          ({ chain }) => {
            return chain()
              .setMark(this.name, attributes)
              .setMeta('preventAutolink', false)
              .run();
          },
    };
  },

  addProseMirrorPlugins() {
    const plugins: Plugin[] = [];
    plugins.push(new Plugin({
      key: new PluginKey('handleClickBtn'),
      props: {
        handleClick: (view, pos, event) => {
          return false;
        },
      },
    }));
    return plugins;
  },
});
