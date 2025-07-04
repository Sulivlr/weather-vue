<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useWeatherStore } from '@/stores/weatherStore/weatherStore.ts';
import Spinner from '@/Spinners/Spinner/Spinner.vue';

const store = useWeatherStore();
const route = useRoute();

const weather = computed(() => store.oneWeather);
const isFetching = computed(() => store.isFetching);

const iconUrl = computed(() =>
  weather.value?.list?.[0]?.weather?.[0]?.icon
    ? `https://openweathermap.org/img/wn/${weather.value.list[0].weather[0].icon}@4x.png`
    : ''
);

onMounted(() => {
  const cityId = Number(route.params.id);
  if (cityId) {
    store.fetchOneCity(cityId);
  }
});
</script>

<template>
  <div class="container">
    <div v-if="isFetching">
      <Spinner />
    </div>

    <div v-else-if="weather && weather.list.length && weather.list[0].weather.length" class="weather-card">
      <div class="header">
        <div class="temperature">
          {{ weather.list[0].main.temp }}°C
          <div class="feels-like">Ощущается как {{ weather.list[0].main.feels_like }}°C</div>
        </div>
        <img :src="iconUrl" :alt="weather.list[0].weather[0].description" class="weather-icon" />
      </div>

      <h2 class="city">{{ weather.city.name }}</h2>
      <p class="description">{{ weather.list[0].weather[0].description }}</p>

      <div class="info">
        <div class="humidity">💧 Влажность: <strong>{{ weather.list[0].main.humidity }}%</strong></div>
        <div class="wind">💨 Ветер: <strong>{{ weather.list[0].wind.speed }} м/с</strong></div>
      </div>
    </div>

    <div v-else>
      <Spinner />
    </div>
  </div>
</template>
