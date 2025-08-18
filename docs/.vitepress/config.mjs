import { defineConfig } from 'vitepress'

export default defineConfig({
  head:[ ['script', {src: 'https://cdn.jsdelivr.net/npm/iconforged@latest' } ],
   ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }]
],
  
  title: "IconForge",
  description: "IconForge is a performance-focused, utility-style icon library.",
  base: '/',
  themeConfig: {
    logo: {src: '/if.webp'},
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/styling/colors' },
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
          text: 'Utility Classes',
          items: [
            { text: 'Colors & Styling', link: '/styling/colors' },
            { text: 'Effects', link: '/styling/effects' },
            { text: 'Flexbox', link: '/styling/flexbox' },
            { text: 'Grid', link: '/styling/grid' },
            { text: 'Interactivity', link: '/styling/interactivity' },
            { text: 'Layout', link: '/styling/layout' },
            { text: 'Sizing', link: '/styling/sizing' },
            { text: 'Spacing', link: '/styling/spacing' },
            { text: 'State & Prefixes', link: '/styling/state-and-responsive-prefixes' },
            { text: 'Transforms', link: '/styling/transforms' },
            { text: 'Typography', link: '/styling/typography' },
          ]
        },
        // {
        //   text: 'Components (W.I.P v2.0)',
        //   items: [
        //     { text: 'Buttons', link: '/components/button.md'},
        //     { text: 'Badge', link: '/components/badge.md'},
        //     { text: 'Alert', link: '/components/alert.md'},
        //     { text: 'Cards', link: '/components/card.md'},
        //     { text: 'Background', link: '/components/fixedbg.md'},
        //     { text: 'NavBar', link: '/components/navbar.md'},
        //     { text: 'Inputs', link: '/components/input.md'},
        //     { text: 'Dropdowns', link: '/components/dropdown.md'},
        //     { text: 'Loaders', link: '/components/loader.md'},
        //     { text: 'Stats', link: '/components/stats.md'},
        //   ]
        // },
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