<script setup>
import DefaultTheme from 'vitepress/theme'
import HeroSearch from './HeroSearch.vue'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #home-features-before>
          <HeroSearch />
        </template>
        <template #layout-top>
            <div id="fixed-bg" class="is-fixed-bg">
                <i class="is-anim-drift if-react is-size-3xl is-top-[10%] is-left-[5%]" style="--i:1;"></i>
                <i class="is-anim-drift if-vuejs is-size-5xl is-top-[20%] is-left-[80%]" style="--i:2;"></i>
                <i class="is-anim-drift if-javascript is-size-4xl is-top-[70%] is-left-[15%]" style="--i:3;"></i>
                <i class="is-anim-drift if-python is-size-5xl is-top-[50%] is-left-[90%]" style="--i:4;"></i>
                <i class="is-anim-drift if-docker is-size-4xl is-top-[85%] is-left-[5%]" style="--i:5;"></i>
                <i class="is-anim-drift if-git is-size-4xl is-top-[5%] is-left-[30%]" style="--i:6;"></i>
                <i class="is-anim-drift if-npm is-size-5xl is-top-[90%] is-left-[60%]" style="--i:7;"></i>
                <i class="is-anim-drift if-nuxtjs is-size-3xl is-top-[30%] is-left-[20%]" style="--i:8;"></i>
                <i class="is-anim-drift if-github is-size-4xl is-top-[60%] is-left-[40%]" style="--i:9;"></i>
                <i class="is-anim-drift if-typescript is-size-4xl is-top-[50%] is-left-[60%]" style="--i:10;"></i>
                <i class="is-anim-drift if-css is-size-3xl is-top-[15%] is-left-[65%]" style="--i:11;"></i>
                <i class="is-anim-drift if-tailwind is-size-5xl is-top-[75%] is-left-[75%]" style="--i:12;"></i>
                <i class="is-anim-drift if-html is-size-4xl is-top-[45%] is-left-[10%]" style="--i:13;"></i>
                <i class="is-anim-drift if-c is-size-4xl is-top-[80%] is-left-[40%]" style="--i:14;"></i>
            </div>
        </template>
    </Layout>
</template>
<style scoped>
.dark #fixed-bg { background-image: radial-gradient(circle at 50% 0%, rgba(18, 7, 3, 0.35), rgba(17, 24, 39, 0) 30%); }
#fixed-bg { background-image: radial-gradient(circle at 50% 0%, rgba(181, 187, 201, 0.5), rgba(159, 163, 175, 0) 30%); }
</style>