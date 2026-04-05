<template>
  <button
    v-if="isDocsPage"
    class="sidebar-toggle-btn"
    type="button"
    :aria-label="isOpen ? '收起左侧边栏' : '打开左侧边栏'"
    @click="toggleSidebar"
  >
    {{ isOpen ? '收起侧栏' : '展开侧栏' }}
  </button>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()
const STORAGE_KEY = 'vp-sidebar-open'
const isOpen = ref(true)

const isDocsPage = computed(() => page.value.relativePath !== 'index.md')

const syncClass = () => {
  const collapsed = !isOpen.value
  document.documentElement.classList.toggle('sidebar-collapsed', collapsed)
}

const setOpen = (open: boolean) => {
  isOpen.value = open
  syncClass()
  localStorage.setItem(STORAGE_KEY, String(open))
}

const toggleSidebar = () => {
  if (!isDocsPage.value) return
  setOpen(!isOpen.value)
}

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)
  setOpen(saved === null ? true : saved === 'true')
})

watch(isDocsPage, (val) => {
  if (val) {
    syncClass()
  } else {
    document.documentElement.classList.remove('sidebar-collapsed')
  }
})
</script>
