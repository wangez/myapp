<template>
    <div>
        <div class="ad" @mousemove="moving = false" @mouseout="moving = true">
            <div class="admoving" :style="{animationPlayState: moving ? 'running' : 'paused'}">
                <div>广告位招租</div>
                <div><span>邮箱</span><span style="user-select: text"> 1059601437@qq.com</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'advert',
        data () {
            return {
                moving: true
            }
        }
    }
</script>

<style lang="less">
    .ad {
        border: 1px solid #bbb;
        box-sizing: border-box;
        height: 600px;
        background-color: #efefef;
        box-shadow: 0 2px 6px rgba(100, 100, 100, 0.3);

        .admoving {
            position: relative;
            animation: admoving 10s infinite linear;
            margin: auto;
            top: 0;
            transform: translateY(0);
            animation-play-state: running;
        }
    }

    @keyframes admoving {
        0% {
            top: 0;
            transform: translateY(0);
        }
        50% {
            top: 100%;
            transform: translateY(-100%);
        }
        100% {
            top: 0;
            transform: translateY(0);
        }
    }
</style>