<template>
  <div>
    <command-button
      :is-active="editor.isActive('btn')"
      :readonly="isCodeViewMode"
      :command="openAddLinkDialog"
      :enable-tooltip="enableTooltip"
      :tooltip="'add a button.'"
      :icon="'btn'"
    />

    <el-dialog
      v-model="addLinkDialogVisible"
      :title="'Add Button.'"
      :append-to-body="true"
      width="400px"
      custom-class="el-tiptap-edit-link-dialog"
    >
      <el-form :model="btnAttrs" label-position="right" size="small">
        <el-form-item :label="'Jump link'" prop="href">
          <el-input v-model="btnAttrs.href" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="openInNewTab">
          <el-checkbox v-model="btnAttrs.openInNewTab">
            {{ "Open in a new page?" }}
          </el-checkbox>
        </el-form-item>
      </el-form>

      <template #footer>
        <el-button size="small" round @click="closeAddLinkDialog">
          {{ t("editor.extensions.Link.add.control.cancel") }}
        </el-button>

        <el-button
          type="primary"
          size="small"
          round
          @mousedown.prevent
          @click="addLink"
        >
          {{ t("editor.extensions.Link.add.control.confirm") }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
// 引入样式文件
import { defineComponent, inject } from 'vue';
import {
  ElDialog,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElButton,
} from 'element-plus';
import { Editor } from '@tiptap/core';
import CommandButton from './CommandButton.vue';

export default defineComponent({
  name: 'AddLinkCommandButton',

  components: {
    ElDialog,
    ElForm,
    ElFormItem,
    ElInput,
    ElCheckbox,
    ElButton,
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
    const isCodeViewMode = inject('isCodeViewMode', true);

    return { t, enableTooltip, isCodeViewMode };
  },

  data() {
    return {
      btnAttrs: {
        href: '',
        openInNewTab: true,
      },
      addLinkDialogVisible: false,
    };
  },

  watch: {
    addLinkDialogVisible() {
      this.btnAttrs = {
        href: '',
        openInNewTab: true,
      };
    },
  },

  methods: {
    openAddLinkDialog() {
      this.addLinkDialogVisible = true;
    },

    closeAddLinkDialog() {
      this.addLinkDialogVisible = false;
    },

    addLink() {
      this.editor.commands.setBtn({
        href: this.btnAttrs.href,
        target: this.btnAttrs.openInNewTab ? '_blank' : '_self',
        style: '',
      });

      this.closeAddLinkDialog();
    },
  },
});
</script>
<style></style>
