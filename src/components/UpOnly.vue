<template>
    <div class="animate__animated animate__shakeY animate__infinite only">
        <h2>
            Up Only
        </h2>
        <svg width="40" height="40" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 1L1 4" stroke="white"/>
            <path d="M4.5 1C4.5 0.723858 4.27614 0.5 4 0.5C3.72386 0.5 3.5 0.723858 3.5 1H4.5ZM4.5 8V1H3.5V8H4.5Z" fill="white"/>
            <path d="M4 1L7 4" stroke="white"/>
        </svg>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.only {
    position: absolute;
    z-index: 7;
    width: 100%;
    bottom: 100px;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    letter-spacing: 1px;
    font-size: 20px;
    color: #FFF;
    gap: 10px;
}

.animate__animated.animate__shakeY {
    --animate-duration: 16s; 
}

@media screen and (max-width: 860px) {
    .only {
       font-size: 16px;
    }
}
</style>