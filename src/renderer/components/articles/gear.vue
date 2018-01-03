<template>
    <div id="canvas-warper">
        <canvas id="cvs" ref="cvs"></canvas>
    </div>
</template>

<script>
    const min = (a, b) => a < b ? a : b
    import Gear from '../classes/gear'
    export default {
        name: 'gear',
        data: function () {
            return {
                canvas: null,
                ctx: null,
                width: null,
                height: null,
                gear: null,
                animaHandle: null
            }
        },
        mounted () {
            const canvas = this.canvas = this.$refs.cvs
            const ctx = this.ctx = canvas.getContext('2d')
            const rect = canvas.getBoundingClientRect()
            const width = this.width = canvas.width = rect.width
            const height = this.height = canvas.height = rect.height
            const minlength = min(width, height)
            this.gear = new Gear({
                ctx,
                R: minlength / 5,
                r: minlength / 5 * 0.9,
                x: Math.floor(width / 2),
                y: Math.floor(height / 2),
                teethNumber: 20,
                rr: minlength / 5 * 0.1,
                childs: [
                    {
                        cTeethNumber: 15,
                        cAngle: 2,
                        cbegin: 9.2,
                        cR: minlength / 8,
                        cr: minlength / 8 * 0.9,
                        crr: minlength / 8 * 0.1,
                        cChilds: [
                            {
                                cTeethNumber: 8,
                                cAngle: 11,
                                cbegin: -9,
                                cR: minlength / 14,
                                cr: minlength / 14 * 0.9,
                                crr: minlength / 14 * 0.1
                            }
                        ]
                    },
                    {
                        cTeethNumber: 10,
                        cAngle: 7,
                        cbegin: -7,
                        cR: minlength / 10,
                        cr: minlength / 10 * 0.9,
                        crr: minlength / 10 * 0.1
                    }
                ]
            })
            canvas.addEventListener('mousemove', e => {
                this.gear.onthis(e.offsetX, e.offsetY)
            })
            this.anima()
        },
        beforeDestroy() {
            cancelAnimationFrame(this.animaHandle)
        },
        methods: {
            anima () {
                this.ctx.clearRect(0, 0, this.width, this.height)
                this.gear.draw()
                this.gear.update(1 / Math.PI)
                this.animaHandle = requestAnimationFrame(e => this.anima())
            }
        }
    }
</script>

<style lang="less">
    #canvas-warper {
        position: absolute;
        top: 3em;
        bottom: 0;
        width: 100%;

        #cvs {
            position: absolute;
            height: 100%;
            width: 100%;
        }
    }
</style>