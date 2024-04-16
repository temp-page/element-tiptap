<template>
  <div class='el-tiptap-editor__wrapper'>
    <el-tiptap
      :extensions='extensions'
      v-model:content='content'
      placeholder='Write something ...'
      @onUpdate="onUpdate"
    />

    <div class="section">
      <h2 class="section__title">HTML</h2>
      <pre><code>{{ output.html }}</code></pre>
    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  Blockquote,
  Bold,
  BulletList,
  Button,
  CodeBlock,
  Color,
  Document,
  FormatClear,
  Fullscreen,
  Heading,
  Highlight,
  History,
  Image,
  Indent,
  Italic,
  Link,
  OrderedList,
  Paragraph,
  SelectAll,
  Strike,
  Table,
  IframeVideo,
  IframeLink,
  Text,
  TextAlign,
  Underline,
} from 'element-tiptap';
import 'codemirror/lib/codemirror.css'; // import base style
import 'codemirror/mode/xml/xml.js'; // language
import 'codemirror/addon/selection/active-line.js'; // require active-line.js
import 'codemirror/addon/edit/closetag.js'; // autoCloseTags

const extensions = [
  Document,
  Text,
  Button,
  Paragraph,
  IframeVideo.configure(),
  IframeLink.configure(),
  Link,
  Image.configure(),
  Table.configure({ resizable: true }),
  SelectAll,
  Fullscreen,
  Heading.configure({ levels: [1, 2, 3] }),
  BulletList,
  OrderedList,
  Indent,
  Blockquote,
  Bold.configure({ bubble: false }),
  Underline.configure({ bubble: false }),
  Italic.configure({ bubble: false }),
  FormatClear,
  History,
];
const output = ref({
  html: 'Update content to see changes',
});
const onUpdate = (output11, editor) => {
  output.value.html = editor.getHTML();
};
const content = ref(
  '<p></p><p></p>'
);
</script>
