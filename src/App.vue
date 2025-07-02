<script setup lang="ts">
import WeatherCard from "./features/cards/WeatherCard.vue";
import SearchInput from "./features/input/SearchInput.vue";
import AppBar from "@/UI/AppBar/AppBar.vue";
</script>

<template>
  <div>
    <header>
      <AppBar/>
    </header>
    <main>
      <div class="container" style="padding: 0;">
        <div style="width: 100%;">
          <SearchInput/>
          <WeatherCard/>
        </div>
      </div>
    </main>
  </div>
</template>
