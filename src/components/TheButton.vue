<template>
    <a :href="props.link" :class="props.buttonClass">
        {{ props.text }}
    </a>
</template>

<script setup>
const props = defineProps({
    text: String,
    link: String,
    buttonClass: String,
    // isDisabled: Boolean
});
</script>

<style lang="scss" scoped>
.text {
    font-size: 30px;
    text-decoration: none;
    color: #FFE81F;
    filter: drop-shadow(0 0 10px rgba(#FFE81F, .6));
}

.disabled {
    cursor: default;
    pointer-events: none;
    opacity: .5;
}

.button {
    font-family: "Star Wars Demolition Level";
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
        font-size: 5vw;
    }

    .button {
        width: 20%;
        height: 7vh;
        border-radius: 30px;
        font-size: 5.2vw;
        margin-bottom: 4%;
    }
}
</style>