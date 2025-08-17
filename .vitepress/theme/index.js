// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import BG from './BG.vue'
import HeroSearch from './HeroSearch.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: BG,

  enhanceApp({ app, router, siteData }) {
    app.component('HeroSearch', HeroSearch)
  }
}