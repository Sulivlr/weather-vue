<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref, watch} from "vue";
import {useWeatherStore} from "@/stores/weatherStore/weatherStore.ts";
import Layout from "@/Layout/Layout.vue";

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
    <main>
      <div class="container" style="padding: 0; display: block">
        <Layout>
          <router-view />
        </Layout>
      </div>
    </main>
  </div>
</template>
