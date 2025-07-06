<script setup lang="ts">
import AppBar from '@/UI/AppBar/AppBar.vue';
import {useRoute} from "vue-router";
import {computed, ref, watch} from "vue";
import {useWeatherStore} from "@/stores/weatherStore/weatherStore.ts";

const route = useRoute();
const store = useWeatherStore();
const search = ref('');

watch(() => route.fullPath, () => {
  search.value = '';
  store.items = [];
});

</script>

<template>
  <div>
    <header>
      <AppBar />
    </header>
    <main>
      <div class="container" style="padding: 0; display: block">
        <router-view />
      </div>
    </main>
  </div>
</template>
