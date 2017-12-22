<template>
    <div id="show">
        <div id="show-menu"></div>
    </div>
</template>

<script>
    export default {
        name: 'show',
        title: '展示',
        beforeCreate () {
            this.$store.dispatch('show/getMenu')
        }
    }
</script>

<style lang="less">
    #show {
        width: 100%;
        
        #show-menu {
            position: fixed;
            width: 340px;
            top: 3em;
            bottom: 0;
        }
    }
</style>