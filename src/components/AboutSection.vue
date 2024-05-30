<template>
    <section class="about" id="about">
        <div class="about-container">
            <p class="about-container__text animate__animated" id="about-animate">
                {{ $t('about.secondParagraph') }}
            </p>
            <div class="about-container__img animate__animated" id="about-animate">
                <img src="../assets/images/sobranie.jpg" alt="background">
            </div>
            <p class="about-container__text animate__animated" id="about-animate">
                {{ $t('about.firstParagraph') }}
            </p>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });

onMounted(() => {    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInDown')
            } 
        })
    });
    
    const elements = document.querySelectorAll('#about-animate')
    elements.forEach((el) => observer.observe(el))
});
</script>

<style lang="scss" scoped>
.about {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
            flex-direction: column-reverse;
    text-align: center;
    z-index: 5;
    width: 100%;
    padding: 60px 8% 500px;


    &-container {
        width: 100%;
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        padding: 20px 10%;
        border-radius: 12px;

        &__img {
            width: 100%;
            margin: 60px 0 60px;
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