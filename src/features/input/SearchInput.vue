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
            v-for="(item, index) in suggestions"
            :key="index"
            class="suggestion"
            @click="selectCity(item)"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import '../input/inputStyle/style.css';
import { reactive, ref } from 'vue';
import {useWeatherStore} from "@/stores/weatherStore/weatherStore.ts";

const store = useWeatherStore();
const form = reactive({
  search: '',
});

const suggestions = ref<string[]>([]);
const timeout = ref<ReturnType<typeof setTimeout> | null>(null);

const onFieldChange = (event: Event) => {
  const { name, value } = event.target as HTMLInputElement;

  form[name as keyof typeof form] = value;

  if (timeout.value) clearTimeout(timeout.value);

  timeout.value = setTimeout(async () => {
    console.log(form.search);
    await store.fetchCities(form.search);
    console.log(store.items.values);
  }, 1000);
};

const clearInput = () => {
  form.search = '';
  suggestions.value = [];
};

const selectCity = (city: string) => {
  form.search = city;
  suggestions.value = [];
};
</script>
