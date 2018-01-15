<template>
    <div class="container" :style="ice" ref="c">
        <div class="swaper" :style="{transform: 'translate(-50%, -50%) scale(' + scale + ')'}" @click="click">
            <div v-for="i in 10" 
                v-show="i === active || r1 || r2 || l1 || l2"
                :id="'s' + (i - 1)" :key="i"
                :class="{sub: true, active: active === i - 1, r1: r1 === i - 1, r2: r2 === i - 1, l1: l1 === i - 1, l2: l2 === i - 1}"
                :style="{backgroundImage: 'url(' + pic['s' + (i - 1)] + ')'}">
            </div>
        </div>
    </div>
</template>

<script>
    import ice from '../../assets/superbg.jpg'
    import s0 from '../../assets/super0.jpg'
    import s1 from '../../assets/super1.jpg'
    import s2 from '../../assets/super2.jpg'
    import s3 from '../../assets/super3.jpg'
    import s4 from '../../assets/super4.jpg'
    import s5 from '../../assets/super5.jpg'
    import s6 from '../../assets/super6.jpg'
    import s7 from '../../assets/super7.jpg'
    import s8 from '../../assets/super8.jpg'
    import s9 from '../../assets/super9.jpg'
    export default {
        name: 'super3d',
        data: function () {
            return {
               ice: {backgroundImage: 'url(' + ice + ')'},
               pic: {
                   s0,
                   s1,
                   s2,
                   s3,
                   s4,
                   s5,
                   s6,
                   s7,
                   s8,
                   s9
               },
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
                const index = parseInt(e.target.getAttribute('id').replace('s', ''))
                if (index === this.l1 || index === this.l2) {
                    this.active = this.l1
                } else if (index === this.r1 || index === this.r2) {
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
        
        .swaper {
            position: absolute;
            height: 450px;
            width: 300px;
            top: 50%;
            left: 50%;
            transform-style: preserve-3d;
            perspective: 1000px;
            transition: all 0.5s;
            background-size: 100% 100%;

            .sub {
                position: absolute;
                height: 100%;
                width: 100%;
                background-size: 100% 100%;
                transition: all 0.5s;
            }

            .active {
                transform: translateZ(252px);
            }

            .r1 {
                transform: rotateY(-55deg) translateX(235px) translateZ(-227px) scale(.95);
            }

            .l1 {
                transform: rotateY(55deg) translateX(-235px) translateZ(-227px) scale(.95);
            }

            .r2 {
                transform: rotateY(-90deg) translateX(160px) translateZ(-485px) scale(.8);
            }

            .l2 {
                transform: rotateY(90deg) translateX(-160px) translateZ(-485px) scale(.8);
            }
        }
    }
</style>