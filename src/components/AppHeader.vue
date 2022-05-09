<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <h1 class="text-7xl">{{ title }}</h1>
</template>
