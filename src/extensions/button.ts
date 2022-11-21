import type { Editor } from '@tiptap/core';
import { TiptapBtn } from './extension/ButtonConfig';
import AddLinkCommandButton from '../components/MenuCommands/AddButtonCommandButton.vue';

const Button = TiptapBtn.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor }: { editor: Editor }) {
        return {
          component: AddLinkCommandButton,
          componentProps: {
            editor,
          },
        };
      },
    };
  },
});

export default Button;
