<template>
    <div>
        <main>
            
        </main>
    </div>
</template>

<script>
    import homeData from './home-data'
    export default {
        name: 'home',
        title: '主页',
        data () {
            return {
                search: this.$route.params.search
            }
        },
        mounted () {
            console.log(this.search)
        },
        beforeDestroy () {
        },
        methods: {
            update () {
            }
        }
    }
</script>

<style lang="less">
    main {
        position: relative;
        margin: 2em;
        overflow-x: hidden;
        background-color: rgba(200, 200, 200, 0.4);
        .swaper {
            position: relative;
            top: 0;
            left: 0;
            width: 400%;
            .sub {
                text-align: center;
                display: inline;
                float: left;
                width: 25%;
                height: 100%;
            }
        }
    }
    
    
    @media screen and (min-width: 1024px) {
        #login .login-warper .login-container {
            overflow: auto;

            .login-form {
                position: relative;
                width: 40%;
            }

            .login-form.left {
                float: left;
                left: 5%;
            }
            .login-form.right {
                float: right;
                right: 5%;
            }
        }
    }

    @media screen and (min-width: 1280px) {
        #login .login-warper .login-container {
            width: 1200px;
            margin: 40px auto 0;
        }
    }
</style>