<template>
    <div class="container">
        <div class="swaper" ref="swaper">
            <div v-for="item in contents" class="sub">
                <div v-for="text in item">{{ text }}</div>
            </div>
            <div class="sub sub1">
                <div v-for="text in contents[0]">{{ text }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    const showData = [
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
            'welcome'
        ]
    ]
    export default {
        name: 'jsswaper',
        title: '主页',
        data: function () {
            return {
                timeflg: null,
                lastleft: 0,
                showTime: 2,
                translateTime: 1,
                totalTime: null,
                animaHandle: null,
                contents: showData
            }
        },
        mounted() {
            this.showTime *= 1000
            this.translateTime *= 1000
            this.totalTime = this.showTime + this.translateTime
            this.timeflg = new Date().getTime()
            this.$refs.swaper.style.left = 0
            this.update()
        },
        beforeDestroy() {
            cancelAnimationFrame(this.animaHandle)
        },
        methods: {
            update() {
                this.animaHandle = requestAnimationFrame(e => this.update())
                const time = new Date().getTime() - this.timeflg
                const page = -Math.floor(time / this.totalTime) % 3 * 100
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
    .container {
        position: absolute;
        width: 300px;
        height: 300px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 1px solid #bbb;
        box-shadow: 0 2px 6px rgba(100, 100, 100, 0.8);
        margin: auto;
        overflow: hidden;
    }

    .swaper {
        position: relative;
        top: 0;
        left: 0;
        width: 400%;
        overflow: hidden;
        .sub {
            text-align: center;
            display: inline;
            float: left;
            width: 25%;
            height: 100%;
        }
    }
</style>