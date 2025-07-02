<script setup lang="ts">
import '../AppBar/appbarStyle/style.css'
import DayNightButton from "@/UI/AppBar/toggleTheme/DayNightButton.vue";

</script>

<template>
  <header class="app-bar">
    <h1 class="app-title">Weather App</h1>
    <DayNightButton/>
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
