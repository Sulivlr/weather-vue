<template>
  <div class="forecast-container">
    <div v-for="(hour, index) in forecast" :key="index" class="hour-block">
      <div class="hour">{{ hour.time }}</div>
      <div class="temp">{{ hour.temp }}°C</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '../cards/cardStyle/style.css'


const forecast = [
  { time: '09:00', temp: 22, icon: '01d' },
  { time: '12:00', temp: 26, icon: '02d' },
  { time: '15:00', temp: 28, icon: '03d' },
  { time: '18:00', temp: 25, icon: '04d' },
  { time: '21:00', temp: 21, icon: '10n' },
];
</script>
