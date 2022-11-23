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
  Iframe,
  Image.configure(),
  Table.configure({ resizable: true }),
  Heading.configure({ levels: [1, 2, 3] }),
  Paragraph,
  Link,
  SelectAll,
  Fullscreen,

  BulletList,
  OrderedList,
  TextAlign,
  Indent,
  Blockquote,
  CodeBlock,

  Bold.configure({ bubble: true }),
  Underline.configure({ bubble: true }),
  Italic.configure({ bubble: true }),
  Strike.configure({ bubble: true }),
  Color.configure({ bubble: true }),
  Highlight.configure({ bubble: true }),
  FormatClear,
  History,
];

const content = ref(
  '<p></p><p></p>'
);
</script>
