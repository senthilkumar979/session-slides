<script setup lang="ts">
interface Item {
  title: string
  items: string[]
}

interface Props {
  weeks: Item[]
}

defineProps<Props>()
</script>

<template>
  <div class="grid grid-cols-4 gap-3">
    <div v-for="(week, i) in weeks" :key="week.title" class="mb-week">
      <div class="week-label">WEEK {{ i + 1 }}</div>
      <h3 class="!mt-2 !mb-3 !text-base font-bold">{{ week.title }}</h3>
      <ul class="!m-0 !pl-4 space-y-1.5 text-xs text-[var(--mb-gray)]">
        <li v-for="item in week.items" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
