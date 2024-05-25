<template>
    <section class="intro">
        <h1 class="intro-ticker" :class="{'hidden': y < 1100}">$LIARZERO</h1>
        <img src="../assets/images/IntroBack.png" alt="Brian the Hutt image" class="intro-back" draggable="false">
    </section>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core';
import { watch, ref, onMounted } from 'vue';

const { y } = useWindowScroll();

const tickerTransform = ref('translate(-50%, 0) scale(1)');
const tickerOpacity = ref(1);

onMounted(() => {
    watch(y, () => {
        if (y.value < 1500) {
            tickerTransform.value = `translate(-50%, 0) scale(${y.value / 1500})`
            tickerOpacity.value = y.value/350 - 3.4
        } else {
            tickerTransform.value = `translate(-50%, 0) scale(1)`
            tickerOpacity.value = 1
        }
    });
});
</script>

<style lang="scss" scoped>
.intro {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    box-sizing: border-box;

    &-back {
        width: 100%;
        margin: 0 auto 0;
        position: relative;
        z-index: 6;
    }

    &-ticker {
        position: fixed;
        top: 40%;
        margin: 0;
        left: 50%;
        transform: v-bind(tickerTransform);
        opacity: v-bind(tickerOpacity);
        color: #FFE81F;
        z-index: 3;
        font-size: 180px;

        &.hidden {
            display: none;
        }
    }
}

@media screen and (max-width: 1200px) {
    .intro {
        &-ticker {
            font-size: 100px;
        }
    }
}

@media screen and (max-width: 860px) {
    .intro {
        position: relative;
        overflow-x: hidden;
        height: 500px;

        &-back {
            position: absolute;
            width: 140%;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 0);
        }

        &-ticker {
            font-size: 50px;
        }
    }
}
</style>