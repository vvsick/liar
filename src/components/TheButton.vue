<template>
    <button class="button" disabled=props.isActive>
        {{ props.text }}
    </button>
</template>

<script setup>
const props = defineProps({
    text: String,
    link: String,
    isActive: Boolean
});
</script>

<style lang="scss" scoped>
.button {
    box-sizing: border-box;
    padding: 10px;
    background-color: #FFE81F;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    transition: .5s;
    font-size: 20px;

    &:disabled {
        cursor: not-allowed;
    }
}
</style>