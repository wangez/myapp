<template>
    <div>
        <div id="canvas-warper">
            <canvas id="cvs" ref="cvs"></canvas>
        </div>
        <main>
            <div class="swaper" ref="swaper">
                <div v-for="item in contents" class="sub">
                    <div v-for="text in item">{{ text }}</div>
                </div>
                <div class="sub sub1">
                    <div v-for="text in contents[0]">{{ text }}</div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import PicShow from '../classes/pic-show'
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
                contents: [
                    [
                        '测试1',
                        'welcome'
                    ],
                    [
                        '测试2',
                        'welcome'
                    ],
                    [
                        '测试3',
                        'welcome',
                        '测试',
                        'welcome',
                        'welcome',
                        '测试',
                        'welcome',
                        'welcome',
                        '测试',
                        'welcome',
                        'welcome',
                        '测试',
                        'welcome',
                        'welcome',
                        '测试',
                        'welcome',
                        'welcome',
                        '测试',
                        'welcome',
                        'welcome',
                        '测试',
                        'welcome',
                        'welcome',
                        '测试',
                        'welcome',
                        'welcome',
                        '测试',
                        'welcome',
                        'welcome',
                        '测试',
                        'welcome'
                    ]
                ]
            }
        },
        mounted () {
            this.showTime *= 1000
            this.translateTime *= 1000
            this.totalTime = this.showTime + this.translateTime
            this.timeflg = new Date().getTime()
            this.$refs.swaper.style.left = 0
            this.update()
            
            const img = new Image()
            img.src = window.getComputedStyle(document.querySelector(".bgimg")).backgroundImage.replace(
                /^url\(\"(.*)\"\)/, '$1')
            img.onload = e => {
                this.pic = new PicShow(this.$refs.cvs, e.target)
                this.pic.animation()
            }
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
    #canvas-warper {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 3em;
        left: 0;
        z-index: -1;

        #cvs {
            position: absolute;
            height: 100%;
            width: 100%;
        }
    }
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