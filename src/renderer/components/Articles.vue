<template>
    <div>
        <div id="articles">
            <div v-if="search" id="articles-title">{{search}}</div>
            <ul id="articles-list">
                <MenuItem v-for="item in menu" :key="item.id" :data="item" />
            </ul>
        </div>
    </div>
</template>

<script>
    import MenuItem from './MenuItem'
    import dyna from '../router/dyna-components'
    export default {
        name: 'articles',
        props: ['search'],
        computed: {
            menu () {
                return this.$store.state.menu.menu
            }
        },
        mounted () {
            this.$store.dispatch('menu/getMenu', this.search)
        },
        watch: {
            search () {
                this.$store.dispatch('menu/getMenu', this.search)
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