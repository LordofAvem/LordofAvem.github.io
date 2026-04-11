# 📺 剧集收藏夹

<script setup>
import CollectionGrid from '../../../.vitepress/theme/components/CollectionGrid.vue'
import CollectionCard from '../../../.vitepress/theme/components/CollectionCard.vue'

// 这里可以放入你的数据，比如从外部 json 导入，或直接写在这里。
const series = [
  {
    title: '浴血黑帮',
    cover: '/images/series/peaky-blinders.jpg',
    tags: ['犯罪','西装暴徒'],
    rating: '9.0',
    description: 'By order of the Peaky Blinders!',
    time: '2013 - 2022'
  },
  {
    title: '真探 第一季',
    cover: '/images/series/true-detective.jpg',
    tags: ['犯罪','人性','哲学'],
    rating: '9.6',
    description: '时间是个圆，终点也是起点。',
    time: '2014'
  },
  {
    title: '人生切割术',
    cover: '/images/series/severance.png',
    tags: ['职场','科幻','悬疑'],
    rating: '9.9',
    description: '工作是生活的一部分，还是生活是工作的一部分？',
    time: '2022 - 2025'
  },
  {
    title: '伦敦生活',
    cover: '/images/series/fleabag.jpg',
    tags: ['黑色幽默','治愈','第三面墙'],
    rating: '9.1',
    description: '- I love you. - It\'ll pass.',
    time: '2016 - 2019'
  },
  {
    title: '同乐者 第一季',
    cover: '/images/series/pluribus.jpg',
    tags: ['AI','人性','蜂群智能'],
    rating: '9.3',
    description: '- 卡罗尔斯图尔卡，这是什么 - 原子弹',
    time: '2025'
  },
  {
    title: '切尔诺贝利',
    cover: '/images/series/chernobyl.jpg',
    tags: ['灾难','人性'],
    rating: '9.0',
    description: '谎言的代价是什么？',
    time: '2019'
  },
  {
    title: '马男波杰克',
    cover: '/images/series/bojack-horseman.jpg',
    tags: ['自毁','治愈'],
    rating: '9.5',
    description: '',
    time: '2014 - 2020'
  },
  {
    title: '风骚律师',
    cover: '/images/series/better-call-saul.jpg',
    tags: ['犯罪','镜头艺术'],
    rating: '9.7',
    description: '嗨👋我是灵魂好男人😃你知道你有右端吗🤔',
    time: '2015 - 2022'
  },
  {
    title: '绝命毒师',
    cover: '/images/series/breaking-bad.jpg',
    tags: ['犯罪','人性裂变'],
    rating: '9.8',
    description: '现在说出我的名字😎',
    time: '2008 - 2013'
  },
]
</script>

## 2025 追剧记录

<CollectionGrid columns="3" gap="24px">
  <CollectionCard
    v-for="(item, index) in series"
    :key="index"
    :title="item.title"
    :cover="item.cover"
    :tags="item.tags"
    :rating="item.rating"
    :description="item.description"
    :time="item.time"
    aspectRatio="3/4"
  />
</CollectionGrid>
