import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "FLEITI",
  description: "Recording, Marking, Sharing.",
  
  // 强制全局深色模式 (设为 'dark' 则是默认深色但右上角带切换按钮)
  appearance: 'dark', 
  
  // 配置网站图标 Favicon
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🏠Home', link: '/' },
      { text: '🛠️Skills', link: '/skills/' },
      { text: '📄Blog', link: '/blog/' }
    ],

    sidebar: [
      {
        text: 'Skills Accumulation',
        items: [
          { text: 'Introduction', link: '/skills/' },
          { text: 'FPGA', link: '/skills/fpga' }
        ]
      },
      {
        text: 'Blog',
        items: [
          { text: 'Welcome', link: '/blog/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LordofAvem' }
    ]
  }
})