<template>
  <div class="forecast-container" v-if="weather && weather.list.length">
    <div
      class="hour-block"
      v-for="(item, index) in weather.list.slice(0, 8)"
      :key="index"
    >
      <div class="hour">{{ formatHour(item.dt_txt) }}</div>
      <img
        class="icon"
        :src="`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`"
        :alt="item.weather[0].description"
      />
      <div class="temp">{{ Math.round(item.main.temp) }}°C</div>
    </div>
  </div>
</template>


<script setup lang="ts">
import '../cards/cardStyle/style.css'
import { useWeatherStore } from "@/stores/weatherStore/weatherStore.ts";
import { computed } from "vue";

const store = useWeatherStore();
const weather = computed(() => store.oneWeather);

const formatHour = (datetime: string): string => {
  const date = new Date(datetime);
  return date.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });
};
</script>
