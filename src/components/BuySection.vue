<template>
    <section class="buy" ref="buy" id="buy">
        <div class="buy-container">
            <div v-for="(ref, id) in addresses"
            :key="id"
            >
                <p>{{ ref.isGay }}</p>
                <p class="address">{{ $t('buy.address') }} {{ ref.address }}</p>
                <button @click="copy(ref.address)">copy</button>
            </div>
        </div>
        <p>{{ $t('buy.choose') }}</p>
        <ul>
            <li>
                {{ $t('buy.info.1') }}
            </li>
            <li>
                {{ $t('buy.info.2') }}
            </li>
            <li>
                {{ $t('buy.info.3') }}
            </li>
            <li>
                {{ $t('buy.info.4') }}
            </li>
            <li>
                {{ $t('buy.info.5') }}
            </li>
        </ul>
        <h2>{{ $t('buy.how') }}</h2>
        <img src="../assets/images/lambo.png" alt="lamboship" class="ship">
    </section>
</template>

<script setup>
import anime from 'animejs';
import { onMounted, ref } from 'vue';

const buy = ref(null);

const addresses = [
    {
        isGay: 'SYBIL ENJOYER',
        address: 'liarzero.ton'
    },
    {
        isGay: 'BRYAN FAN',
        address: 'UQBwnbDKPEkuaICV-SiMP_k1BCKNo6Dk51heLdl7_7_o_tQD'
    }
];

const copy = (address) => {
    window.navigator.clipboard.writeText(address)
};

onMounted(() => {
    const fly = anime({
        targets: '.ship',
        translateX: [-400, 0],
        scale: [.1, 1],
        opacity: [.3, 1],
        duration: 1200,
        easing: 'linear',
        autoplay: false,
        loop: false
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                fly.play()
            }
        })
    });

    observer.observe(buy.value)
});
</script>

<style lang="scss" scoped>
.buy {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    position: relative;
    z-index: 5;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    text-align: center;
    width: 100%;
    padding: 180px 8% 100px;

    & > h2 {
        font-size: 2.1vw;
    }

    & > img {
        width: 80%;
        margin: 0 auto 0;
    }

    & > ul {
        line-height: 22px;
        display: inline-block;
        text-align: left
    }

    &-container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
            -ms-flex-direction: row;
                flex-direction: row;
        -webkit-box-pack: space-evenly;
            -ms-flex-pack: space-evenly;
                justify-content: space-evenly;
        margin: 10px 0 30px;
    }
}

button {
    cursor: pointer;
}

@media screen and (max-width: 860px) {
    .buy {
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        position: relative;
        z-index: 5;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        text-align: center;
        width: 100%;
        padding: 80px 8% 100px;

        &-container {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;
        }
    }

    .address {
        font-size: 3.5vw;
    }
}
</style>