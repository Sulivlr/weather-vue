<template>
    <v-btn
      :loading="loading"
      color="primary"
      @click="handleClick"
    >
      <span v-if="!loading">Отправить</span>
    </v-btn>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)

</script>
