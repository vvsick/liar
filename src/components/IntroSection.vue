<template>
    <section class="intro" ref="intro">
        <h1 class="intro-ticker" :class="{'hidden': -y > -yOffset}">LIARZERO</h1>
        <img src="../assets/images/IntroBack.png" alt="Bryan the Hutt image" class="intro-back" draggable="false">
        <FlyingFett />
    </section>
</template>

<script setup>
import { useWindowScroll, useWindowSize } from '@vueuse/core';
import { ref, watch, onMounted, nextTick } from 'vue';
import anime from 'animejs';
const intro = ref(null);

import FlyingFett from './FlyingFett.vue';

const { y } = useWindowScroll();
const { width } = useWindowSize();

const yOffset = width.value < 860 ? 3000 : 2500

onMounted(() => {
    y.value = document.documentElement.scrollHeight;
    nextTick(() => {
        intro.value.scrollIntoView(false);
    })

    // window.addEventListener('load', () => {
    //     y.value = document.documentElement.scrollHeight;
    // });

    const ticker = anime({
    targets: '.intro-ticker',
    opacity: [1, 0],
    scale: [1, .7],
    easing: 'linear',
    autoplay: false
})

    const scrollPercent = () => {
        const docST = document.documentElement.scrollTop;
        const docSH = document.documentElement.scrollHeight;

        if (width.value > 860) {
            return (docSH - docST - (docSH / 100 * 30)) / (docSH - (docSH / 100 * 85)) * 100
        } else {
            return (docSH - docST - (docSH / 100 * 30)) / (docSH - (docSH / 100 * 90)) * 100
        }
    }

    watch(y, () => {
        if (y.value < document.body.scrollHeight - 1500 && y.value > document.body.scrollHeight - 2900) {
            ticker.seek((scrollPercent() / 100) * ticker.duration);
        }

        if (width.value <= 860) {
            if (y.value < document.body.scrollHeight - 500 && y.value > document.body.scrollHeight - 3900) {
                ticker.seek((scrollPercent() / 100) * ticker.duration);
            }
        }
    });
});
</script>

<style lang="scss" scoped>
.intro {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
            flex-direction: column-reverse;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-sizing: border-box;
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
        margin: 0 auto 0;
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
        overflow: hidden;
        height: 1300px;
        margin-top: 30%;

        &-back {
            position: absolute;
            width: 180%;
            bottom: 0;
            left: 60%;
            -webkit-transform: translate(-50%, 0);
                -ms-transform: translate(-50%, 0);
                    transform: translate(-50%, 0) scale(1.5);
        }

        &-ticker {
            bottom: 30%;
            font-size: 50px;
        }
    }
}
</style>