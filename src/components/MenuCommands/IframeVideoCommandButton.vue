<template>

  <el-popover
    :disabled="isCodeViewMode"
    placement="bottom"
    trigger="click"
    popper-class="el-tiptap-popper"
  >
    <div class="el-tiptap-popper__menu">
      <div class="el-tiptap-popper__menu__item" @click="openInsertVideoControl">
        <span>{{
            "Insert a video link"
          }}</span>
      </div>
      <div
        class="el-tiptap-popper__menu__item"
        @click="imageUploadDialogVisible = true"
      >
        <span>{{
            "Upload a video file"
          }}</span>
      </div>
    </div>

    <template #reference>
      <span>
        <command-button
          :enable-tooltip="enableTooltip"
          :tooltip="t('editor.extensions.Iframe.tooltip')"
          :readonly="isCodeViewMode"
          icon="video"
        />
      </span>
    </template>
  </el-popover>

  <el-dialog
    v-model="imageUploadDialogVisible"
    :title="'Upload video Supported formats: mp4, m4v, webm, ogv, wav, gltf'"
    :append-to-body="true"
  >
    <el-upload
      :http-request="uploadImage"
      :show-file-list="false"
      class="el-tiptap-upload"
      action="#"
      drag
      accept="video/*"
    >
      <div class="el-tiptap-upload__icon">
        <i class="fa fa-upload" />
      </div>
      <div class="el-tiptap-upload__text">
        {{ "Select a video file or drag it here" }}
      </div>
    </el-upload>
  </el-dialog>

</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { Editor } from '@tiptap/vue-3';
import { ElMessageBox, ElLoading, ElDialog, ElPopover, ElUpload } from 'element-plus';
import CommandButton from './CommandButton.vue';
import { readFileDataUrl } from '@/utils/shared';
import Logger from '@/utils/logger';

export default defineComponent({
  name: 'IframeVideoCommandButton',

  components: {
    CommandButton,
    ElDialog,
    ElUpload,
    ElPopover,
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
  data() {
    return {
      imageUploadDialogVisible: false,
      uploading: false,
    };
  },
  computed: {
    imageNodeOptions() {
      return this.editor.extensionManager.extensions.find(
        (e) => e.name === 'video'
      )!.options;
    },
  },
  methods: {
    async openInsertVideoControl() {
      const { value: href } = await ElMessageBox.prompt(
        '',
        this.t('editor.extensions.Iframe.control.title'),
        {
          confirmButtonText: this.t('editor.extensions.Iframe.control.confirm'),
          cancelButtonText: this.t('editor.extensions.Iframe.control.cancel'),
          inputPlaceholder: this.t(
            'editor.extensions.Iframe.control.placeholder'
          ),
          roundButton: true,
        }
      );

      this.editor.commands.setIframeVideo({ src: href });
    },
    async uploadImage(requestOptions: any) {
      const { file } = requestOptions;

      const uploadRequest = this.imageNodeOptions.uploadRequest;

      const loadingInstance = ElLoading.service({
        target: '.el-tiptap-upload',
      });
      try {
        const url = await (uploadRequest
          ? uploadRequest(file)
          : readFileDataUrl(file));
        this.editor.commands.setIframeVideo({ src: url });
        this.imageUploadDialogVisible = false;
      } catch (e) {
        Logger.error(String(e));
      } finally {
        this.$nextTick(() => {
          loadingInstance.close();
        });
      }
    },
  },
});
</script>
