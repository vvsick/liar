<template>
    <a :href="props.link" class="button">
        {{ props.text }}
    </a>
</template>

<script setup>
const props = defineProps({
    text: String,
    link: String
});
</script>

<style lang="scss" scoped>
.button {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    padding: 10px;
    background-color: #FFE81F;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    -webkit-transition: .5s;
    -o-transition: .5s;
    transition: .5s;
    font-size: 20px;
    text-decoration: none;
    color: black;
}
</style>