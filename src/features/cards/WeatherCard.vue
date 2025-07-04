<template>
  <div class="container">
    <div v-if="isFetching">
      <Spinner />
    </div>

    <div class="weather-card" v-else-if="weather">
      <div class="header">
        <div class="temperature">
          {{ weather.main.temp }}°C
          <div class="feels-like">Ощущается как {{ weather.main.feels_like }}°C</div>
        </div>
        <img :src="iconUrl" :alt="weather.weather[0].description" class="weather-icon" />
      </div>

      <h2 class="city">{{ weather.name }}</h2>
      <p class="description">{{ weather.weather[0].description }}</p>

      <div class="info">
        <div class="humidity">💧 Влажность: <strong>{{ weather.main.humidity }}%</strong></div>
        <div class="wind">💨 Ветер: <strong>{{ weather.wind.speed }} м/с</strong></div>
      </div>
    </div>
    <div v-else>
      <Spinner/>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/features/cards/cardStyle/style.css';
import { useWeatherStore } from "@/stores/weatherStore/weatherStore.ts";
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";
import Spinner from "@/Spinners/Spinner/Spinner.vue";

const store = useWeatherStore();
const route = useRoute();

const weather = computed(() => store.oneWeather);
const isFetching = computed(() => store.isFetching);

const iconUrl = computed(() =>
  weather.value
    ? `https://openweathermap.org/img/wn/${weather.value.weather[0].icon}@4x.png`
    : ''
);

onMounted(() => {
  const cityId = Number(route.params.id);
  store.fetchOneCity(cityId);
});
</script>
