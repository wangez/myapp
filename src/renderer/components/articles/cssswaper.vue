<template>
    <div class="container">
        <div class="swaper" ref="swaper">
            <div v-for="item in contents" class="sub">
                <div v-for="text in item">{{ text }}</div>
            </div>
            <div class="sub sub1">
                <div v-for="text in contents[0]">{{ text }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    const showData = [
        [
            '测试1',
            'welcome'
        ],
        [
            '测试2',
            'welcome'
        ],
        [
            '测试3',
            'welcome',
            '测试',
            'welcome',
            'welcome',
            '测试',
            'welcome',
            'welcome',
            '测试',
            'welcome'
        ]
    ]
    export default {
        name: 'jsswaper',
        title: '主页',
        data: function () {
            return {
                contents: showData
            }
        }
    }
</script>

<style lang="less">
    .container {
        position: absolute;
        width: 300px;
        height: 300px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 1px solid #bbb;
        box-shadow: 0 2px 6px rgba(100, 100, 100, 0.8);
        margin: auto;
        overflow: hidden;
    }

    .swaper {
        position: relative;
        top: 0;
        left: 0;
        width: 400%;
        overflow: hidden;
        animation: swaper 8s infinite linear;

        .sub {
            text-align: center;
            display: inline;
            float: left;
            width: 25%;
            height: 100%;
        }
    }
    @keyframes swaper {
        //1
        0% {
            left: 0;
        }
        20% {
            left: 0;
        }
        //2
        33.33% {
            left: -100%;
        }
        53.33% {
            left: -100%;
        }
        //3
        66.66% {
            left: -200%;
        }
        86.66% {
            left: -200%;
        }
        //4
        99.99% {
            left: -300%;
        }
        100% {
            left: 0;
        }
    }
</style>