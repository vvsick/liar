<template>
    <section class="about">
        <div class="about-container">
            <p class="about-container__text">
                {{ $t('about.firstParagraph') }}
            </p>
            <div class="about-container__img">
                <img src="../assets/images/sobranie.jpg" alt="background">
            </div>
            <p class="about-container__text">
                {{ $t('about.secondParagraph') }}
            </p>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });
</script>

<style lang="scss" scoped>
.about {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    z-index: 5;
    width: 100%;
    padding: 60px 8% 500px;


    &-container {
        width: 100%;
        box-sizing: border-box;
        padding: 20px 10%;
        background: rgba(#8374FF, .2);
        backdrop-filter: blur(20px);
        border-radius: 12px;

        &__img {
            width: 100%;
            position: relative;

            & > * {
                height: auto;
                width: 100%;
                margin: 0 auto 0;
            }
        }

        &__text {
            font-size: 22px;
        }
    }
}

@media screen and (max-width: 1480px) {
    .about {
        padding: 60px 8% 600px;

        &-container {

            &__text {
                font-size: 18px;
            }
        }
    }
}

@media screen and (max-width: 860px) {
    .about {
        &-container {
            &__text {
                font-size: 16px;
            }
        }
    }
}
</style>