<template>
    <div id="tower" ref="tower">
    </div>
</template>

<script>
    import Tower from './tower'
    export default {
        name: 'advert',
        data () {
            return {
                moving: true
            }
        },
        mounted () {
            new Tower(this.$refs.tower)
        }
    }
</script>

<style lang="less">
    #tower {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 100;
    }
</style>