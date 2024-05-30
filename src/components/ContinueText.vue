<template>
    <div class="continue">
        <p class="continue-text animate__animated" :class="{'animate__zoomIn animate__fadeIn': y < 500}">
            {{ $t('placeholder') }}
        </p>
    </div>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core';
import { useI18n } from 'vue-i18n';

const { y } = useWindowScroll();
const { t } = useI18n({ useScope: 'global' });
</script>

<style lang="scss" scoped>
.continue {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    height: 500px;

    &-text {
        font-size: 50px;
        color: #FFE81F;
    }
}

.animate__zoomIn {
  --animate-duration: 1s;
}

.animate__fadeIn {
    --animate-duration: 2s;
}

@media screen and (max-width: 860px) {
    .continue {
        &-text {
            font-size: 30px;
        }
    }
}
</style>