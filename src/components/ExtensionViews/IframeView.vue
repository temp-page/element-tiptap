<template>
    <node-view-wrapper as="div" class="iframe apex-video">
      <video :src="node!.attrs.src" class="iframe__embed"></video>
    </node-view-wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3';

export default defineComponent({
  name: 'IframeView',

  components: {
    NodeViewWrapper,
  },

  props: nodeViewProps,
});
</script>
