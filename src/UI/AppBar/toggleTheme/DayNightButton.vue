<script setup lang="ts">
import { ref, watch } from 'vue';
import '../appbarStyle/style.css';

const isValidTheme = (value: string | null): value is 'day' | 'night' =>
  value === 'day' || value === 'night';

const savedTheme = localStorage.getItem('theme');
const defaultTheme: 'day' | 'night' = isValidTheme(savedTheme) ? savedTheme : 'day';

const theme = ref<'day' | 'night'>(defaultTheme);

const toggleTheme = () => {
  theme.value = theme.value === 'day' ? 'night' : 'day';
};

watch(theme, (newTheme) => {
  document.body.classList.remove('day', 'night');
  document.body.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
}, { immediate: true });
</script>

<template>
  <button
    type="button"
    class="theme-toggle-btn"
    @click="toggleTheme"
  >
    {{ theme === 'day' ? 'NightTheme' : 'DayTheme' }}
  </button>
</template>
