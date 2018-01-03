<template>
    <div>
        <main>
            <div class="swaper" ref="swaper">
                <div v-for="(item, index) in contents" :key="index" class="sub">
                    <div v-for="(text, i) in item" :key="i">{{ text }}</div>
                </div>
                <div class="sub sub1">
                    <div v-for="(text, index) in contents[0]" :key="index">{{ text }}</div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import homeData from './home-data'
    export default {
        name: 'home',
        title: '主页',
        data: function () {
            return {
                timeflg: null,
                lastleft: 0,
                showTime: 4,
                translateTime: 1,
                totalTime: null,
                animaHandle: null,
                pic: null,
                contents: homeData
            }
        },
        mounted () {
            this.showTime *= 1000
            this.translateTime *= 1000
            this.totalTime = this.showTime + this.translateTime
            this.timeflg = new Date().getTime()
            this.$refs.swaper.style.left = 0
            this.update()
        },
        beforeDestroy () {
            cancelAnimationFrame(this.animaHandle)
            this.pic.distroy()
        },
        methods: {
            update () {
                this.animaHandle = requestAnimationFrame(e => this.update())
                const time = new Date().getTime() - this.timeflg
                const page = - Math.floor(time / this.totalTime) % 3 * 100
                const sw = time % this.totalTime - this.showTime
                if (page !== this.lastleft) {
                    this.lastleft = page
                    this.$refs.swaper.style.left = this.lastleft + '%'
                }
                if (sw < 0) return
                this.$refs.swaper.style.left = (this.lastleft - sw / 10) + '%'
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