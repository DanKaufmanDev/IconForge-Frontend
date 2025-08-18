<template>
  <div class="comp-block">
    <div class="preview" v-html="snippet"></div>
    <button class="copy-btn" @click="copy">Copy</button>
  </div>
</template>

<script setup>
const props = defineProps({
  snippet: String
})

function copy() {
  navigator.clipboard.writeText(props.snippet.trim())
  const tip = document.createElement('div')
  tip.textContent = 'Copied!'
  tip.style = 'position:fixed;right:16px;bottom:16px;padding:6px 8px;background:#111;color:#fff;border-radius:6px;font-size:13px'
  document.body.appendChild(tip)
  setTimeout(() => tip.remove(), 900)
}
</script>

<style scoped>
.comp-block {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 1.25rem;
    margin-bottom: 2rem;
    background: #1f293740;
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
}
.copy-btn {
    position: absolute;
    top: 6px;
    right: 6px;
    font-size: 0.7rem;
    background:#000;
    color:#fff;
    padding:3px 6px;
    border-radius:4px;
    z-index: 9999;
}
.preview > *{ pointer-events: none; }
</style>
