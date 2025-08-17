<template>
  <div class="hero-search-wrapper">
    <form @submit.prevent="performSearch">
      <i class="if-search search-icon"></i>
      <input 
        v-model="searchQuery" 
        placeholder="Search over 500+ icons and jump to the library..." 
        class="hero-search-input"
        aria-label="Search Icons"
      />
      <button type="submit" class="search-button">Search</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');

function performSearch() {
  if (searchQuery.value.trim()) {
    window.location.href = `/icons?query=${encodeURIComponent(searchQuery.value.trim())}`;
  }
}
</script>

<style scoped>
.hero-search-wrapper {
  margin: 2.5rem 0;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 6.5rem;
}

form {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 1.5rem;
  transform: translateY(-50%);
  font-size: 1.5rem;
  color: #9ca3af; /* Gray-400 */
}

.hero-search-input {
  width: 100%;
  padding: 1rem 2rem 1rem 4.5rem;
  font-size: 1.125rem;
  border-radius: 9999px; /* pill shape */
  border: 1px solid #d1d5db; /* Gray-300 */
  background-color: #fff;
  color: #111827; /* Gray-900 */
  transition: border-color 0.2s, box-shadow 0.2s;
}

.dark .hero-search-input {
  background-color: #2e3c4d;
  border-color: #4b5563;
  color: #e5e7eb;
}

.hero-search-input:focus {
  outline: none;
  border-color: #3b82f6; /* Blue-500 */
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
}

.search-button {
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 9999px;
  border: none;
  background-color: #2563eb; /* Blue-600 */
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;
}

.search-button:hover {
  background-color: #1d4ed8; /* Blue-700 */
}

.dark .search-button {
  background-color: #348cfe;
}

.dark .search-button:hover {
  background-color: #2575e9;
}
</style>
