# 我的收藏夹

<script setup>
import CollectionGrid from '../../../.vitepress/theme/components/CollectionGrid.vue'
import CollectionCard from '../../../.vitepress/theme/components/CollectionCard.vue'

// 这里可以放入你的数据，比如从外部 json 导入，或直接写在这里。
const games = [
  {
    title: '塞尔达传说：王国之泪',
    cover: '/images/series/breaking-bad.jpg',
    tags: ['Masterpiece', 'RPG', 'Action'],
    rating: '9.8',
    time: '2023-05-12',
    description: '年度最佳，无与伦比的物理引擎探索体验。天马行空的创造力。'
  }
]
</script>

## 2026 游玩

这是一种 Steam 库海报墙风格的卡片组件展示：

<CollectionGrid columns="3" gap="24px">
  <CollectionCard
    v-for="(item, index) in games"
    :key="index"
    :title="item.title"
    :cover="item.cover"
    :tags="item.tags"
    :rating="item.rating"
    :time="item.time"
    :description="item.description"
    aspectRatio="3/4"
  />
</CollectionGrid>
