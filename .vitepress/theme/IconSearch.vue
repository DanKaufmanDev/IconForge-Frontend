<template>
  <div class="icon-search-container">
    <div class="search-bar-wrapper">
      <i class="if-search search-icon"></i>
      <input v-model="searchQuery" placeholder="Search over 500+ icons..." class="search-input" />
    </div>

    <div class="category-filters">
      <button 
        v-for="category in categories" 
        :key="category" 
        :class="['category-button', { active: activeCategory === category }]" 
        @click="setCategory(category)">
        {{ category }}
      </button>
    </div>

    <RecycleScroller
      ref="scroller"
      class="icon-grid"
      :items="filteredIcons"
      :item-size="140"
      key-field="name"
      :grid-items="gridColumns"
      v-slot="{ item }"
      @mouseenter="lockScroll"
      @mouseleave="unlockScroll"
    >
      <div style="padding: 0.5rem;">
        <div 
          class="icon-card"
          @click="copyToClipboard(item.name)">
          <i :class="[item.name, 'icon-display']"></i>
          <span class="icon-name">{{ item.name.replace('if-', '') }}</span>
        </div>
      </div>
    </RecycleScroller>

    <div :class="['notification', { show: showNotification }]">
      <i class="if-checkbox"></i> Copied `{{ copiedText }}` to clipboard!
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import { useElementSize, useScrollLock } from '@vueuse/core';

const searchQuery = ref('');
const activeCategory = ref('All');
const allIcons = ref([]);
const showNotification = ref(false);
const copiedText = ref('');
const scroller = ref(null);

const { width } = useElementSize(scroller);
const isLocked = useScrollLock(document.body);

const lockScroll = () => {
  isLocked.value = true;
};

const unlockScroll = () => {
  isLocked.value = false;
};

const gridColumns = computed(() => {
  if (width.value === 0) return 1;
  return Math.floor(width.value / 135);
});

onMounted(async () => {
  const { default: icons } = await import('./icon-metadata.json');
  allIcons.value = icons;

  const params = new URLSearchParams(window.location.search);
  const query = params.get('query');
  if (query) {
    searchQuery.value = query;
  }
});

const categories = computed(() => {
  const allFilters = allIcons.value.flatMap(i => i.filter).filter(Boolean);
  const uniqueFilters = [...new Set(allFilters)].filter(f => f !== 'All');
  return ['All', ...uniqueFilters.sort()];
});

const filteredIcons = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();
  let iconsToFilter = allIcons.value;

  if (activeCategory.value !== 'All') {
    iconsToFilter = iconsToFilter.filter(icon => icon.filter && icon.filter.includes(activeCategory.value));
  }

  if (query) {
    iconsToFilter = iconsToFilter.filter(icon => {
      const nameMatch = icon.name.toLowerCase().includes(query);
      const tagMatch = icon.tags.some(tag => tag.toLowerCase().includes(query));
      return nameMatch || tagMatch;
    });
  }

  return iconsToFilter;
});

function setCategory(category) {
  activeCategory.value = category;
}

function copyToClipboard(iconClass) {
  const tag = `<i class="${iconClass}"></i>`;
  navigator.clipboard.writeText(tag);
  copiedText.value = tag;
  showNotification.value = true;
  setTimeout(() => {
    showNotification.value = false;
  }, 2000);
}
</script>

<style scoped>

.icon-search-container {
  display: flex;
  flex-direction: column;
  height: calc(95vh - 120px);
  width: calc(80vw - 95px);
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}

@media screen and (max-width: 1920px) {
  .icon-search-container {
    display: flex;
    flex-direction: column;
    height: calc(95vh - 120px);
    width: calc(85vw - 95px);
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;      
  }
}

.search-bar-wrapper {
  position: relative;
  margin-bottom: 2rem;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  color: #9ca3af;
  font-size: 1.25rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  background-color: #fff;
  color: #111827;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.icon-grid {
  flex-grow: 1;
  overflow-y: auto;
}

.icon-card {
  display: flex;
  flex-direction: column;
  height: 120px;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: #9fa9b534;
  backdrop-filter: blur(4px);
  border: 1px solid #38353526;
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s;
  color: #000000;
}

.dark .icon-card {
  display: flex;
  flex-direction: column;
  height: 120px;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: #232b3466;
  backdrop-filter: blur(4px);
  border: 1px solid #38353526;
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s;
  color: #c9c3c3;
}

.icon-card:hover {
  background-color: #8a939e66;
  border-color: #348cfe;
}

.dark .icon-card:hover {
  background-color: #445060;
  border-color: #348cfe;
  color: #ffffff;
}

.icon-display {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.icon-name {
  font-size: 0.85rem;
  color: #000000;
  word-break: break-all;
}

.dark .icon-name {
  font-size: 0.85rem;
  color: #c9c3c3;
  word-break: break-all;
}

.icon-card:hover .icon-name {
  color: #348cfe;
}

.notification {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #111827;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, transform 0.3s;
  z-index: 100;
}

.dark .notification {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #283b52df;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, transform 0.3s;
  z-index: 100;
}

.notification.show {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.notification i {
  margin-right: 0.5rem;
}

.category-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.category-button {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  background-color: #fff;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s;
}

.category-button:hover {
  background-color: #f3f4f6;
  border-color: #d1d5db;
}

.category-button.active {
  background-color: #2563eb;
  color: #fff;
  border-color: #2563eb;
}

.dark .category-button {
    background-color: #3a4555;
    border-color: #4b5563;
    color: #e5e7eb;
}

.dark .category-button:hover {
    background-color: #4b5563;
    border-color: #6b7280;
}

.dark .category-button.active {
    background-color: #348cfe;
    border-color: #348cfe;
    color: #fff;
}

</style>