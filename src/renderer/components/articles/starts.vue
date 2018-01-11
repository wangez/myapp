<template>
    <div id="starts">
        <canvas class="cvs" ref="cvs"></canvas>
    </div>
</template>

<script>
    export default {
        name: 'starts',
        data () {
            return {
            }
        },
        mounted () {
            const cvs = this.cvs = this.$refs.cvs
            const {width, height} = cvs.getBoundingClientRect()
            cvs.width = this.width = width
            cvs.height = this.height = height
            this.ctx = cvs.getContext('2d')
            const x = this.x = width / 2
            const y = this.y = height / 2

            const maxdis = Math.sqrt(x * x + y * y)

            const points = this.points = []

            for (let i = 0; i < 1000; i ++) {
                const posx = Math.random() * width
                const posy = Math.random() * height
                points.push([posx, posy, 15 * Math.sqrt(Math.pow(x - posx, 2) + Math.pow(y - posy, 2)) / maxdis, Math.random()])
            }


            const image = this.image = document.createElement('canvas')
            const i = image.getContext('2d')
            image.width = image.height = 100
            const rgrd = i.createRadialGradient(50, 50, 0, 50, 50, 50)
            rgrd.addColorStop(0, 'rgba(255, 255, 255, 1)')
            rgrd.addColorStop(1, 'rgba(255, 255, 255, 0)')
            i.fillStyle = rgrd
            i.fillRect(0, 0, 100, 100)

            this.anima()
        },
        methods: {
            draw () {
                const {ctx, image, width, height} = this
                ctx.clearRect(0, 0, width, height)
                this.points.forEach(e => {
                    
                    ctx.globalAlpha = Math.random()
                    ctx.drawImage(image, e[0], e[1], e[2], e[2])
                })
            },
            anima () {
                this.handle = requestAnimationFrame(e => this.anima())
                this.draw()
            }
        },
        beforeDestroy () {
            cancelAnimationFrame(this.handle)
        }
    }
</script>

<style lang="less">
    #starts {
        position: absolute;
        top: 3em;
        bottom: 0;
        width: 100%;

        .cvs {
            position: absolute;
            width: 100%;
            height: 100%;
            display: block;
        }
    }
</style>