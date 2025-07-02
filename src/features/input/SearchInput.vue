<template>
  <div class="form-container">
    <form class="weather-form">
      <div class="input-wrapper">
        <input
          v-model="form.search"
          @input="onFieldChange"
          type="text"
          name="search"
          placeholder="Select a city"
          class="city-input"
        />

        <button
          @click.prevent="clearInput"
          class="clear-button"
          type="button"
        >×
        </button>

        <div v-if="suggestions.length" class="suggestions">
          <div
            v-for="city in suggestions"
            :key="city.id"
            class="suggestion"
            @click="selectCity(city)"
          >
            {{ city.name }}
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import '../input/inputStyle/style.css';
import { reactive, ref } from 'vue';
import { useWeatherStore } from "@/stores/weatherStore/weatherStore.ts";
import type { City } from "@/types.ts";

const store = useWeatherStore();
const form = reactive({
  search: '',
});

const suggestions = ref<City[]>([]);
const timeout = ref<ReturnType<typeof setTimeout> | null>(null);

const onFieldChange = (event: Event) => {
  const { name, value } = event.target as HTMLInputElement;

  form[name as keyof typeof form] = value;

  if (timeout.value) clearTimeout(timeout.value);

  if (!value.trim()) {
    suggestions.value = [];
    return;
  }

  timeout.value = setTimeout(async () => {
    try {
      const city = await store.fetchCities(form.search);
      if (city) {
        suggestions.value = [city];
      } else {
        suggestions.value = [];
      }
    } catch (error) {
      suggestions.value = [];
    }
  }, 500);
};

const clearInput = () => {
  form.search = '';
  suggestions.value = [];
};

const selectCity = (city: City) => {
  form.search = city.name;
  suggestions.value = [];

};
</script>
