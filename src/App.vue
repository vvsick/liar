<template>
  <div class="app" ref="app">
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
import { ref, watch, onMounted } from 'vue';
import { useWindowScroll } from '@vueuse/core/index';

import TheHeader from './components/TheHeader.vue';
import UpOnly from './components/UpOnly.vue';
import IntroSection from './components/IntroSection.vue';
import AboutSection from './components/AboutSection.vue';
import RoadmapSection from './components/RoadmapSection.vue';
import TeamSection from './components/TeamSection.vue';
import BuySection from './components/BuySection.vue';

const app = ref(null);

const { y } = useWindowScroll();

onMounted(() => {
  setTimeout(() => {
    y.value = document.body.scrollHeight
  }, 1);
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
    background-image: 
    radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
    radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
    radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
    radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
    background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px; 
    background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0));
  }
}

@media screen and (max-width: 1480px) {
  .app {
    min-height: auto;
  }
}
</style>
 