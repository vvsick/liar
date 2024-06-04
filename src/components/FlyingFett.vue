<template>
    <div class="flying">
        <img src="../assets/images/Bridgefett.png" alt="Bridgefett" class="flying-primary">
        <img src="../assets/images/smoke.png" alt="jetpack smoke" class="flying-secondary">
    </div>
</template>

<script setup>
import { useWindowScroll, useWindowSize } from '@vueuse/core';
import { onMounted, watch } from 'vue';
import anime from 'animejs';

const { y } = useWindowScroll();

const { width } = useWindowSize();

const trY = width.value > 860 ? [-400, 0] : [-600, -300];
const trX = width.value > 860 ? [1200, -1200] : [600, -600];
const rotate = width.value > 860 ? [300] : [300, 300];

onMounted(() => {
    const fly = anime({
        targets: '.flying',
        translateX: trX,
        translateY: trY,
        rotate: rotate,
        easing: 'linear',
        autoplay: false
    })

    const scrollPercent = () => {
        const docST = document.documentElement.scrollTop;
        const docSH = document.documentElement.scrollHeight;

        if (width.value > 860) {
            return (docSH - docST - (docSH / 100 * 35)) / (docSH - (docSH / 100 * 90)) * 100
        } else {
            return (docSH - docST - (docSH / 100 * 25)) / (docSH - (docSH / 100 * 90)) * 100
        }        
    }

    watch(y, () => {
        if (y.value < document.body.scrollHeight - 400 && y.value > document.body.scrollHeight - 2450) {
            fly.seek((scrollPercent() / 100) * fly.duration)
        }
    });
});
</script>

<style lang="scss" scoped>
.flying {
    position: relative;
    width: 370px;
    height: auto;

    &-primary {
        position: relative;
        z-index: 2;
        width: 100%;
        height: auto;
    }

    &-secondary {
        position: absolute;
        z-index: 1;
        top: 120px;
        right: 30px;
        -webkit-transform: rotate(350deg);
            -ms-transform: rotate(350deg);
                transform: rotate(350deg);
        width: 54%;
    }
}

@media screen and (max-width: 860px) {
    .flying {
        width: 230px;
    }
}
</style>

