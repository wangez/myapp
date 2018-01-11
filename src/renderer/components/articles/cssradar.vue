<template>
    <div id="cssradar">
        <div>点击雷达图添加点</div>
        <div v-for="(i, index) in points">{{ '第' + (index + 1) + '个点，方向：' + i[3] + ', 距离：' + i[4] }}</div>
        <div id="radar" @click="click">
            <div class="circle" style="width: 6px; height: 6px;"></div>
            <div v-for="i in 5" class="circle" :key="i" :style="{width: i * 2 + 'em', height: i * 2 + 'em'}"></div>
            <div class="circle radar" style="width: 12em; height: 12em" ref="radar">
                <div class="pointer" :style="{animationDuration: total + 's'}"></div>
                <div v-for="(i, index) in points" class="point" :key="i[0] + '' + i[1]" 
                :style="{left: i[0] + 'px', top: i[1] + 'px', animationDuration: total + 's', animationDelay: i[2] + 's'}">
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'cssradar',
        data () {
            return {
                points: [],
                beginTime: null,
                total: 5
            }
        },
        mounted () {
            const {width, height} = this.$refs.radar.getBoundingClientRect()
            this.x = width / 2
            this.y = height / 2
            this.beginTime = new Date().getTime()
        },
        methods: {
            click (e) {
                if (e.target.classList.contains('radar')) {
                    const {offsetX: x, offsetY: y} = e
                    const angle = (Math.atan2(y - this.y, x - this.x) / Math.PI * 180 + 360) % 360
                    const dis = Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2))
                    const time = (new Date().getTime() - this.beginTime) % (this.total * 1000) / 1000
                    const delay = angle / 360 * this.total - time
                    this.points.push([x - 2, y - 2, delay, angle.toFixed(2), dis.toFixed(2)])
                }
            }
        }
    }
</script>

<style lang="less">
    #cssradar {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 30em;
        height: 20em;
        border: 1px solid #333;
        box-shadow: 0 0 1px 1px #333;

        #radar {
            position: absolute;
            top: 3em;
            bottom: 3em;
            left: 16em;
            right: 0;
            margin: auto;

            .circle {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 50%;
                border: 1px solid #32a10d;
            }
            .radar {
                background-color: rgba(20, 130, 0, 0.3);

                .pointer {
                    position: absolute;
                    width: 50%;
                    height: 1px;
                    background-color: #32a10d;
                    top: 50%;
                    left: 50%;
                    transform-origin: 0 50%;
                    animation: radarrotate 5s infinite linear;
                }
            }

            .point {
                position: absolute;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background-color: #32a10d;
                animation: flashpoint 5s infinite linear;
                box-shadow: 0 0 0 0 #fff;
            }
        }
    }
    @keyframes radarrotate {
        0% {
            transform: rotate(0)
        }
        100% {
            transform: rotate(360deg)
        }
    }
    @keyframes flashpoint {
        0% {
            box-shadow: 0 0 0 0 #fff;
        }
        10% {
            box-shadow: 0 0 8px 8px #fff;
        }
        20% {
            box-shadow: 0 0 0 0 #fff;
        }
    }
</style>