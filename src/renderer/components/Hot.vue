<template>
    <div id="hot">
        <div class="hot-list">
            <div>热门标签</div>
            <router-link class="label" v-for="item in labels" :key="item.text" :to="{path: '/home?search=' + item.text}" :style="{backgroundColor: item.color}">{{ item.text }}</router-link>
        </div>
        <div class="hot-list"></div>
    </div>
</template>

<script>
    const random = e => {
        return Math.floor(Math.random() * 226)
    }
    export default {
        name: 'hot',
        data () {
            return {
                labels: [
                    {text: 'css', color: 'rgb(' + random() + ', ' + random() + ', ' + random() + ')'},
                    {text: 'canvas', color: 'rgb(' + random() + ', ' + random() + ', ' + random() + ')'},
                    {text: 'chart', color: 'rgb(' + random() + ', ' + random() + ', ' + random() + ')'},
                    {text: '3d', color: 'rgb(' + random() + ', ' + random() + ', ' + random() + ')'},
                ],
                game: []
            }
        },
        computed: {
            randomColor () {
                return 'rgb(' + random() + ', ' + random() + ', ' + random() + ')'
            }
        }
    }
</script>

<style lang="less">
    .hot-list {
        color: #3385ff;
        padding: 1em;

        & {
            overflow: hidden;
        }

        &+& {
            margin-top: 1em;
        }

        .label {
            padding: 0 0.5em;
            float: left;
            font-size: 1em;
            line-height: 1.4em;
            margin-right: 1em;
            text-decoration: none;
            color: #fff;
            border-radius: 2px;
        }
        .label:hover {
            color: #000;
        }
    }
</style>