<template>
    <div id="app">

    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="less">
    #app {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: red;
    }
    //屏幕宽度1024  1280  1366  1440  1680  1920
    #app::before {
        content: "0"
    }
    @media screen and (min-width: 1024px) {
        #app::before {
            content: "1024"
        }
    }
    @media screen and (min-width: 1280px) {
        #app::before {
            content: "1280"
        }
    }
    @media screen and (min-width: 1366px) {
        #app::before {
            content: "1366"
        }
    }
    @media screen and (min-width: 1440px) {
        #app::before {
            content: "1440"
        }
    }
    @media screen and (min-width: 1680px) {
        #app::before {
            content: "1680"
        }
    }
    @media screen and (min-width: 1920px) {
        #app::before {
            content: "1920"
        }
    }
</style>

