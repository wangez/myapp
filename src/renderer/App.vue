<template>
    <div id="app">
        <form action="/api/register" method="POST">
            <input type="text" name="username" v-model="username"/>
            <input type="text" name="passworld" v-model="passworld"/>
            <button type="submit" @click.prevent="submit">abaa</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data: function () {
            return {
                username: null,
                passworld: null
            }
        },
        methods: {
            submit: function () {
                this
                .$http({
                    method: 'post',
                    url: '/api/register',
                    data: {
                        firstName: this.username,
                        lastName: this.passworld
                    }
                })
                .then(e => {
                    console.log(e)

                })
            }
        }
    }
</script>

<style lang="less">
    #app {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: blue;
    } //屏幕宽度1024  1280  1366  1440  1680  1920
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