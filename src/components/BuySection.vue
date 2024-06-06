<template>
    <section class="buy" ref="buy" id="buy">
        <div class="section-header">
            <h2>
                {{ $t('buy.how') }}
            </h2>
        </div>
        <div class="buy-container">
            <div class="buy-container__content inter">
                <p>
                    80% LP Burned
                </p>
                <p>
                    10% Marketing and team
                </p>
                <p>
                    10% Airdrop
                </p>
                <p>
                    CA: <span class="address">{{address}}</span> <button @click="copy">copy</button>
                </p>
                <div class="buttons">
                    <TheButton button-class="button" link="https://dexscreener.com/solana/be7kdb15uuho9fttjfbwhupkkwrzzymeeg3juehizxyd" text="Chart" target="_blank"/>
                    <TheButton button-class="button" link="https://raydium.io/swap/?inputMint=sol&outputMint=EBtMsYyh5zFChwL3hv8xRzQp81o44Qb5fiABYMiEvZ7v" text="Buy" target="_blank"/>
                </div>
            </div>
            <img src="../assets/images/lambo.png" alt="lamboship" class="ship">
        </div>
    </section>
</template>

<script setup>
import anime from 'animejs';
import { onMounted, ref } from 'vue';
import TheButton from './TheButton.vue';

const buy = ref(null);

const address = 'EBtMsYyh5zFChwL3hv8xRzQp81o44Qb5fiABYMiEvZ7v';

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
button {
   background: #FFE81F; 
   border: none;
   font-size: 18px;
   border-radius: 6px;
   width: 60px;
   height: 30px;
}

.address {
    text-overflow: ellipsis;
}

.buy {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    position: relative;
    z-index: 5;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    text-align: center;
    width: 100%;
    padding: 180px 8% 0;

    &-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        text-align: left;
        padding-left: 5%;

        & > img {
            width: 50%;
            margin: 0 auto 0;
        }
        
        &__content {
            width: 40%;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
        }
    }
}

span {
    font-weight: 600;
    font-size: 20px;
    color: rgba(#FFE81F, .8);
}

.buttons {
    margin-top: 10px;
    width: 100%;
    display: flex;
    gap: 5%;
}

.button {
    width: 50%;
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
        text-align: center;

        &-container {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;

            &__content {
                width: 100%;
            }

            & > img {
                width: 100%;
            }
        }
    }

    .address {
        font-size: 2.8vw;
    }

    .button {
        width: 30%;
    }
}
</style>