<template>
    <div id="app">
        <Theader></Theader>
        <div id="container" :style="{top: headheight}">
            <router-view />
        </div>
    </div>
</template>

<script>
    import Theader from './components/Theader.vue'
    export default {
        computed: {
            headheight: function () {
                return this.$store.state.head.height + 'px'
            }
        },
        components: {
            Theader
        }
    }
</script>

<style lang="less">
    html,
    body {
        padding: 0;
        margin: 0;
    }
    img,
    canvas {
        display: block;
    }
    #app {
        position: absolute;
        height: 100%;
        width: 100%;
    }
    #container {
        position: absolute;
        bottom: 0;
        width: 100%;
        transition: top 0.6s linear;
    }
</style>