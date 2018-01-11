<template>
    <div id="canvasradar">
        <div>点击雷达图添加点</div>
        <div v-for="(i, index) in points">{{ '第' + (index + 1) + '个点，方向：' + i.angle.toFixed(2) + ', 距离：' + i.dis.toFixed(2) }}</div>
        <div id="radar">
            <canvas class="pointer" ref="pointer"></canvas>
            <canvas class="points" ref="points"></canvas>
            <canvas class="circle" ref="circle" @click="click"></canvas>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'canvasradar',
        data () {
            return {
                points: [],
                total: 5 * 1000
            }
        },
        mounted () {
            const image = this.image = document.createElement('canvas')
            const imageCTX = image.getContext('2d')
            const rgrd = imageCTX.createRadialGradient(5, 5, 0, 5, 5, 5)
            rgrd.addColorStop(0, 'rgba(255, 255, 255, 1)')
            rgrd.addColorStop(1, 'rgba(255, 255, 255, 0)')
            image.width = image.height = 10
            imageCTX.fillStyle = rgrd
            imageCTX.fillRect(0, 0, 10, 10)

            // 初始化points和pointer的context
            // points层每一帧清空画布后绘制
            // pointer层不需要清空画布，单每一帧绘制一个透明的圆，实现指针的淡出效果
            this.pointsCTX = this.getContext(this.$refs.points)
            this.pointerCTX = this.getContext(this.$refs.pointer)
            // 根据宽度计算相关参数
            const width = this.pointsCTX.canvas.width     // canvas宽度，这里宽度高度相等
            const pos = this.pos = Math.floor(width / 2)  // 圆心坐标，x和y相等
            const r = this.r = Math.floor(this.pos * 0.9) // 圆最大半径
            this.beginTime = new Date().getTime()         // 开始时间
            // circle位于最上层，用于绘制环形线，仅绘制一次即可
            // 环形线在图像的最上层，不能放在points层绘制
            // 放在pointer层绘制，由于多次绘制会产生毛边（pointer层不是每一帧都清空画布），仅绘制一次会被覆盖
            // 所以单独创建一个canvas层绘制
            const circleCTX = this.getContext(this.$refs.circle)
            circleCTX.strokeStyle = '#32a10d'
            for (let i = 1; i < 6; i ++) {
                circleCTX.beginPath()
                circleCTX.arc(pos, pos, r * i / 5, 0, Math.PI * 2)
                circleCTX.stroke()
            }


            
            // 开始动画效果
            this.anima()
        },
        methods: {
            getContext(dom) {
                const {width} = dom.getBoundingClientRect()
                dom.width = dom.height = width
                return dom.getContext('2d')
            },
            draw () {
                const {beginTime, total, pointsCTX, pointerCTX, pos, r, image} = this

                const nowTime = new Date().getTime()
                const time = (nowTime - beginTime) % total
                const angle = time / this.total * 2 * Math.PI

                pointerCTX.beginPath()
                pointerCTX.arc(pos, pos, r, 0, Math.PI * 2)
                pointerCTX.fillStyle = 'rgba(150, 255, 150, 0.01)'
                pointerCTX.fill()

                pointsCTX.clearRect(0, 0, pos * 2, pos * 2)
                this.points.forEach(e => {
                    if (nowTime - e.time > total) {
                        if (time - e.delay >= 0 && e.alpha === 0) {
                            e.alpha = 1
                        }
                        if (e.alpha > 0) {
                            pointsCTX.globalAlpha = e.alpha
                            pointsCTX.drawImage(image, e.x - 5, e.y - 5, 10, 10)
                            e.alpha -= 0.01
                            if (e.alpha < 0) {
                                e.alpha = 0
                            }
                        }
                    }
                })

                pointerCTX.strokeStyle = '#32a10d'
                pointerCTX.lineWidth = 4
                pointerCTX.beginPath()
                pointerCTX.moveTo(pos, pos)
                pointerCTX.lineTo(pos + Math.cos(angle) * r, pos + Math.sin(angle) * r)
                pointerCTX.stroke()
            },
            anima () {
                this.handle = requestAnimationFrame(e => this.anima())
                this.draw()
            },
            click (e) {
                const {pos, total, r} = this
                const {offsetX: x, offsetY: y} = e
                const angle = (Math.atan2(y - pos, x - pos) / Math.PI * 180 + 360) % 360
                const dis = Math.sqrt(Math.pow(x - pos, 2) + Math.pow(y - pos, 2))
                const delay = angle / 360 * total
                this.points.push({x, y, time: new Date().getTime(), angle, dis, delay, alpha: 0})
            }
        },
        beforeDestroy () {
            cancelAnimationFrame(this.handle)
        }
    }
</script>

<style lang="less">
    #canvasradar {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 30em;
        height: 20em;
        border: 1px solid #333;
        box-shadow: 0 0 1px 1px #333;

        #radar {
            position: absolute;
            top: 3em;
            bottom: 3em;
            left: 16em;
            right: 0;
            margin: auto;

            .points,
            .pointer,
            .circle {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
            }
        }
    }
</style>