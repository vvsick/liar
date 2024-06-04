<template>
    <a :href="props.link" :class="props.buttonClass">
        {{ props.text }}
    </a>
</template>

<script setup>
const props = defineProps({
    text: String,
    link: String,
    buttonClass: String
});
</script>

<style lang="scss" scoped>
.text {
    font-size: 30px;
    text-decoration: none;
    color: #FFE81F;
    filter: drop-shadow(0 0 10px rgba(#FFE81F, .6));
}

.button {
    height: 80px;
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2%;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    padding: 10px;
    background-color: #FFE81F;
    border-radius: 100px;
    font-size: 36px;
    text-decoration: none;
    color: black;
    filter: drop-shadow(0 8px 10px rgba(#FFE81F, .6));
}

@media screen and (max-width: 860px) {
    .text {
        font-size: 22px;
    }

    .button {
        width: 20%;
        border-radius: 30px;
        font-size: 26px;
        margin-bottom: 4%;
    }
}
</style>