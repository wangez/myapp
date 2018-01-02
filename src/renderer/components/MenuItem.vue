<template>
    <li class="menu-item">
        <router-link :to="{path: '/' + data.name}" class="menu-item-head">{{ data.title }}</router-link :to="{path: '/' + 'name'}">
        <div class="menu-item-time">{{ data.title }}</div>
        <div class="menu-item-content">{{ data.bz }}</div>
    </li>
</template>

<script>
    export default {
        name: 'menuItem',
        props: ['data']
    }
</script>

<style lang="less">
    .menu-item {
        border: 0 solid #bbb;
        border-top-width: 1px;

        .menu-item-head {
            color: #0da4d3;
            text-decoration: none;
            font-size: 0.7em;
        }

        .menu-item-time {
            color: #bbb;
            font-size: 12px;
            line-height: 20px;
        }

        .menu-item-content {
            font-size: 18px;
            line-height: 1.4;
            color: #585858;
        }
    }
</style>