import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "FLEITI",
  description: "Recording, Marking, Sharing.",
  viewTransition: true,
  
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
      { icon: 'github', link: 'https://github.com/LordofAvem' },
      { icon: { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bilibili</title><path d="M5.82 4.932a1 1 0 0 1 1.414 0l1.768 1.768h5.997l1.768-1.768a1 1 0 1 1 1.414 1.414l-.354.354h1.422A3.75 3.75 0 0 1 23 10.45v6.8A3.75 3.75 0 0 1 19.25 21H4.75A3.75 3.75 0 0 1 1 17.25v-6.8A3.75 3.75 0 0 1 4.75 6.7h1.422l-.354-.354a1 1 0 0 1 0-1.414ZM4.75 8.7A1.75 1.75 0 0 0 3 10.45v6.8C3 18.217 3.783 19 4.75 19h14.5A1.75 1.75 0 0 0 21 17.25v-6.8a1.75 1.75 0 0 0-1.75-1.75H4.75Zm3.5 3.05a1 1 0 0 1 1 1v2.2a1 1 0 1 1-2 0v-2.2a1 1 0 0 1 1-1Zm7.5 0a1 1 0 0 1 1 1v2.2a1 1 0 1 1-2 0v-2.2a1 1 0 0 1 1-1Z"/></svg>' }, link: 'https://search.bilibili.com/all?keyword=LordofAvem' },
      { icon: 'youtube', link: 'https://www.youtube.com/@LordofAvem' },
      { icon: 'x', link: 'https://x.com/LordofAvem' }
    ]
  }
})
