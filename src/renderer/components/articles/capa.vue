<template>
    <div id="canvas-warper">
        <canvas id="cvs" ref="cvs"></canvas>
    </div>
</template>

<script>
    import PicShow from '../classes/pic-show'
    import bk from '../../assets/bk.jpg'
    export default {
        name: 'capa',
        data: function () {
            return {
            }
        },
        mounted () {
            const img = new Image()
            img.src = bk
            img.onload = e => {
                this.pic = new PicShow(this.$refs.cvs, e.target)
                this.pic.animation()
            }
        },
        beforeDestroy () {
            this.pic.distroy()
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