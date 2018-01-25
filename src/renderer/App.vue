<template>
    <div id="app" :class="{showover: logining}">
        <MainTitle />
        <main>
            <router-view />
        </main>
        <Login v-if="logining" style="z-index: 99" />
    </div>
</template>

<script>
    import MainTitle from './components/MainTitle'
    import Hot from './components/Hot'
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
            MainTitle,
            Hot
        }
    }
</script>

<style lang="less">

    #app {//屏幕宽度1024  1280  1366  1440  1680  1920
        // position: relative;
        font-size: 16px;
        // height: 100%;
        width: 100%;
        padding-top: 3em;
        box-sizing: border-box;
        background-color: #e6e6e6;
    }

    .showover {
        overflow: hidden;
    }

    @media screen and (min-width: 414px) {
        #app {
            font-size: 18px;
        }
    }

    @media screen and (min-width: 768px) {
        #app {
            font-size: 22px;
        }
    }

    @media screen and (min-width: 1024px) {
        #app {
            font-size: 24px;
        }
    }

    @media screen and (min-width: 1280px) {
        #app {
            font-size: 26px;
        }
    }

    @media screen and (min-width: 1366px) {
        #app {
            font-size: 27px;
        }
    }

    @media screen and (min-width: 1440px) {
        #app {
            font-size: 28px;
        }
    }

    @media screen and (min-width: 1680px) {
        #app {
            font-size: 29px;
        }
    }

    @media screen and (min-width: 1920px) {
        #app {
            font-size: 30px;
        }
    }
</style>