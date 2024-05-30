<template>
    <section class="team">
        <div 
        v-for="(member, id) in members"
        :key="id"
        id="team-animate"
        class="team-member animate__animated">
            <div class="team-member__pic">
                <img :src="getImageUrl(member.pic)" :alt="member.pic" :class="member.pic">
                <p class="team-member__name">
                    {{ member.name }}
                </p>
            </div>
            <p>
                {{ member.lore }}
            </p>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });

const getImageUrl = (path) => {
    return new URL(`../assets/images/${path}.png`, import.meta.url).href;
};

const members = [
    {
        pic: 'DarkSybilius',
        lore: t('team.Sybilius'),
        name: 'Darth Sybilius'
    },
    {
        pic: 'GenSoftus',
        lore: t('team.Softus'),
        name: 'General Softus'
    },
    {
        pic: 'Bridgefett',
        lore: t('team.Bridge'),
        name: 'Bridge Fett'
    },
    {
        pic: 'MerklyVader',
        lore: t('team.Merkly'),
        name: 'Merkly Vader'
    }
];

onMounted(() => {    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__slideInLeft')
            } 
        })
    });
    
    const elements = document.querySelectorAll('#team-animate')
    elements.forEach((el) => observer.observe(el))
});
</script>

<style lang="scss" scoped>
.team {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    position: relative;
    display: -ms-grid;
    display: grid;
    z-index: 5;
    -ms-grid-columns: 1fr 20px 1fr 20px 1fr 20px 1fr;
    grid-template-columns: repeat(4, 1fr);
    -webkit-column-gap: 20px;
       -moz-column-gap: 20px;
            column-gap: 20px;
    text-align: center;
    width: 100%;
    max-height: 650px;
    padding: 120px 4% 100px;

    &-member{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;

        &__pic {
            position: relative;
            z-index: 2;
            overflow: hidden;
            border-radius: 30px;
            background-color: rgba($color: #fff, $alpha: .1);
            -webkit-backdrop-filter: blur(20px);
                    backdrop-filter: blur(20px);

            & > img {
                height: auto;
                width: 100%;
            }
        }

        &__name {
            font-size: 1.3vw;
        }
    }
}

@media screen and (max-width: 860px) {
    .team {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        max-height: none;

        &-member {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
                -ms-flex-direction: row;
                    flex-direction: row;
            max-height: 400px;
            text-align: left;
            margin: 10px 0 10px;

            & > p {
                max-width: calc(100% - 190px);
            }

            &__pic {
                height: 100%;
                max-width: 30%;
                float: left;
                text-align: center;
                margin-right: 10px;

                & > img {
                    height: auto;
                    width: 100%;
                }
            }
        }
    }
}
</style>