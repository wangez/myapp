<template>
    <div id="main-title">
        <span ref="title">welcome{{username}}</span>
        <div id="main-title-user" :class="{active: useractive}" @click="showlogin" @touchstart="tstart" @touchend="tend">
            <icon v-if="username" name="user-circle"></icon>
            <icon v-else name="user"></icon>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainTitle',
        data: function () {
            return {
                test: 1,
                titleWidth: 12,
                useractive: false
            }
        },
        computed: {
            width: function () {
                return this.$store.state.main.width
            },
            username: function () {
                return this.$store.state.user.username
            }
        },
        mounted: function () {
            this.titleWidth = this.$el.getBoundingClientRect().width
        },
        methods: {
            tstart: function () {
                this.useractive = true
            },
            tend: function () {
                this.useractive = false
                
            },
            showlogin: function () {
                if (this.username === null) {
                    this.$store.commit('user/changeLogining')
                } else {
                    this.$store.dispatch('user/logout')
                }
            }
        }
    }
</script>

<style lang="less">
    #main-title {
        position: absolute;
        height: 100px;
        width: 100%;
        background-color: #fafafa;
        border: 0 solid #3385ff;
        color: #3385ff;
        border-top-width: 10px;
        box-sizing: border-box;
        text-align: center;
        line-height: 90px;
        font-size: 40px;

        #main-title-user {
            position: absolute;
            right: 25px;
            top: 25px;
            width: 40px;
            height: 40px;
            color: #3385ff;
            border-radius: 50%;

            svg {
                position: absolute;
                margin: auto;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                width: auto;
                height: 30px;
            }

            &:active,
            &:hover,
            &.active {
                border-color: #3385ff;
                background-color: #3385ff;
                color: #fafafa;
            }
        }
    }


</style>