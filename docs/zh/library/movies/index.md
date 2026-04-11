# 🎬 电影收藏夹

记录一下自己看过的电影，按时间顺序排的，最近看的在前面。很早之前看的大部分都有点记不清了，有的看过的可能没放上来@_@

<script setup>
import CollectionGrid from '../../../.vitepress/theme/components/CollectionGrid.vue'
import CollectionCard from '../../../.vitepress/theme/components/CollectionCard.vue'

// 这里可以放入你的数据，比如从外部 json 导入，或直接写在这里。
const movies_2026 = [
  {
    title: '挽救计划',
    cover: '/images/movies/project-hail-mary.jpg',
    tags: ['科幻','宏大','幽默'],
    rating: '9.3',
    description: '星际拓荒僵尸必看👍两个文明的互相救赎',
    time: 2026
  }
]

const movies_prev = [
  {
    title: '美丽心灵',
    cover: '/images/movies/a-beautiful-mind.jpg',
    tags: ['传记','心理','数学'],
    rating: '9.0',
    description: '约翰·纳什传记。片中的反转设计的很巧妙',
    time: 2001
  },
  {
    title: '教父 II',
    cover: '/images/movies/the-godfather-part-II.jpg',
    tags: ['犯罪','剧情'],
    rating: '9.7',
    description: '孤独的二代目教父，为了家族必须背负的代价',
    time: 1974
  },
  {
    title: '沙丘 II',
    cover: '/images/movies/dune-part-two.png',
    tags: ['科幻','宏大'],
    rating: '9.1',
    description: '视觉效果不错',
    time: 2023
  },
  {
    title: '你想活出怎样的人生',
    cover: '/images/movies/hayao-miyazakis.png',
    tags: ['宫崎骏'],
    rating: '9.0',
    description: '电影院里没太看懂@_@',
    time: 2023
  },
  {
    title: '阿凡达：水之道',
    cover: '/images/movies/avatar-the-way-of-water.png',
    tags: ['科幻','视觉震撼'],
    rating: '9.0',
    description: '情怀作吧，奔着视觉效果去的',
    time: 2022
  },
  {
    title: '绿皮书',
    cover: '/images/movies/green-book.jpg',
    tags: ['剧情','喜剧'],
    rating: '9.1',
    description: '剧情还不赖',
    time: 2018
  },
  {
    title: '奥本海默',
    cover: '/images/movies/oppenheimer.jpg',
    tags: ['剧情','传记','诺兰'],
    rating: '9.4',
    description: 'Now I am become Death, the destroyer of worlds.',
    time: 2023
  },
  {
    title: '流浪地球 II',
    cover: '/images/movies/the-wandering-earth2.jpg',
    tags: ['科幻','宏大'],
    rating: '9.0',
    description: '中国科幻电影之光了，视觉效果不错',
    time: 2022
  },
  {
    title: '失控玩家',
    cover: '/images/movies/free-guy.jpg',
    tags: ['科幻','游戏'],
    rating: '9.0',
    description: '类《头号玩家》的第二部游戏科幻电影，适合娱乐看看',
    time: 2021
  },
  {
    title: '猫鼠游戏',
    cover: '/images/movies/catch-me-if-you-can.jpg',
    tags: ['犯罪','幽默','喜剧'],
    rating: '9.1',
    description: '挺搞笑的，适合娱乐看看',
    time: 2002
  },
  {
    title: '模仿游戏',
    cover: '/images/movies/the-imitation-game.jpg',
    tags: ['传记','图灵','密码学'],
    rating: '9.4',
    description: '图灵传记，密码学启蒙了',
    time: 2014
  },
  {
    title: '西线无战事（翻新）',
    cover: '/images/movies/all-quiet-on-the-western-front.jpg',
    tags: ['战争','剧情'],
    rating: '9.5',
    description: '经典战争电影，剧情很深刻',
    time: 2022
  },
  {
    title: '信条',
    cover: '/images/movies/tenet.png',
    tags: ['科幻','悬疑','诺兰'],
    rating: '9.5',
    description: '在时间上的独家设计，理解门槛有点高',
    time: 2020
  },
  {
    title: '钢琴师',
    cover: '/images/movies/the-pianist.jpg',
    tags: ['战争','剧情'],
    rating: '9.5',
    description: '二战中的犹太钢琴师',
    time: 2002
  },
  {
    title: '海上钢琴师',
    cover: '/images/movies/the-legend-of-1900.jpg',
    tags: ['剧情','音乐'],
    rating: '9.5',
    description: '终其一生都没下过船的钢琴师',
    time: 1998
  },
  {
    title: '阿甘正传',
    cover: '/images/movies/forrest-gump.jpg',
    tags: ['剧情','喜剧','励志'],
    rating: '9.3',
    description: '二等饼干！',
    time: 2001
  },
  {
    title: '楚门的世界',
    cover: '/images/movies/the-truman-show.jpg',
    tags: ['剧情','喜剧'],
    rating: '9.3',
    description: 'Good morning, and in case I don\'t see ya, good afternoon, good evening, and good night!',
    time: 2001
  },
  {
    title: '教父',
    cover: '/images/movies/the-godfather.jpg',
    tags: ['剧情','犯罪'],
    rating: '9.7',
    description: '我会给他一个无法拒绝的提议',
    time: 1972
  },
]

const movies_long_prev = [
  {
    title: '头号玩家',
    cover: '/images/movies/ready-player-one.jpg',
    tags: ['科幻','游戏'],
    rating: '9.2',
    description: '经典的游戏科幻电影，了解游戏文化的入门之作',
    time: 2018
  },
  {
    title: '流浪地球',
    cover: '/images/movies/the-wandering-earth.jpg',
    tags: ['科幻','宏大'],
    rating: '9.0',
    description: '当时来看视觉效果还不错片子',
    time: 2019
  },
  {
    title: '肖申克的救赎',
    cover: '/images/movies/the-shawshank-redemption.jpg',
    tags: ['剧情','励志'],
    rating: '9.7',
    description: '希望和坚持',
    time: 1994
  },
  {
    title: '禁闭岛',
    cover: '/images/movies/shutter-island.jpg',
    tags: ['悬疑','心理'],
    rating: '9.3',
    description: '有点忘记了，印象里剧情还是不错',
    time: 2010
  },
  {
    title: '敦刻尔克',
    cover: '/images/movies/dunkirk.jpg',
    tags: ['战争','剧情','诺兰'],
    rating: '9.4',
    description: '诺兰的战争片别有一番风味啊',
    time: 2017
  },
  {
    title: '怦然心动',
    cover: '/images/movies/flipped.jpg',
    tags: ['青春','爱情'],
    rating: '9.3',
    description: '纯爱党大胜利',
    time: 2010
  },
  {
    title: '盗梦空间',
    cover: '/images/movies/inception.jpg',
    tags: ['科幻','诺兰'],
    rating: '9.7',
    description: '最后的陀螺会停吗？',
    time: 2010
  },
  {
    title: '星际穿越',
    cover: '/images/movies/interstellar.jpg',
    tags: ['科幻','诺兰','宏大'],
    rating: '10.0',
    description: '人性如此脆弱，可爱如此坚强',
    time: 2014
  },
  {
    title: '阿凡达',
    cover: '/images/movies/avatar.jpg',
    tags: ['科幻','宏大'],
    rating: '9.7',
    description: '很小的时候看的，当时最震撼的视觉效果',
    time: 2009
  },
]
</script>

## 2026 观影记录

<CollectionGrid columns="3" gap="24px">
  <CollectionCard
    v-for="(item, index) in movies_2026"
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

## 之前看的
记不到多久之前看的了@_@ 大概是按时间顺序排的吧

<CollectionGrid columns="3" gap="24px">
  <CollectionCard
    v-for="(item, index) in movies_prev"
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

## 更早之前看的
很久很久之前看的了，不乏经典啊

<CollectionGrid columns="3" gap="24px">
  <CollectionCard
    v-for="(item, index) in movies_long_prev"
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
