import { defineConfig } from 'vitepress'

export default defineConfig({
  // 忽略死链接导致构建失败
  ignoreDeadLinks: true,

  // 开启最后更新时间
  lastUpdated: true,

  // 这些是全局配置
  appearance: 'dark', 
  head: [
    ['title', {}, 'FLEITI'],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    // 全局通用的主题配置
    logo: { 
      light: '/title.svg', 
      dark: '/title_dark.svg' 
    },
    siteTitle: false, 
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LordofAvem' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/518215555?spm_id_from=333.1387.follow.user_card.click' }
    ],
    // 英文/全局最后更新时间文本
    lastUpdated: {
      text: 'Last Updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  },

  // 👇 i18n 多语言配置 👇
  locales: {
    // 1. 英文配置（默认放在根目录 / ）
    root: {
      label: 'English',
      lang: 'en',
      title: 'FLEITI',
      description: 'Recording, Marking, Sharing.',
      themeConfig: {
        nav: [
          { text: '🏠Home', link: '/' },
          // 导航栏多级下拉菜单演示
          { 
            text: '🛠️Skills', 
            items: [
              { text: 'Overview', link: '/skills/' },
              
              {
                items: [
                  { text: 'Automation Scripts', link: '/skills/automation/' },
                  { text: 'FPGA', link: '/skills/fpga' },
                ]
              }
            ]
          },
          { text: '📄Blog', link: '/blog/' }
        ],
        sidebar: [
          {
            text: 'Skills',
            items: [
              { text: 'Introduction', link: '/skills/' },
              // 侧边栏多级折叠目录演示
              { 
                text: 'Automation', 
                collapsed: true,
                items: [
                  { text: 'Introduction', link: '/skills/automation/' },
                  { text: 'Virtual Path Campus Run', link: '/skills/automation/campus_run' },
                ]
              },
              { 
                text: 'FPGA', 
                collapsed: true,
                items: [
                  { text: 'Introduction', link: '/skills/fpga' },
                ]
              },
            ]
          },
          {
            text: 'Blog',
            items: [
              { text: 'Welcome', link: '/blog/' }
            ]
          }
        ]
      }
    },
    
    // 2. 中文配置（放在 /zh/ 目录下）
    zh: {
      label: '简体中文',
      lang: 'zh',
      title: 'FLEITI', 
      description: '记录、标记、分享。',
      themeConfig: {
        // 中文版最后更新时间定制文本
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        nav: [
          { text: '🏠首页', link: '/zh/' },
          // 中文版导航栏下拉菜单
          { 
            text: '🛠️技能', 
            items: [
              { text: '总览', link: '/zh/skills/' },
              {
                items: [
                  { text: '自动化脚本', link: '/zh/skills/automation/' },
                  { text: 'FPGA', link: '/zh/skills/fpga' }
                ]
              }
            ]
          },
          { text: '📄博客', link: '/zh/blog/' }
        ],

        // 中文版侧边栏折叠目录
        sidebar: [
          {
            text: '技能积累',
            items: [
              { text: '介绍', link: '/zh/skills/' },
              { 
                text: '自动化脚本', 
                collapsed: true,
                items: [
                  { text: '介绍', link: '/zh/skills/automation/' },
                  { text: '虚拟路径校园跑', link: '/zh/skills/automation/campus_run' },
                ]
              },
              { 
                text: 'FPGA', 
                collapsed: true,
                items: [
                  { text: '介绍', link: '/zh/skills/fpga' },
                ]
              },
            ]
          },
          {
            text: '博客',
            items: [
              { text: '欢迎', link: '/zh/blog/' }
            ]
          }
        ]
      }
    }
  }
})