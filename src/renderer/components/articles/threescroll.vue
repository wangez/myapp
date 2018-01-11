<template>
    <div id="threescroll" ref="root">
        <div v-for="i in 3" :key="i" class="sub" :style="{transform: 'rotateX(' + (i - 1) * 120 + 'deg) translateZ(' + dis + 'px)'}">{{ text[i - 1] }}</div>
    </div>
</template>

<script>
    /*
    * 已知等边三角形边长，求重心到边的距离
    * const getDis = length => length / 2 * Math.tan(Math.PI / 6)
    */
    export default {
        name: 'threescroll',
        data: function () {
            return {
                length: 0,
                text: [
                    'css3实现3d滚动展示效果',
                    'animation实现动画效果',
                    'transform实现3d效果'
                ]
            }
        },
        mounted () {
            this.length = this.$refs.root.getBoundingClientRect().height
            console.log('rotateX(' + (2 - 1) * 120 + 'deg) translatZ(' + this.dis + 'px)')
        },
        computed: {
            dis () {
                return this.length / 2 * Math.tan(Math.PI / 6)
            }
        }
    }
</script>

<style lang="less">
    #threescroll {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 20em;
        height: 5em;
        transform: rotateX(0deg);
        transform-style: preserve-3d;
        animation: rota 10s infinite linear;

        .sub {
            position: absolute;
            top: 0;
            left: 0;
            width: 20em;
            height: 5em;
            line-height: 5em;
            text-align: center;
            background: linear-gradient(to bottom, #faa 0%, #f00 100%);
            transform-style: preserve-3d;
        }
    }

    @keyframes rota {
        0% {
            transform: rotateX(0deg);
        }
        13.33% {
            transform: rotateX(120deg);
        }
        33.33% {
            transform: rotateX(120deg);
        }
        46.66% {
            transform: rotateX(240deg);
        }
        66.66% {
            transform: rotateX(240deg);
        }
        79.99% {
            transform: rotateX(360deg);
        }
        100% {
            transform: rotateX(360deg);
        }
    }
</style>