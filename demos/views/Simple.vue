<template>
  <div class='el-tiptap-editor__wrapper'>
    <el-tiptap
      :extensions='extensions'
      v-model:content='content'
      placeholder='Write something ...'
    />
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
  Iframe,
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
  Iframe.configure(),
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

const content = ref(
  '<p></p><p></p>'
);
</script>
