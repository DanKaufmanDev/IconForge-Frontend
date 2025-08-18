// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import BG from './components/BG.vue'
import HeroSearch from './components/HeroSearch.vue'
import ComponentPreview from './components/ComponentPreview.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: BG,

  enhanceApp({ app, router, siteData }) {
    app.component('HeroSearch', HeroSearch)
    app.component('ComponentPreview', ComponentPreview)
  }
}