<template>
  <div class="form-container">
    <form class="weather-form" @submit.prevent>
      <div class="input-wrapper">
        <input
          v-model="search"
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
        >×</button>
      </div>

      <button class="search-button" type="button" @click="onClick">
        Find
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import '../input/inputStyle/style.css';
import { ref } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore/weatherStore.ts';
import { useRouter } from "vue-router";

const store = useWeatherStore();
const search = ref('');
const router = useRouter();

const onFieldChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  search.value = target.value;
};

const onClick = async (id: string) => {
  await store.fetchCity(search.value);
  await router.push(`/weather/${id}`)
};

const clearInput = () => {
  search.value = '';
  store.items = [];
};
</script>
