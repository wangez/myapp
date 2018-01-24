<template>
    <div class="container" :style="{backgroundImage: 'url(' + pic.superbg + ')'}" ref="c">
        <div class="swaper" :style="{transform: 'translate(-50%, -50%) scale(' + scale + ')'}">
            <div v-for="i in 10" 
                :key="i"
                :class="['sub', classList[showList.indexOf(i)]]"
                :style="{backgroundImage: 'url(' + pic['super' + i] + ')'}">
                <div class="frame" :style="{backgroundImage: 'url(' + pic.head + ')'}" @click="e => click(i)"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import pic from '../../assets'
    export default {
        name: 'super3d',
        data: function () {
            return {
               pic,
               active: 1,
               scale: 1,
               classList: ['l2', 'l1', 'active', 'r1', 'r2']
            }
        },
        computed: {
            showList () {
                return [(this.active + 1) % 10 + 1, (this.active) % 10 + 1, this.active, (this.active + 8) % 10 + 1, (this.active + 7) % 10 + 1]
            }
        },
        beforeDestroy () {
            this.destroy() // 删除绑定的window resize事件
        },
        mounted() {
            const {width} = this.$refs.c.getBoundingClientRect()
            this.scale = width / 1920
            const fun = this.resize.bind(this)
            window.addEventListener('resize', fun)
            this.destroy = e => window.removeEventListener('resize', fun)
        },
        methods: {
            resize () {
                const {width} = this.$refs.c.getBoundingClientRect()
                this.scale = width / 1920
            },
            click (e) {
                this.active = e
            }
        }
    }
</script>

<style lang="less">
    .container {
        position: absolute;
        top: 3em;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        background-size: 100% 100%;
        
        .swaper {
            position: absolute;
            height: 450px;
            width: 300px;
            top: 50%;
            left: 50%;
            transform-style: preserve-3d;
            perspective: 1000px;
            transition: all 0.5s;

            .sub {
                position: absolute;
                height: 100%;
                width: 100%;
                background-size: 100% 100%;
                transition: transform 0.5s;
                visibility: hidden;

                .frame {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: 10px;
                    background-position: 50% 50%;
                    background-size: 0 0;
                    background-repeat: no-repeat;
                    transition: all 0.5s;
                }
            }

            .active {
                transform: translateZ(252px);
                visibility: visible;

                .frame {
                    border: 6px solid rgb(233, 192, 9);
                    background-position: 50% 0%;
                    background-size: 60px 60px;
                }
            }

            .r1 {
                transform: rotateY(-55deg) translateX(235px) translateZ(-227px) scale(.95);
                visibility: visible;
            }

            .l1 {
                transform: rotateY(55deg) translateX(-235px) translateZ(-227px) scale(.95);
                visibility: visible;
            }

            .r2 {
                transform: rotateY(-90deg) translateX(160px) translateZ(-485px) scale(.8);
                visibility: visible;
            }

            .l2 {
                transform: rotateY(90deg) translateX(-160px) translateZ(-485px) scale(.8);
                visibility: visible;
            }
        }
    }
</style>