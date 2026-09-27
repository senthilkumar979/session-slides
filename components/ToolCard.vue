<script setup lang="ts">
interface Props {
  title: string
  items?: string[]
  icon?: string
  accent?: 'gold' | 'navy' | 'green'
}

withDefaults(defineProps<Props>(), {
  items: () => [],
  accent: 'gold',
})
</script>

<template>
  <div class="mb-panel h-full flex flex-col gap-3">
    <div class="flex items-center gap-2">
      <div
        class="w-2 h-2 rounded-full"
        :class="accent === 'green' ? 'bg-green-500' : accent === 'navy' ? 'bg-blue-900' : 'bg-[var(--mb-gold)]'"
      />
      <h3 class="!m-0 !text-base font-bold tracking-wide">{{ title }}</h3>
    </div>
    <ul v-if="items.length" class="!m-0 !pl-4 space-y-1.5 text-sm text-[var(--mb-gray)]">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    <slot />
  </div>
</template>
