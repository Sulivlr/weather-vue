<template>
  <div class="container">
    <div class="weather-card">
      <div class="header">
        <div class="temperature">
          {{ temperature }}°C
          <div class="feels-like">Ощущается как {{ feelsLike }}°C</div>
        </div>
        <img :src="iconUrl" :alt="description" class="weather-icon" />
      </div>

      <h2 class="city">{{ cityName }}</h2>
      <p class="description">{{ description }}</p>

      <div class="info">
        <div class="humidity">💧 Влажность: <strong>{{ humidity }}%</strong></div>
        <div class="wind">💨 Ветер: <strong>{{ windSpeed }} м/с</strong></div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import '@/features/cards/cardStyle/style.css'

const city = ref('')
const cityName = 'Бишкек'
const description = 'Переменная облачность'
const temperature = 22
const feelsLike = 24
const humidity = 65
const windSpeed = 4.2

const hour = new Date().getHours()
const isDay = hour >= 6 && hour < 18
const icon = `03${isDay ? 'd' : 'n'}`
const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

function onSearch() {
  alert(`Вы ищете погоду для: ${city.value}`)
}
</script>

