<template>
    <div id="app" :class="{showover: logining}">
        <div class="bgimg appimg"></div>
        <MainTitle />
        <router-view />
        <Login v-if="logining" style="z-index: 99" />
    </div>
</template>

<script>
    import MainTitle from './components/MainTitle'
    
    export default {
        name: 'app',
        beforeCreate: function () {
            this.$store.dispatch('user/getLogined')
        },
        computed: {
            logining: function () {
                return this.$store.state.user.logining
            }
        },
        components: {
            MainTitle
        }
    }
</script>

<style lang="less">

    #app {//屏幕宽度1024  1280  1366  1440  1680  1920
        // position: absolute;
        font-size: 18px;
        height: 100%;
        width: 100%;
        padding-top: 3em;
        box-sizing: border-box;

        .appimg {
            position: fixed;
            top: 3em;
            left: 0;
            right: 0;
            bottom: 0;
            background-repeat: no-repeat;
            background-position: center;
            z-index: -1;
        }
    }

    .showover {
        overflow: hidden;
    }

    @media screen and (max-width: 768px) and (min-aspect-ratio: 4103 / 2744) {
        #app {
            font-size: 20px;
        }
        .bgimg {
            background-image: url('./assets/768.jpg')
        }
    }

    @media screen and (max-width: 768px) and (max-aspect-ratio: 4103 / 2744) {
        #app {
            font-size: 20px;
        }
        .bgimg {
            background-image: url('./assets/768-.jpg')
        }
    }

    @media screen and (max-width: 414px) {
        #app {
            font-size: 18px;
        }
    }

    @media screen and (min-width: 768px) and (min-aspect-ratio: 4103 / 2744) {
        #app {
            font-size: 22px;
        }
        .bgimg {
            background-image: url('./assets/1024.jpg')
        }
    }

    @media screen and (min-width: 1024px) and (min-aspect-ratio: 4103 / 2744) {
        #app {
            font-size: 24px;
        }
        .bgimg {
            background-image: url('./assets/1280.jpg')
        }
    }

    @media screen and (min-width: 1280px) and (min-aspect-ratio: 4103 / 2744) {
        #app {
            font-size: 25px;
        }
        .bgimg {
            background-image: url('./assets/1366.jpg')
        }
    }

    @media screen and (min-width: 1366px) and (min-aspect-ratio: 4103 / 2744) {
        #app {
            font-size: 27px;
        }
        .bgimg {
            background-image: url('./assets/1440.jpg')
        }
    }

    @media screen and (min-width: 1440px) and (min-aspect-ratio: 4103 / 2744) {
        #app {
            font-size: 28px;
        }
        .bgimg {
            background-image: url('./assets/1680.jpg')
        }
    }

    @media screen and (min-width: 1680px) and (min-aspect-ratio: 4103 / 2744) {
        #app {
            font-size: 29px;
        }
        .bgimg {
            background-image: url('./assets/1920.jpg')
        }
    }

    @media screen and (min-width: 1920px) and (min-aspect-ratio: 4103 / 2744) {
        #app {
            font-size: 30px;
        }
        .bgimg {
            background-image: url('./assets/1920.jpg')
        }
    }

    ///////////////////////////////////////////////////////////////////

    @media screen and (min-width: 768px) and (max-aspect-ratio: 4103 / 2744) {
        #app {
            font-size: 22px;
        }
        .bgimg {
            background-image: url('./assets/1024-.jpg')
        }
    }

    @media screen and (min-width: 1024px) and (max-aspect-ratio: 4103 / 2744) {
        #app {
            font-size: 24px;
        }
        .bgimg {
            background-image: url('./assets/1280-.jpg')
        }
    }

    @media screen and (min-width: 1280px) and (max-aspect-ratio: 4103 / 2744) {
        #app {
            font-size: 25px;
        }
        .bgimg {
            background-image: url('./assets/1366-.jpg')
        }
    }

    @media screen and (min-width: 1366px) and (max-aspect-ratio: 4103 / 2744) {
        #app {
            font-size: 27px;
        }
        .bgimg {
            background-image: url('./assets/1440-.jpg')
        }
    }

    @media screen and (min-width: 1440px) and (max-aspect-ratio: 4103 / 2744) {
        #app {
            font-size: 28px;
        }
        .bgimg {
            background-image: url('./assets/1680-.jpg')
        }
    }

    @media screen and (min-width: 1680px) and (max-aspect-ratio: 4103 / 2744) {
        #app {
            font-size: 29px;
        }
        .bgimg {
            background-image: url('./assets/1920-.jpg')
        }
    }

    @media screen and (min-width: 1920px) and (max-aspect-ratio: 4103 / 2744) {
        #app {
            font-size: 30px;
        }
        .bgimg {
            background-image: url('./assets/1920-.jpg')
        }
    }
</style>