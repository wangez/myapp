<template>
    <div id="css">
        <div v-for="i in 4" :style="{animationDelay: i - 1 + 's'}" class="sub"></div>
    </div>
</template>

<script>
    export default {
        name: 'css'
    }
</script>

<style lang="less">
#css {
    height: 100%;
    background-color: transparent;

    .sub {
        height: 25%;
        width: 100%;
        background-color: transparent;
        transform-origin: 50% 0;
        background-color: #fff;
        transform: rotateX(-90deg);
        transform-style: preserve-3d;
        animation: ro 1s linear;
        animation-fill-mode: forwards;
    }

    .ind2 {
        animation-delay: 1s;
    }

    .ind3 {
        animation-delay: 2s;
    }

    .ind4 {
        animation-delay: 3s;
    }
}
@keyframes ro {
    0% {
        transform: rotateX(-180deg);
    }
    
    100% {
        transform: rotateX(0deg);
    }
}
</style>