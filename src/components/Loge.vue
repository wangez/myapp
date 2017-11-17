<template>
    <div id="loge">
        <div id="loge-left">
            <ul>
                <li v-for="(value, key) in logs" @click="click" :id="key" :key="key">
                    {{ key.replace('y', '年').replace('m', '月').replace('d', '日') }}
                </li>
            </ul>
        </div>
        <div id="loge-right" v-if="show">
            <div
                v-for="item in showlist">
                {{item}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                show: null
            }
        },
        computed: {
            logs: function () {
                return this.$store.state.loge.loges
            },
            showlist: function () {
                return this.logs[this.show].split('\n')
            }
        },
        methods: {
            click: function (e) {
                this.show = e.target.id
                this.$store.commit('head/hide')
            }
        }
    }
</script>

<style lang="less">
    #loge {
        position: absolute;
        height: 100%;
        width: 100%;

        #loge-left {
            position: absolute;
            height: 100%;
            width: 300px;
            background-color: rgba(226, 241, 248, 0.8)
        }

        #loge-right {
            position: absolute;
            height: 100%;
            left: 300px;
            right: 0;
        }
    }
</style>