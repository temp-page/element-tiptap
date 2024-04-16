<template>
  <command-button
    :command="openInsertVideoControl"
    :enable-tooltip="enableTooltip"
    tooltip="Insert Link"
    :readonly="isCodeViewMode"
    icon="iframe"
  />
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { Editor } from '@tiptap/vue-3';
import { ElMessageBox } from 'element-plus';
import CommandButton from './CommandButton.vue';

export default defineComponent({
  name: 'IframeCommandButton',

  components: {
    CommandButton,
  },

  props: {
    editor: {
      type: Editor,
      required: true,
    },
  },

  setup() {
    const t = inject('t');
    const enableTooltip = inject('enableTooltip', true);
    const isCodeViewMode = inject('isCodeViewMode', false);

    return { t, enableTooltip, isCodeViewMode };
  },

  methods: {
    async openInsertVideoControl() {
      const { value: href } = await ElMessageBox.prompt(
        '',
        'Insert Link',
        {
          confirmButtonText: this.t('editor.extensions.Iframe.control.confirm'),
          cancelButtonText: this.t('editor.extensions.Iframe.control.cancel'),
          inputPlaceholder: this.t(
            'editor.extensions.Iframe.control.placeholder'
          ),
          roundButton: true,
        }
      );

      this.editor.commands.setIframeLink({ src: href });
    },
  },
});
</script>
