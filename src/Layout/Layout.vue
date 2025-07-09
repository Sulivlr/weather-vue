<script setup lang="ts">

import AppBar from "@/UI/AppBar/AppBar.vue";
import SearchInput from "@/features/input/SearchInput.vue";
</script>

<template>
  <header>
    <AppBar />
    <SearchInput />
  </header>
  <main>
    <slot/>
  </main>
</template>
