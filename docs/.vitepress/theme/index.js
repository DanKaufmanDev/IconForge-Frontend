// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import BG from './components/BG.vue'
import HeroSearch from './components/HeroSearch.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: BG,

  enhanceApp({ app, router, siteData }) {
    app.component('HeroSearch', HeroSearch)
  }
}