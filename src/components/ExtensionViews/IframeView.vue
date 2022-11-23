<template>
    <node-view-wrapper as="div" class="iframe apex-video">
      <video controls loop muted>
        <source :src="node!.attrs.src" type="video/mp4">
      </video>
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
