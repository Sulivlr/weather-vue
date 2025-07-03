<script setup lang="ts">
import AppBar from '@/UI/AppBar/AppBar.vue';
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
