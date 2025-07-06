<script setup lang="ts">
import {useWeatherStore} from "@/stores/weatherStore/weatherStore.ts";
import {computed, onMounted} from "vue";
import {useRoute} from "vue-router";
import Spinner from "@/Spinners/Spinner/Spinner.vue";

const store = useWeatherStore();
const route = useRoute();

const weather = computed(() => store.oneWeather);
const isFetching = computed(() => store.isFetching);

const forecast = computed(() => {
  if (!weather.value?.list?.length) {
    return [];
  }
  return weather.value.list
    .filter((_, index) => index % 7 === 0)
    .map(item => ({
      date: new Date(item.dt_txt).toLocaleDateString("en-US", {weekday: "short"}),
      icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
      temperature: Math.round(item.main.temp),
      description: item.weather[0].description,
    }));
});

onMounted(() => {
  const cityId = Number(route.params.id);
  if (cityId) {
    store.fetchOneCity(cityId);
  }
});
</script>


<template>
  <div class="weekly-container">
    <div v-if="isFetching">
      <Spinner/>
    </div>
    <template v-else>
      <div
        class="card"
        v-for="(day, index) in forecast"
        :key="index"
      >
        <div class="date">{{ day.date }}</div>
        <div class="icon">
          <img :src="day.icon" alt="weather icon"/>
        </div>
        <div class="temp">{{ day.temperature }}°C</div>
        <div class="description">{{ day.description }}</div>
      </div>
    </template>
  </div>
</template>

