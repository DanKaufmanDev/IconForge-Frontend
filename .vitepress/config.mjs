import { defineConfig } from 'vitepress'

export default defineConfig({
  head:[ ['script', {src: 'https://cdn.jsdelivr.net/npm/iconforged@latest' } ],
   ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }]
],

  srcDir: "docs",
  
  title: "IconForge",
  description: "IconForge is a performance-focused, utility-style icon library.",

  themeConfig: {
    logo: {src: '/if.webp'},
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/styling/state-and-responsive-prefixes' },
      { text: 'Icons', link: '/icons' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/general/getting-started' },
            { text: 'Usage', link: '/general/usage' },
            { text: 'Configuration', link: '/general/config' }
          ]
        },
        {
          text: 'Styling',
          items: [
            { text: 'State & Prefixes', link: '/styling/state-and-responsive-prefixes' },
            { text: 'Colors', link: '/styling/colors' },
            { text: 'Background Colors', link: '/styling/background-colors' },
            { text: 'Gradients', link: '/styling/gradients' },
            { text: 'Border Colors', link: '/styling/border-colors' },
            { text: 'Sizing', link: '/styling/sizing' },
            { text: 'Height', link: '/styling/height' },
            { text: 'Width', link: '/styling/width' },
            { text: 'Rotate', link: '/styling/rotate' },
            { text: 'Flip', link: '/styling/flip' },
            { text: 'Opacity', link: '/styling/opacity' },
            { text: 'Cursor', link: '/styling/cursor' },
            { text: 'Display', link: '/styling/display' },
            { text: 'Flexbox', link: '/styling/flexbox' },
            { text: 'Spacing', link: '/styling/spacing' },
            { text: 'Animations', link: '/styling/animations' },
            { text: 'Typography', link: '/styling/typography' },
            { text: 'Positioning', link: '/styling/positioning' },
            { text: 'Transitions', link: '/styling/transitions' },
            { text: 'Transforms', link: '/styling/transforms' },
            { text: 'Grid', link: '/styling/grid' },
            { text: 'Border Radius', link: '/styling/border-radius' }
          ]
        },
        {
          text: 'VSCode Extension',
          items: [{ text: 'Official IconForge Intellisense', link: '/extension/intellisense'}]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DanKaufmanDev/IconForge' }
    ]
  }
}) 