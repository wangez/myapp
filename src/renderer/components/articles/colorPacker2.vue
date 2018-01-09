<template>
    <div id="canvas-warper">
        <div>windows画图板拾色器</div>
        <Editor />
    </div>
</template>

<script>
    import Editor from '../editor/ColorPackEditor2.vue'
    export default {
        name: 'colorPacker',
        components: {
            Editor
        }
    }
</script>

<style lang="less">
</style>