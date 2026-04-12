<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    default: '#'
  },
  status: {
    type: String,
    default: 'active' // 支持 'active', 'archived', 'wip' 等
  },
  stars: {
    type: [Number, String],
    default: 0
  },
  forks: {
    type: [Number, String],
    default: 0
  },
  language: {
    type: String,
    default: 'JavaScript'
  },
  loc: {
    type: [Number, String],
    default: ''
  },
  tags: {
    type: Array,
    default: () => []
  }
})

// 根据主语言匹配经典色块
const langColors = {
  'Vue': '#41b883',
  'C++': '#f34b7d',
  'C': '#555555',
  'Python': '#3572A5',
  'TypeScript': '#3178c6',
  'JavaScript': '#f1e05a',
  'Go': '#00ADD8',
  'Rust': '#dea584',
  'React': '#61dafb',
  'Java': '#b07219'
}

// 设定不同状态指示灯的颜色和文本
const statusConfig = computed(() => {
  const s = props.status.toLowerCase()
  if (s === 'archived') return { color: '#e5534b', label: 'Archived' }
  if (s === 'wip') return { color: '#d29922', label: 'WIP' }
  return { color: '#57ab5a', label: 'Active' }
})

const lgColor = computed(() => langColors[props.language] || '#8b949e')
</script>

<template>
  <a :href="url" target="_blank" rel="noopener noreferrer" class="repo-card">
    <div class="repo-header">
      <!-- 状态指示灯 -->
      <div class="status-indicator">
        <span class="dot" :style="{ backgroundColor: statusConfig.color }"></span>
        <span class="status-text">{{ statusConfig.label }}</span>
      </div>
      
      <!-- 星和 Fork（如果为 0 就不显示，符合 github 简约设计） -->
      <div class="stats" v-if="stars > 0 || forks > 0">
        <span v-if="stars > 0" class="stat-item" title="Stars">⭐ {{ stars }}</span>
        <span v-if="forks > 0" class="stat-item" title="Forks">🍴 {{ forks }}</span>
      </div>
    </div>

    <!-- 标题：带一个 Github repo 小图标 -->
    <h3 class="repo-title">
      <svg aria-hidden="true" class="repo-icon" height="16" viewBox="0 0 16 16" version="1.1" width="16">
        <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
      </svg>
      {{ title }}
    </h3>

    <!-- 描述层（支持外部传入 Vue slot，这意味着可以用 Markdown 写公式等文字） -->
    <div class="repo-desc">
      <slot></slot>
    </div>

    <!-- 底部：语言色块、LOC代码行数与标签数组 -->
    <div class="repo-footer">
      <div class="footer-left">
        <span class="lang" v-if="language">
          <span class="lang-color" :style="{ backgroundColor: lgColor }"></span>
          <span>{{ language }}</span>
        </span>
        <span class="loc" v-if="loc">📝 {{ loc }} LOC</span>
      </div>
      <div class="tags" v-if="tags && tags.length">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </a>
</template>

<style scoped>
.repo-card {
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  background-color: var(--vp-c-bg-alt); /* 次级背景色，如燕麦色或深灰，配合前一步设置的护眼模式 */
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

/* 强烈的悬停上浮与品牌色框边交互 */
.repo-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-color: var(--vp-c-brand-1);
}

:root.dark .repo-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.repo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  font-size: 12px;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  background: var(--vp-c-bg);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
}

:root.dark .dot {
  box-shadow: 0 0 0 1px rgba(255,255,255,0.1);
}

.status-text {
  font-weight: 650;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stats {
  display: flex;
  gap: 12px;
}

.stat-item {
  color: var(--vp-c-text-2);
  font-weight: 600;
  font-family: monospace;
  font-size: 13px;
}

.repo-title {
  margin: 0 0 12px 0;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--vp-c-brand-1); /* 用经典 GitHub 蓝来渲染标题，表明它是可点的链接 */
}

.repo-icon {
  fill: currentColor;
  opacity: 0.8;
}

.repo-desc {
  flex-grow: 1;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 20px;
}

/* 使用 slot 传入 markdown 渲染后的元素往往带有默认边距，通过 \:deep 强制取消边距避免卡片被撑大过头 */
.repo-desc :deep(p) {
  margin: 0;
}

.repo-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 13px;
  color: var(--vp-c-text-3);
  flex-wrap: wrap;
  gap: 12px;
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.lang {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  color: var(--vp-c-text-2);
}

.lang-color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

:root.dark .lang-color {
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* 硬核元素：LOC 等宽粗体显示 */
.loc {
  font-family: monospace;
  font-weight: 600;
  color: var(--vp-c-text-2);
}

.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  padding: 4px 10px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 11px;
  color: var(--vp-c-text-2);
}
</style>