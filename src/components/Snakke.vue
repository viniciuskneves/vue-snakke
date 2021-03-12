<template>
  <progress :value="progress" class="snakke-progress"></progress>
</template>

<script setup>
import useSnakke from '../services/Snakke';

const { progress } = useSnakke();
</script>

<style scoped>
progress {
  appearance: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
}

::-webkit-progress-bar {
  background-color: transparent;
}

::-webkit-progress-value {
  background-color: #3fb983;
}
</style>
