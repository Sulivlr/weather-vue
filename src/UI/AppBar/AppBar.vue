<script setup lang="ts">
import '../AppBar/appbarStyle/style.css'
import DayNightButton from "@/UI/AppBar/toggleTheme/DayNightButton.vue";
import {useWeatherStore} from "@/stores/weatherStore/weatherStore.ts";
import {ref} from "vue";

const store = useWeatherStore();
const search = ref('');

const clearInput = () => {
  search.value = '';
  store.items = [];
};
</script>

<template>
  <header class="app-bar">
    <RouterLink to="/" @click.prevent="clearInput" class="app-title">Weather App</RouterLink>
    <DayNightButton />
  </header>
  <div class="date-time">
    {{
      new Date().toLocaleDateString('en-us', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      })}}
  </div>
</template>
