<template>
  <div class="playground-container">
    <div ref="editorHost" class="editor-pane"></div>
    <div class="preview-pane">
      <iframe :srcdoc="iframeContent" class="preview-iframe"></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const code = ref(`<!-- Welcome to the IconForge Galaxy! -->
<!-- Explore the cosmos of possibilities. -->

<div style="font-family: sans-serif;text-align: center;padding: 2rem;background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);border-radius: 16px;width: 100%;height: 100%; overflow: hidden;  position: relative;  display: flex; flex-direction: column;  justify-content: center;  align-items: center;">
  
    <i class="if-star is-size-sm is-color-white is-anim-drift is-opacity-50 is-top-[20%] is-left-[10%]" style="--i: 1;"></i>
    <i class="if-star is-size-xs is-color-white is-anim-drift is-opacity-75 is-top-[50%] is-left-[80%]" style="--i: 5;"></i>
    <i class="if-star is-size-md is-color-white is-anim-drift is-opacity-25 is-top-[80%] is-left-[40%]" style="--i: 8;"></i>
    <i class="if-star is-size-sm is-color-mist-3 is-anim-flicker is-absolute is-top-[15%] is-left-[90%]" style="animation-duration: 5s;"></i>
    <i class="if-star is-size-xs is-color-mist-3 is-anim-flicker is-absolute is-top-[70%] is-left-[5%]"></i>
    <i class="if-star is-size-md is-color-mist-3 is-anim-flicker is-absolute is-top-[40%] is-left-[40%]" style="animation-duration: 3s;"></i>

    <i class="if-earth is-size-[150px] is-anim-wiggle is-gradient-radial-[circle,green,blue]"></i>

    <i class="if-rocket is-size-6xl is-color-twilight-5 is-rot-65deg] hover:is-scale-[2.5] is-transition is-absolute is-bottom-[15%] is-left-[15%]"></i>

    <h1 class="is-gradient-linear-[90deg,white,#6b7280] is-size-3xl is-m-[1rem] is-z-[10]" style="font-weight: 700;">
      IconForge Playground
    </h1>
    <p class="is-color-mist-7 is-m-[0] is-z-[10]" >
        The universe of icons is at your fingertips. Edit the code to see what's possible.
    </p>

</div>`);
const editorHost = ref(null);

const iframeContent = computed(() => {
  return `
    <html>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/iconforged@latest"><\/script>
        <style>
           body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 98dvh;
            margin: 0;
            background-color: #1f2939;
            overflow: hidden;
          }
        </style>
      </head>
      <body>
        ${code.value}
      </body>
    </html>
  `;
});

onMounted(() => {
  if (window.monaco) {
    createMonacoEditor();
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs/loader.min.js';
  script.onload = () => {
    window.require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs' } });
    window.require(['vs/editor/editor.main'], () => {
      createMonacoEditor();
    });
  };
  document.head.appendChild(script);
});

function createMonacoEditor() {
  if (!editorHost.value) return;

  window.monaco.editor.defineTheme('IconForge', {
    base: 'vs-dark',
    inherit: false,
    rules: [
      { token: 'comment', foreground: '919191' },
      { token: 'keyword', foreground: 'cacaca' },
      { token: 'string', foreground: 'E6DB74' },
      { token: 'tag', foreground: 'e7c6ff' },
      { token: 'attribute', foreground: '89c2d9' },
      { token: 'delimiter', foreground: 'e0aaff' },
    ],
    colors: {
      'editor.background': '#1f29379b',
      'editor.foreground': '#ffffff',
      'editor.lineHighlightBackground': '#355070',
      'editorCursor.foreground': '#A9A9A9',
    }
  });

  const editor = window.monaco.editor.create(editorHost.value, {
    value: code.value,
    language: 'html',
    theme: 'IconForge',
    automaticLayout: true,
    minimap: {
      enabled: false,
    },
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 24,
  });

  editor.onDidChangeModelContent(() => {
    code.value = editor.getValue();
  });
}
</script>

<style scoped>
.playground-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100dvh;
  width: 100vw;
  overflow-y: hidden;
}

.editor-pane {
  height: 100dvh;
  overflow: hidden;
}

.preview-pane {
  height: 100dvh;
  background-color: #1A1A1A;
  border-left: 1px solid #333;
  overflow-y: hidden;
}

.preview-iframe {
  width: 100%;
  height: 100dvh;
  border: none;
  overflow-y: hidden;
}
</style>