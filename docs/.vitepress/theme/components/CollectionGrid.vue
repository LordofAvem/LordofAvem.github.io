<script setup>
import { computed } from 'vue'

const props = defineProps({
  columns: {
    type: [Number, String],
    default: 4 // default 4 cols for big screens
  },
  gap: {
    type: String,
    default: '24px' // spacing between cards
  }
})

const gridStyle = computed(() => ({
  '--grid-cols': props.columns,
  '--grid-gap': props.gap
}))
</script>

<template>
  <div class="collection-grid" :style="gridStyle">
    <slot></slot>
  </div>
</template>

<style scoped>
.collection-grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-cols), 1fr);
  gap: var(--grid-gap);
  padding: 20px 0;
  width: 100%;
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .collection-grid {
    grid-template-columns: repeat(min(var(--grid-cols), 3), 1fr);
  }
}

@media (max-width: 900px) {
  .collection-grid {
    grid-template-columns: repeat(min(var(--grid-cols), 2), 1fr);
    gap: 16px;
  }
}

@media (max-width: 600px) {
  .collection-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
