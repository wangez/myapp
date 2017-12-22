<template>
    <div id="nav">
        <nav>
            <div class="bjcontainer" id="mid">
                <router-link class="nav-btn" v-for="route in routes" :to="{name: route.name}" :key="route.name">{{route.title}}</router-link>
            </div>
            <div class="bjcontainer" id="left">
                {{username || 'welcome'}}
            </div>
            <div :class="{bjcontainer: true, login: !username, logout: username}" id="right" @click="toggleLogin">
                <icon v-if="username" name="user-circle"></icon>
                <div v-else name="user" style="font-size: 0.45em">登陆/注册</div>
            </div>
        </nav>
    </div>
</template>

<script>
    import routes from './routerview'
    export default {
        name: 'MainTitle',
        data: function () {
            return {
                routes
            }
        },
        computed: {
            username: function () {
                return this.$store.state.user.username
            }
        },
        methods: {
            toggleLogin: function () {
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
    #nav {
        position: fixed;
        top: 0;
        width: 100%;
        height: 2em;
        line-height: 2em;
        font-size: 1.5em;
        background-color: #fffafa;
        box-sizing: border-box;
        border: 0 solid #666;
        border-bottom-width: 1px;
        color: #3385ff;
        z-index: 99;
        nav {
            padding: 0 2em 0 2em;
            height: 2em;
            
            .nav-btn {
                float: right;
                text-decoration: none;
                margin: 0.25em 0;
                height: 1.5em;
                line-height: 1.5em;
                padding: 0 0.5em;
                color: #3385ff;
                border-radius: 0.2em;
            }
            .nav-btn:hover {
                background-color: #333;
                color: #ddd;
            }

            .bjcontainer {
                float: left;
                position: relative;
                width: 2em;
                height: 2em;
            }

            #mid {
                width: 100%;
                padding-right: 1em;
                box-sizing: border-box; 
            }
            #left {
                left: -2em;
                margin-left: -100%;
            }
            #right {
                right: -2em;
                margin-left: -2em;

                svg {
                    width: auto;
                    height: 0.8em;
                    cursor: pointer;
                }

                &.login {
                    height: 1em;
                    line-height: 1em;
                    margin: 0.5em 0 0.5em -2em;
                    border-radius: 0.2em;
                    cursor: pointer;
                }
                &.login:hover {
                    color: #ddd;
                    background-color: #333;
                }

                &.logout:hover {
                    color: #333;
                    line-height: 2.2em;
                    svg {
                        height: 1em;
                    }
                }
            }
        }
    }
    
    @media screen and (min-width: 1024px) {
        #nav nav{
            position: relative;
            left: 0;
            right: 0;
            width: 880px;
            margin: 0 auto;
        }
    }

</style>