<template>
    <section class="info">
        <div class="section-header">
            <h2 id="roadmap">{{ $t('roadmap.roadmap') }}</h2>
        </div>
        <div class="info-container">
            <div class="info-container__cards">
                <div 
                class="card"
                v-for="(object, id) in $tm('roadmap.items')"
                :key="id"
                >
                    <div class="card-number">
                        <p>
                            {{ id }}
                        </p>
                    </div>
                    <ul class="inter">
                        <li 
                        v-for="(item, id) in object"
                        :key="id"
                        >
                            {{ $t(`${item}`) }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="info-container__img">
                <img src="../assets/images/roadmap.png" alt="roadmap" />
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.info {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    flex-direction: row;
    z-index: 5;
    width: 100%;
    padding: 180px 8% 0;

    &-container {
        width: 100%;
        border-radius: 12px;
        padding-left: 5%;
        display: flex;
        flex-direction: row;
        gap: 20px;

        &__cards {
            display: flex;
            gap: 20px;
            width: 80%;
            flex-direction: column-reverse;
        }

        & > h2 {
            font-size: 2.1vw;
            letter-spacing: 2px;
        }

        &__img {
            width: 100%;
            position: relative;

            & img {
                width: 120%;
                top: 50%;
                transform: translate(0, -50%);
                left: -12%;
                position: absolute;
            }
        }
    }
}

.card {
    padding: 22px 12px 22px 36px;
    border-radius: 20px;
    background: rgba($color: #fff, $alpha: .2);
    backdrop-filter: blur(5px);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 20px;

    & ul {
        & li {
            margin: 10px 0;
        }
    }
    
    &-number {
        font-size: 32px;
        color: #FFE81F;
        filter: drop-shadow(0 0 5px rgba(#FFE81F, .6));
    }
}

@media screen and (max-width: 860px) {
    .info {
        &-container {
            flex-direction: column;
            // position: relative;
            z-index: 2;

            &__cards {
                width: 100%;
            }

            &__img {
                position: static;

                & > img {
                    width: 100%;
                    top: 40%;
                    left: 60%;
                    transform: translate(-50%, 0);
                }
            }
        }
    }

    .card {
        padding: 12px 6px 12px 18px;
        position: relative;
        z-index: 10;

        &-number {
            font-size: 26px;
        }

        & ul {
            font-size: 14px;
            color: #000;
            font-weight: 600;
        }
    }
}
</style>