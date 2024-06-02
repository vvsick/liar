<template>
    <section class="info">
        <div class="info-container">
            <div class="info-container__img roadmap">
                <img src="../assets/images/roadmap.png" alt="roadmap" />
                <span class="first">
                    <p>
                        {{ $t('roadmap.first.1') }}
                    </p>
                    <p>
                        {{ $t('roadmap.first.2') }}
                    </p>
                </span>
                <span class="second">
                    <p>
                        {{ $t('roadmap.second.1') }}
                    </p>
                    <p>
                        {{ $t('roadmap.second.2') }}
                    </p>
                    <p>
                        {{ $t('roadmap.second.3') }}
                    </p>
                    <p>
                        {{ $t('roadmap.second.4') }}
                    </p>
                </span>
                <span class="third">
                    <p>
                        {{ $t('roadmap.third.1') }}
                    </p>
                    <p>
                        {{ $t('roadmap.third.2') }}
                    </p>
                    <p>
                        {{ $t('roadmap.third.3') }}
                    </p>
                    <p>
                        {{ $t('roadmap.third.4') }}
                    </p>
                </span>
                <span class="fourth">
                    <p>
                        {{ $t('roadmap.fourth.1') }}
                    </p>
                </span>
            </div>
            <h2 id="roadmap">{{ $t('roadmap.roadmap') }}</h2>
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
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    text-align: center;
    z-index: 5;
    width: 100%;
    padding: 60px 8% 100px;

    &-container {
        border-radius: 12px;
        padding: 20px 10%;

        & > h2 {
            font-size: 2.1vw;
            letter-spacing: 2px;
        }

        &__img {
            width: 100%;
            
            & > img {
                width: 100%;
                height: auto;
                margin: 80px auto;
            }
        }
    }
}

.roadmap {
    position: relative;

    & > span {
        text-align: left;
        position: absolute;
        width: 40%;
        font-size: 1.3vw;

        &.first {
            bottom: 12%;
            left: 35%;
        }
        
        &.second {
            bottom: 30%;
            right: -25%;
        }

        &.third {
            top: 30%;
            left: 45%;
        }
        
        &.fourth {
            top: 10%;
            left: 26%;
        }
    }
}

@media screen and (max-width: 860px) {
        .roadmap {

        & > span {
            
            &.second {
                width: 35%;
                right: -20%;
            }

            &.third {
                width: 35%;
                top: 33%;
            }
            
            &.fourth {
                top: 18%;
            }
        }
    }
}
</style>