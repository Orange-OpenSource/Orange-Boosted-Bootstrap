<script setup lang="ts">
withDefaults(defineProps<{ name?: string }>(), { name: 'world' })
</script>

<template>
  <p>Hello, {{ name }}!</p>
</template>
