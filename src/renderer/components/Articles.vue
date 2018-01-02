<template>
    <div>
        <div id="articles">
            <div v-if="search" id="articles-title">{{'‘' + search + '’的搜索结果' }}</div>
            <ul id="articles-list">
                <MenuItem v-for="item in menu" :key="item.id" :data="item" />
            </ul>
        </div>
    </div>
</template>

<script>
    import MenuItem from './MenuItem'
    export default {
        name: 'articles',
        title: '主页',
        props: ['search'],
        computed: {
            menu () {
                this.$store.dispatch('menu/getMenu', this.search)
                return this.$store.state.menu.menu
            }
        },
        components: {
            MenuItem
        }
    }
</script>

<style lang="less">
    #articles {
        padding: 0;
        margin: 0;

        #articles-title {
            color: #888;
        }

        #articles-list {
            list-style: none;
            padding: 0;
        }
    }
</style>