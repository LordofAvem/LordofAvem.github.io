<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    default: () => []
  },
  rating: {
    type: [String, Number],
    default: ''
  },
  time: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  aspectRatio: {
    type: String,
    default: '3/4' // supports '3/4' or '16/9'
  }
})

const coverStyle = computed(() => ({
  aspectRatio: props.aspectRatio === '16/9' ? '16/9' : '3/4'
}))
</script>

<template>
  <div class="collection-card">
    <div class="card-inner">
      <div class="cover-wrapper" :style="coverStyle">
        <img :src="cover" :alt="title" loading="lazy" />
        <div class="rating-badge" v-if="rating">{{ rating }}</div>
      </div>
      <div class="content-overlay">
        <h3 class="title">{{ title }}</h3>
        <p class="time" v-if="time">{{ time }}</p>
        <p class="description" v-if="description">{{ description }}</p>
        <div class="tags" v-if="tags && tags.length">
          <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.collection-card {
  perspective: 1000px;
  cursor: pointer;
  display: block;
  text-decoration: none;
  --card-radius: 0px; /* 默认暗色模式（直角） */
  --glass-bg: rgba(30, 30, 32, 0.4);
  --glass-border: rgba(255, 255, 255, 0.08);
}

:root:not(.dark) .collection-card {
  --card-radius: 12px; /* 浅色模式（圆角） */
}

.card-inner {
  position: relative;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--card-radius);
  overflow: hidden;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
              box-shadow 0.4s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.collection-card:hover .card-inner {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 
              0 0 40px rgba(120, 150, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.15);
}

.cover-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #1a1a1a;
}

.cover-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.collection-card:hover .cover-wrapper img {
  transform: scale(1.05);
}

/* 顶部评分标签 */
.rating-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  color: #fff;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* 底部内容遮罩层 */
.content-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 16px 16px;
  background: linear-gradient(
    to bottom,
    rgba(20, 20, 22, 0) 0%,
    rgba(20, 20, 22, 0.8) 40%,
    rgba(20, 20, 22, 0.95) 100%
  );
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
}

.collection-card:hover .content-overlay {
  opacity: 1;
  transform: translateY(0);
}

.title {
  margin: 0 0 6px 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.3;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.time {
  margin: 0 0 8px 0;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  font-family: monospace;
}

.description {
  margin: 0 0 10px 0;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.collection-card:hover .description {
  opacity: 1;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
}

/* 适配浅色模式 */
:root:not(.dark) .card-inner {
  --glass-bg: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

:root:not(.dark) .title {
  color: #fff; /* 渐变背景下依然保持白色可视性最佳 */
}
</style>
