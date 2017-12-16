<template>
    <div id="app" :style="{backgroundColor: appColor}">
        <MainTitle />
        <Login v-if="logining" />
    </div>
</template>

<script>
    import MainTitle from './components/MainTitle'
    import Login from './components/Login'
    const backgroundColor = {
        '0': 'green',
        '1024': 'red',
        '1280': 'blue',
        '1366': 'yellow',
        '1440': 'green',
        '1680': 'black',
        '1920': 'red'
    }
    export default {
        name: 'app',
        data: function () {
            return {
                passworld: null,
                count: 0
            }
        },
        beforeCreate: function () {
            this.$store.dispatch('user/getLogined')
        },
        computed: {
            appColor: function () {
                return backgroundColor[this.width]
            },
            width: function () {
                return this.$store.state.main.width || ''
            },
            logining: function () {
                return this.$store.state.user.logining
            }
        },
        mounted: function () {
            const that = this
            this.$store.commit('main/setWidth', window.getComputedStyle(that.$el, ':before').content.replace(/"/g, ''))
            window.onresize = e => {
                this.$store.commit('main/setWidth', window.getComputedStyle(that.$el, ':before').content.replace(/"/g, ''))
            }
        },
        methods: {
        },
        components: {
            MainTitle,
            Login
        }
    }
</script>

<style lang="less">
    #app {
        position: absolute;
        height: 100%;
        width: 100%;
    } //屏幕宽度1024  1280  1366  1440  1680  1920
    #app::before {
        content: "0";
        display: none;
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