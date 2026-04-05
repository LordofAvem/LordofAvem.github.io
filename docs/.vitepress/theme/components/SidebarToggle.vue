<template>
  <button
    v-if="isDocsPage"
    class="sidebar-toggle-btn"
    type="button"
    :aria-label="isOpen ? 'Collapse left sidebar' : 'Expand left sidebar'"
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

const readStoredOpen = () => {
  if (typeof window === 'undefined') return null
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

const writeStoredOpen = (open: boolean) => {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, String(open))
  } catch {
  }
}

const setOpen = (open: boolean) => {
  isOpen.value = open
  syncClass()
  writeStoredOpen(open)
}

const toggleSidebar = () => {
  if (!isDocsPage.value) return
  setOpen(!isOpen.value)
}

onMounted(() => {
  const saved = readStoredOpen()
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
