<template>
    <div>
        <canvas id="cvs" ref="cvs"></canvas>
    </div>
</template>

<script>
    export default {
        title: '主页',
        name: 'home',
        data () {
            return {
                ctx: null,
                items: [],
                width: null,
                height: null
            }
        },
        mounted () {
            const img = new Image()
            console.log(window.getComputedStyle(document.querySelector("#app")).backgroundImage.replace(/^url\(\"(.*)\"\)/, '$1'))
            img.src = window.getComputedStyle(document.querySelector("#app")).backgroundImage.replace(/^url\(\"(.*)\"\)/, '$1')
            img.onload = e => this.anima(e.target)
        },
        methods: {
            anima (img) {
                const win = document.querySelector('#app')
                const {width: wwidth, height: wheight} = win.getBoundingClientRect()
                const cvs = this.$refs.cvs
                const {width, height} = cvs.getBoundingClientRect()
                const {width: iwidth, height: iheight} = img
                const y = Math.floor((iheight + wheight) / 2 - height)
                const x = Math.floor((iwidth - wwidth) / 2)
                cvs.width = width
                cvs.height = height
                this.ctx = cvs.getContext('2d')
                const numx = 57
                const numy = 30
                const stepx = width / numx
                const stepy = height / numy
                this.width = width
                this.height = height
                const time = 5
                const zs = time * 60
                for (let i = 0; i < numy; i ++) {
                    for (let j = 0; j < numx; j++) {
                        const pos = Math.random()
                        if (pos < 0.25) {
                            this.items.push({
                                data: [img, x + stepx * j, y + stepy * i, stepx, stepy, stepx * j, 0, stepx, stepy],
                                speed: stepy * i / zs * (Math.random() + 1),
                                end: stepy * i,
                                moving: true,
                                index: 6
                            })
                        } else if (pos < 0.5) {
                            this.items.push({
                                data: [img, x + stepx * j, y + stepy * i, stepx, stepy, stepx * j, height, stepx, stepy],
                                speed: (stepy * i - height) / zs * (Math.random() + 1),
                                end: stepy * i,
                                moving: true,
                                index: 6
                            })
                        } else if (pos < 0.75) {
                            this.items.push({
                                data: [img, x + stepx * j, y + stepy * i, stepx, stepy, 0, stepy * i, stepx, stepy],
                                speed: stepx * j / zs * (Math.random() + 1),
                                end: stepx * j,
                                moving: true,
                                index: 5
                            })
                        } else {
                            this.items.push({
                                data: [img, x + stepx * j, y + stepy * i, stepx, stepy, width, stepy * i, stepx, stepy],
                                speed: (stepx * j - width) / zs * (Math.random() + 1),
                                end: stepx * j,
                                moving: true,
                                index: 5
                            })
                        }
                        
                    }
                }
                this.animation()
            },
            animation () {
                this.ctx.clearRect(0, 0, this.width, this.height)
                let moving = false
                this.items.forEach(item => {
                    if (!item.moving) {
                        this.ctx.drawImage.apply(this.ctx, item.data)
                    }
                })
                this.items.forEach(item => {
                    const {speed, data, index, end} = item
                    if (item.moving) {
                        data[index] += speed
                        if ((end - data[index]) * speed < 0) {
                            data[index] = end
                            item.moving = false
                        } else {
                            moving = true
                        }
                        this.ctx.drawImage.apply(this.ctx, item.data)
                    }
                })
                if (moving) {
                    requestAnimationFrame(() => this.animation())
                }
            }
        }
    }
</script>

<style lang="less">
    #cvs {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #ddd;
    }
</style>