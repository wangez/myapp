<template>
    <div class="colorpackereditor2">
        <div class="top">
            <canvas class="twoborder cvs" ref="cvs" @mousedown="cvsstart"></canvas>
            <canvas class="twoborder range" ref="range" @mousedown="start" ></canvas>
            <div class="range-block" @mousedown="start" :style="{top: rangepos + 'px'}"></div>
            <div v-if="rangemoving || cvsmoving" class="drag-shim" @mousemove="move" @mouseup="move"></div>
        </div>
        <div class="bottom">
            <div class="twoborder color" :style="{backgroundColor: color}"></div>
            <div class="esl-group">
                <div>
                    <label for="esle">色调(E):</label><input type="number" id="esle" v-model="esle" @input="esleinput">
                </div>
                <div>
                    <label for="esls">饱和度(S):</label><input type="number" id="esls" v-model="esls" @input="eslsinput">
                </div>
                <div>
                    <label for="esll">亮度(L):</label><input type="number" id="esll" v-model="esll" @input="esllinput">
                </div>
            </div>
            <div class="rgu-group">
                <div>
                    <label for="rgur">红(R):</label><input type="number" id="rgur" v-model="rgur" @input="rguinput">
                </div>
                <div>
                    <label for="rgug">绿(G):</label><input type="number" id="rgug" v-model="rgug" @input="rguinput">
                </div>
                <div>
                    <label for="rguu">蓝(U):</label><input type="number" id="rguu" v-model="rguu" @input="rguinput">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import chroma from 'chroma-js'
    export default {
        name: 'colorPackerEditor',
        data: function () {
            return {
                posx: 0,
                posy: 0,
                startpos: null,
                rangemoving: false,
                rangepos: 110,
                cvsmoving: false,
                esle: 0,
                esls: 0,
                esll: 0,
                rgur: 0,
                rgug: 0,
                rguu: 0
            }
        },
        mounted () {
            const cvs = this.$refs.cvs
            const rect = this.cvsrect = cvs.getBoundingClientRect()
            const ctx = cvs.getContext('2d')

            cvs.width = rect.width
            cvs.height = rect.height
            
            const spanw = 4
            const spanh = 6
            
            const w = Math.ceil(rect.width / spanw)
            const h = Math.ceil(rect.height / spanh)

            const stepw = 360 / (w - 1)
            const steph = 1 / (h - 1)

            const colorarr = []
            const rectarr = []

            for (let i = 0; i < w; i++) {
                for (let j = 0; j < h; j++) {
                    colorarr.push(chroma.hsl(stepw * i, 1 - steph * j, 0.5).hex())
                    rectarr.push([spanw * i, spanh * j, spanw, spanh])
                }
            }

            const resetCVS = this.resetCVS = e=> {
                colorarr.forEach((color, index) => {
                    ctx.fillStyle = color
                    ctx.fillRect.apply(ctx, rectarr[index])
                })

                ctx.lineWidth = 2
                ctx.beginPath()
                ctx.moveTo(this.posx - 10, this.posy)
                ctx.lineTo(this.posx - 4 , this.posy)
                ctx.moveTo(this.posx + 10, this.posy)
                ctx.lineTo(this.posx + 4 , this.posy)
                ctx.moveTo(this.posx, this.posy - 10)
                ctx.lineTo(this.posx, this.posy - 4 )
                ctx.moveTo(this.posx, this.posy + 10)
                ctx.lineTo(this.posx, this.posy + 4 )
                ctx.stroke()
            }


            
            const range = this.$refs.range
            const rrect = range.getBoundingClientRect()
            const rctx = range.getContext('2d')

            this.startpos = rrect.top

            range.width = rrect.width
            range.height = rrect.height

            const span = 8

            const level = Math.ceil(rrect.height / span)

            const step = 1 / (level - 1)

            const resetRange = this.resetRange = e => {
                for (let i = 0; i < level; i ++) {
                    rctx.beginPath()
                    rctx.fillStyle = chroma.hsl(this.e, this.s, i * step).hex()
                    rctx.fillRect(0, rrect.height - span * (i + 1), rrect.width, span)
                }
            }
            resetCVS()
            resetRange()
        },
        methods: {
            cvsclick (e) {
                this.posx = e.clientX - this.cvsrect.left
                this.posy = e.clientY - this.cvsrect.top
            },
            cvsstart (e) {
                this.cvsmoving = true
            },
            start (e) {
                this.rangemoving = true
            },
            move (e) {
                const {clientX: x, clientY: y, type} = e
                if (this.rangemoving) {
                    const value = y - this.startpos
                    this.rangepos = value < -7 ? -7 : value > 240 ? 240 : value
                } else if (this.cvsmoving) {
                    const {width, height, top, left} = this.cvsrect
                    if (x < left) {
                        this.posx = 0
                    } else if (x > left + width) {
                        this.posx = width
                    } else {
                        this.posx = x - left
                    }
                    if (y < top) {
                        this.posy = 0
                    } else if (y > top + height) {
                        this.posy = height
                    } else {
                        this.posy = y - top
                    }
                }
                if (type === 'mouseup') {
                    this.rangemoving = false
                    this.cvsmoving = false
                }
            },
            rguinput (e) {
                const color = chroma.rgb(this.rgur, this.rgug, this.rguu).hsl()
                if (this.posx / 207 * 360 !== color[0]) {
                    this.posx = color[0] / 360 * 207
                }
                if (1 - this.posy / 247 !== color[1]) {
                    this.posy = (1 - color[1]) * 247
                }
                if (this.rangepos / 247 !== color[2]) {
                    this.rangepos = color[2] * 247
                }
            },
            esleinput (e) {
                let value = parseInt(e.target.value)
                if (value < 0) value = 0
                if (value > 240) value = 240
                value = value / 240 * 360
                if (this.posx / 207 * 360 !== value) {
                    this.posx = value / 360 * 207
                }
            },
            eslsinput (e) {
                let value = parseInt(e.target.value)
                if (value < 0) value = 0
                if (value > 240) value = 240
                value = value / 240
                if (1 - this.posy / 247 !== value) {
                    this.posy = (1 - value) * 247
                }
            },
            esllinput (e) {
                let value = parseInt(e.target.value)
                if (value < 0) value = 0
                if (value > 240) value = 240
                if (1 - (this.rangepos + 7) / 247 !== value / 240) {
                    this.rangepos = (1 - value / 240) * 247 - 7
                }
            }
        },
        computed: {
            color () {
                const color = chroma.hsl(this.e, this.s, this.l)
                const rgu = color.rgb()
                const {resetRange, resetCVS} = this
                if (typeof resetRange === 'function') resetRange()
                if (typeof resetCVS === 'function') resetCVS()
                this.esle = (this.e * 240 / 360).toFixed(0)
                this.esls = (this.s * 240).toFixed(0)
                this.esll = (this.l * 240).toFixed(0)
                this.rgur = rgu[0]
                this.rgug = rgu[1]
                this.rguu = rgu[2]
                return color.hex()
            },
            e () {
                return this.posx / 207 * 360
            },
            s () {
                return 1 - this.posy / 247
            },
            l () {
                console.log(this.rangepos)
                return 1 - (this.rangepos + 7) / 247
            }
        }
    }
</script>

<style lang="less">
    .colorpackereditor2 {
        position: absolute;
        width: 270px;
        height: 400px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        overflow: hidden;
        border: 1px solid #333;
        box-sizing: border-box;
        background-color: #f0f0f0;

        .twoborder {
            border: 1px solid #a0a0a0;
            border-right-color: #fff;
            border-bottom-color: #fff;
        }

        .top {
            margin: 10px;
            height: 245px;
            width: 250px;

            .cvs {
                display: block;
                float: left;
                width: 205px;
                height: 245px;
            }

            .range {
                float: left;
                width: 12px;
                height: 245px;
                margin-left: 17px;
            }

            .range-block {
                position: relative;
                float: left;
                width: 0;
                height: 0;
                border: 0 solid transparent;
                border-top-width: 6px;
                border-bottom-width: 6px;
                border-right-width: 7px;
                border-right-color: #000;
                margin-left: 1px;
            }

            .drag-shim {
                position: fixed;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                z-index: 1000;
            }
        }

        .bottom {
            margin: 10px;
            width: 250px;
            height: 85px;
            font-size: 12px;


            .color {
                float: left;
                position: relative;
                width: 70px;
                height: 55px;

                &::after {
                    content: "颜色|纯色(O)";
                    position: absolute;
                    top: 100%;
                    left: 0;
                }
            }

            
            .esl-group,
            .rgu-group {
                float: left;
                height: 85px;

                div {
                    margin-bottom: 4px;
                }

                label {
                    text-align: right;
                    line-height: 26px;
                    display: inline-block;
                }

                input {
                    width: 32px;
                    height: 26px;
                    box-sizing: border-box;
                }

                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none !important;
                    margin: 0;
                }
            }

            .esl-group {
                width: 93px;

                label {
                    width: 61px;
                }
            }

            .rgu-group {
                width: 78px;

                label {
                    width: 42px;
                }
            }
        }
    }
</style>