<template>
    <div id="canvas-warper">
        <div>部分浏览器不兼容</div>
        <div>鼠标滚轮调节色相</div>
        <div>ctrl + 鼠标滚轮调节饱和度</div>
        <div>shift + 鼠标滚轮调节明度</div>
        <div>hsl可编辑，rgba与16进制不可编辑</div>
        <div>使用chroma-js进行颜色相关转换</div>
        <Editor />
    </div>
</template>

<script>
    import Editor from '../editor/ColorPackEditor.vue'
    export default {
        name: 'colorPacker',
        components: {
            Editor
        }
    }
</script>

<style lang="less">
</style>