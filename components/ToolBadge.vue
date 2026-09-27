<script setup lang="ts">
interface Props {
  label: string
}

defineProps<Props>()
</script>

<template>
  <span class="mb-chip">
    <slot />
    {{ label }}
  </span>
</template>
