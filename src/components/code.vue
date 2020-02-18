<template>
  <pre id="code"><code :class="lang" v-html="code"></code></pre>
</template>

<script>
import hljs from 'highlight.js';

export default {
  name: 'PasteCode',
  props: {
    source: String,
    lang: String
  },
  computed: {
    code() {
      const t = hljs.highlight(this.lang, this.source);
      if (t.illegal === true) {
        return hljs.lineNumbersValue(hljs.highlightAuto(this.source).value);
      } else {
        return hljs.lineNumbersValue(t.value);
      }
    }
  }
};
</script>

<style>
#code {
  margin: 0;
}
pre,
code {
  white-space: pre;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 16px !important;
}
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
  pre,
  code {
    font-family: 'Fira Code', monospace;
    font-size: 6px !important;
  }
}
pre::-webkit-scrollbar {
  width: 0.4rem;
  height: 0.4rem;
}
pre::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.26);
}
.hljs-ln-numbers {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: right;
  color: #ccc;
  vertical-align: top;
  padding-right: 5px;
}
.hljs-ln-code {
  padding-left: 10px !important;
}
</style>
