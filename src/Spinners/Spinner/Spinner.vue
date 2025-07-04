<template>
  <div class="spinner-container">
    <div class="spinner"></div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.spinner {
  width: 80px;
  height: 80px;
  border: 10px solid #eee;
  border-top: 10px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
