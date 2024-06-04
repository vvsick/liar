<template>
  <div class="app" v-show="isPageLoaded">
    <TheHeader/>
    <UpOnly/>
    <IntroSection/>
    <AboutSection />
    <BuySection />
    <RoadmapSection />
    <TeamSection />
    <div class="app-stars"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useWindowScroll } from '@vueuse/core';

import TheHeader from './components/TheHeader.vue';
import UpOnly from './components/UpOnly.vue';
import IntroSection from './components/IntroSection.vue';
import AboutSection from './components/AboutSection.vue';
import RoadmapSection from './components/RoadmapSection.vue';
import TeamSection from './components/TeamSection.vue';
import BuySection from './components/BuySection.vue';

const isPageLoaded = ref(false);
const { y } = useWindowScroll();

onMounted(() => {
  // document.addEventListener('DOMContentLoaded', () => {
  //   isPageLoaded.value = true;
  // })
  window.onload = () => {
    isPageLoaded.value = true;
    y.value = document.documentElement.scrollHeight;
  }

  window.addEventListener('load', () => {
    y.value = document.documentElement.scrollHeight;
  });
});
</script>

<style lang="scss">
.app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  min-height: 3000px;
  position: relative;
  box-sizing: border-box;
  background: linear-gradient(180deg,#020111 50%,#5086c6 66.18%,#4fa5e7 75.09%,#38a3d1);
  color: white;
  display: flex;
  flex-direction: column-reverse;

  &-stars {
    position: absolute;
    top: 0;
    height: 46%;
    width: 100%;
    z-index: 1;
    background-color: transparent;
    background-image: url('./assets/images/stars-pattern.png');
  }
}

@media screen and (max-width: 1480px) {
  .app {
    min-height: auto;
  }
}
</style>
 