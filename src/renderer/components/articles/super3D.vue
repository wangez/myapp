<template>
    <div class="container" :style="ice" ref="c">
        <div class="swaper" :style="{transform: 'translate(-50%, -50%) scale(' + scale + ')'}" @click="click">
            <div v-for="i in 10" 
                v-show="i === active || r1 || r2 || l1 || l2"
                :id="'s' + (i - 1)" :key="i"
                :class="{sub: true, active: active === i - 1, r1: r1 === i - 1, r2: r2 === i - 1, l1: l1 === i - 1, l2: l2 === i - 1}"
                :style="{backgroundImage: 'url(' + pic['super' + (i - 1)] + ')'}">
                <div class="frame" :style="{backgroundImage: 'url(' + pic.head + ')'}" @click="e => click(i - 1)"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import pic from '../../assets'
    console.log(pic)
    export default {
        name: 'super3d',
        data: function () {
            return {
               ice: {backgroundImage: 'url(' + pic.superbg + ')'},
               pic,
               active: 0,
               scale: 1
            }
        },
        computed: {
            r1 () {
                return (this.active + 9) % 10
            },
            r2 () {
                return (this.active + 8) % 10
            },
            l1 () {
                return (this.active + 1) % 10
            },
            l2 () {
                return (this.active + 2) % 10
            }
        },
        mounted() {
            const {width} = this.$refs.c.getBoundingClientRect()
            this.scale = width / 1920
            window.addEventListener('resize', this.resize.bind(this))
        },
        methods: {
            resize () {
                const {width} = this.$refs.c.getBoundingClientRect()
                console.log(1)
                this.scale = width / 1920
            },
            click (e) {
                console.log(e)
                if (e === this.l1 || e === this.l2) {
                    this.active = this.l1
                } else if (e === this.r1 || e === this.r2) {
                    this.active = this.r1
                } 
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