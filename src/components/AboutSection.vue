<template>
    <section class="about" id="about">
        <div class="section-header">
            <h2>{{$t('navButtons.about')}}</h2>
        </div>
        <div class="about-container">
            <div class="about-container__img animate__animated" id="about-animate">
                <img src="../assets/images/sobranie.jpg" alt="background">
            </div>
            <div class="about-container__text">
                <p class="animate__animated inter" id="about-animate">
                    {{ $t('about.firstParagraph') }}
                </p>
                <p class="animate__animated inter" id="about-animate">
                    {{ $t('about.secondParagraph') }}
                </p>
            </div>
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
    flex-direction: row;
    text-align: center;
    z-index: 5;
    width: 100%;
    padding: 180px 8% 500px;

    &-container {
        width: 100%;
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        padding: 20px 5%;
        border-radius: 12px;

        &__text {
            display: flex;
            flex-direction: row;
            font-size: 18px;
            text-align: start;
            gap: 8%;
        }

        &__img {
            width: 60%;
            margin: 0 auto 32px;
            border-radius: 30px;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                display: block;
                width: 167%;
                border-radius: 20px;
                border: 1px solid white;
                height: 90%;
                top: 5%;
                left: 50%;
                transform: translate(-50%, 0);
                background: rgba($color: #fff, $alpha: .1);
            }

            & > img {
                width: 100%;
                position: inherit;
                z-index: 10;
                border-radius: inherit;
                border: 1px solid white;
                margin: 0 auto;
            }
        }
    }
}

@media screen and (max-width: 860px) {
    .about {
        padding-bottom: 0;

        &-container {
            &__text {
                font-size: 16px;
                flex-direction: column-reverse;
            }

            &__img {
                width: 100%;

                &::before {
                    content: none;
                }
            }
        }
    }
}
</style>