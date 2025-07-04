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
      <button
        v-for="item in store.items"
        class="search-button"
        type="button"
        @click="() => onClick(item.id)"
      >
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
let debounceTimer: number | null = null;


const onFieldChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  search.value = target.value;

  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }

  debounceTimer = setTimeout(() => {
    if (target.value.length > 2) {
      store.fetchCity(target.value);
    }
  }, 300);
};

const onClick = async (cityId: string) => {
  await router.push(`/weather/${cityId}`);
};

const clearInput = () => {
  search.value = '';
  store.items = [];
};
</script>
