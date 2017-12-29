<template>
    <div id="show">
        <div id="show-menu">
            <ul>
                <li v-for="m in menuList" :key="m.id">
                    <router-link :to="{name: m.name}">{{ m.name }}</router-link>
                </li>
            </ul>
        </div>
        <div id="show-container">
            <router-view />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'show',
        title: '展示',
        computed: {
            menuList () {
                return this.$store.state.show.menu
            }
        }
    }
</script>

<style lang="less">
    #show {
        width: 100%;
        height: 100%;
        padding-left: 340px;
        box-sizing: border-box;
        
        #show-menu {
            position: fixed;
            width: 340px;
            top: 3em;
            left: 0;
            bottom: 0;
            overflow-x: hidden;
            overflow-y: auto;
            background-color: rgba(255, 252, 252, 0.9);

            ul {
                list-style: none;

                a {
                    text-decoration: none;
                    color: #7f8c8d;
                }
            }
        }

        #show-container {
            height: 100%;
        }
    }


    @media screen and (max-width: 1280px) {
        #show #show-menu {
            // display: none;
        }
    }
</style>