<template>
    <div class="colorpackereditor" @wheel.prevent="wheel">
        <canvas id="cvs" ref="cvs"></canvas>
        <div class="color-info">
            <div class="color-group">
                <div>hsl：</div>
                <label for="hslh">H：</label><input id="hslh" class="color-editor" type="number" v-model="hslh" />
                <label for="hsls">S：</label><input id="hsls" class="color-editor" type="number" v-model="hsls" />
                <label for="hsll">L：</label><input id="hsll" class="color-editor" type="number" v-model="hsll" />
            </div>
            <div class="color-group">
                <div>rgba：</div>
                <label for="rgbar">R：</label><input id="rgbar" class="color-editor" type="number" v-model="rgba[0]" readonly="readonly"/>
                <label for="rgbag">G：</label><input id="rgbag" class="color-editor" type="number" v-model="rgba[1]" readonly="readonly"/>
                <label for="rgbab">B：</label><input id="rgbab" class="color-editor" type="number" v-model="rgba[2]" readonly="readonly"/>
                <label for="rgbaa">A：</label><input id="rgbaa" class="color-editor" type="number" v-model="rgba[3]" readonly="readonly"/>
            </div>
            <div class="color-group">
                <div>16进制：</div>
                <input id="hex" class="color-editor" type="text" v-model="hex" readonly="readonly"/>
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
                hslh: 0,
                hsls: 1,
                hsll: 0.5,
                timeHandle: null,
                rgba: [0,0,0,0],
                hex: ''
            }
        },
        mounted() {
            const canvas = this.canvas = this.$refs.cvs,
                {
                    width,
                    height
                } = canvas.getBoundingClientRect(),
                ctx = this.ctx = canvas.getContext('2d'),
                centerx = this.centerx = width / 2,
                centery = this.centery = height / 2,
                r = this.r = Math.min(centerx, centery) * 0.8,
                powR = r * r,
                colorR = this.colorR = 0.6,
                powr = powR * colorR * colorR
            canvas.width = width
            canvas.height = height
            
            ctx.beginPath()
            ctx.arc(centerx, centery, r, 0, Math.PI * 2)
            ctx.fillStyle = '#fff'
            ctx.fill()

            this.idata = ctx.getImageData(0, 0, width, height)
            const data = this.idata.data
            this.indexs = []
            for (let i = 0; i < data.length; i += 4) {
                if (data[i] > 0) {
                    this.indexs.push([i, Math.floor(i / 4 / width), i / 4 % width])
                }
            }
            this.updateImageData()
            this.draw()
            
            canvas.addEventListener('mousemove', e => {
                const {
                    layerX: x,
                    layerY: y
                } = e
                const dis = Math.pow(x - centerx, 2) + Math.pow(y - centery, 2)
                if (dis < powR && dis > powr) {
                    this.hslh = (Math.atan2(y - centery, x - centerx) / Math.PI * 180 + 360) % 360
                    this.draw()
                }
            })
        },
        methods: {
            draw () {
                const {ctx, centerx, centery, angle, r} = this,
                    color = chroma.hsl(this.hslh, parseFloat(this.hsls), parseFloat(this.hsll))

                this.rgba = color.rgba()
                this.hex = color.hex()
                ctx.putImageData(this.idata, 0, 0)

                ctx.beginPath()
                ctx.lineTo(centerx, centery)
                ctx.lineTo(centerx + Math.cos(angle) * r, centery + Math.sin(angle) * r)
                ctx.stroke()

                ctx.fillStyle = this.hex
                ctx.beginPath()
                ctx.arc(centerx, centery, r * this.colorR, 0, Math.PI * 2)
                ctx.fill()

            },
            wheel(e) {
                if (e.shiftKey) {
                    const value = parseFloat((this.hsll + (e.wheelDelta < 0 ? -0.005 : 0.005)).toFixed(3))
                    this.hsll = value > 1 ? 1 : value < 0 ? 0 : value
                } else if (e.ctrlKey) {
                    const value = parseFloat((this.hsls + (e.wheelDelta < 0 ? -0.005 : 0.005)).toFixed(3))
                    this.hsls = value > 1 ? 1 : value < 0 ? 0 : value
                } else {
                    const value = parseFloat((this.hslh + (e.wheelDelta < 0 ? -0.01 : 0.01)).toFixed(3))
                    this.hslh = value > 360 ? 360 : value < 0 ? 0 : value
                }
                this.draw()
            },
            updateImageData () {
                const {indexs, idata, hsls, hsll, centerx, centery} = this
                indexs.forEach(([i, x, y]) => {
                    const rgba = chroma.hsl(Math.atan2(y - centery, x - centerx) / Math.PI * 180, hsls, hsll).rgba()
                    idata.data[i] = rgba[0]
                    idata.data[i + 1] = rgba[1]
                    idata.data[i + 2] = rgba[2]
                    idata.data[i + 4] = rgba[3] * 255
                })
            }
        },
        computed: {
            angle () {
                return this.hslh / 180 * Math.PI
            }
        },
        watch: {
            hslh () {
                this.draw()
            },
            hsls () {
                this.hsls = parseFloat(this.hsls)
                this.updateImageData()
                this.draw()
            },
            hsll () {
                this.hsll = parseFloat(this.hsll)
                this.updateImageData()
                this.draw()
            }
        }
    }
</script>

<style lang="less">
    .colorpackereditor {
        position: absolute;
        width: 40em;
        height: 20em;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        font-size: 0.5em;
        overflow: hidden;

        #cvs {
            float: left;
            width: 50%;
            height: 100%;
            display: block;
            border: 1px solid #333;
            box-sizing: border-box;
        }

        .color-info {
            float: left;
            width: 50%;
            height: 100%;
            border: 1px solid #333;
            border-left-width: 0;
            box-sizing: border-box;


            .color-group {
                float: left;
                width: 50%;
                padding: 0.5em;
                box-sizing: border-box;

                label {
                    display: inline-block;
                    width: 20%;
                    text-align: left;
                }

                .color-editor {
                    width: 70%;
                    box-sizing: border-box;
                    margin: 0.25em 0 0 0;
                    font-size: 0.8em;
                }

                .color-editor[readonly] {
                    cursor: default;
                    user-select: none;
                }
            }
        }
    }
</style>