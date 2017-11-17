<template>
    <head :style="{height: height}">
        <nav>
            <router-link :to="{name: 'home'}">主页</router-link>
            <router-link class="right" :to="{name: 'show'}">示例</router-link>
            <router-link class="right" :to="{name: 'comp'}">组件</router-link>
            <router-link class="right" :to="{name: 'loge'}">日志</router-link>
        </nav>
    </head>
</template>

<script>
export default {
    computed: {
        height: function () {
            return this.$store.state.head.height + 'px'
        }
    }
}
</script>

<style lang="less">
    head {
        position: absolute;
        width: 100%;
        background-color: rgba(226, 241, 248, 0.8);
        display: block;
        overflow: hidden;
        transition: height 0.6s linear;

        nav {
            position: absolute;
            top: 20px;
            height: 60px;
            width: 600px;
            margin: 0 auto;
            left: 0;
            right: 0;
            z-index: 10;

            a {
                position: relative;
                float: left;
                color: #333;
                line-height: 60px;
                text-decoration: none;
                font-size: 28px;
                background-color: transparent;
                transition: color 0.3s linear;
            }

            a.right {
                float: right;
                margin-left: 30px;
            }

            a::after,
            a::before {
                content: "";
                position: absolute;
                top: 0;
                height: 100%;
                width: 100%;
                background-color: #333;
                opacity: 0;
                transition: left 0.6s linear, opacity 0.6s linear;
                z-index: -1;
                border-radius: 4px;
            }

            a::before {
                left: -100%;
            }

            a::after {
                left: 100%;
            }

            a:hover {
                color: #fff;
            }

            a:hover::after,
            a:hover::before {
                left: 0;
                opacity: 1;
            }
        }
    }
</style>
