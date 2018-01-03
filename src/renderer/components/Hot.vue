<template>
    <div>
        <div class="hot-list">
            <div class="title">标签</div>
            <router-link class="label" v-for="item in labels" :key="item.text" :to="{path: '/home?search=' + item.text}">{{ item.text }}</router-link>
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
                    {text: 'js'},
                    {text: 'css'},
                    {text: 'canvas'},
                    {text: 'chart'},
                    {text: '3d'},
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
        padding: 10px;
        width: 180px;

        & {
            overflow: hidden;
        }

        &+& {
            margin-top: 1em;
        }

        .title {
            width: 170px;
            font-size: 0.8em;
            color: #666;
            background-color: #ddd;
            border: 0px solid #bbb;
            border-left-width: 0.5em;
            margin-bottom: 0.5em;
        }

        .label {
            float: left;
            width: 80px;
            text-align: center;
            font-size: 0.6em;
            line-height: 1.8em;
            text-decoration: none;
            border-radius: 2px;
            box-sizing: border-box;
            border: 1px solid #666;
            color: #666;
            margin: 0 10px 5px 0;
        }
        .label:hover {
            color: #ddd;
            background-color: #0da4d3;
            border-color: #0da4d3;
        }
    }
</style>