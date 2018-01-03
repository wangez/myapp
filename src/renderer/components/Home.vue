<template>
    <div id="home">
        <Hot class="hot" />
        <Articles class="route" :search="search"/>
        <Advert class="advert"></Advert>
    </div>
</template>

<script>
    import Hot from './Hot'
    import Articles from './Articles'
    import Advert from './Advert'
    export default {
        name: 'home',
        props: ['search'],
        components: {
            Hot,
            Articles,
            Advert
        }
    }
</script>

<style lang="less">
    #home {
        width: 100%;
        margin: 5px auto;
        background-color: #fff;
        box-shadow: 0 2px 6px rgba(100, 100, 100, 0.3);

        &::after {
            content: "";
            clear: both;
            display: block;
        }

        .hot,
        .advert,
        .route {
            float: left;
        }

        .hot {
            display: none;
            width: 200px;
        }

        .route {
            width: 100%;
            padding: 0 10px 0 10px;
            box-sizing: border-box;
        }

        .advert {
            display: none;
            width: 300px;
            font-size: 0.6em;
            padding: 2em;
            box-sizing: border-box;
        }
    }
    @media screen and (min-width: 1024px) {
        #home {
            max-width: 1000px;

            .advert {
                display: block;
            }

            .route {
                width: 700px;
            }
        }
    }

    @media screen and (min-width: 1280px) {
        #home {
            max-width: 1200px;

            .hot {
                display: block;
            }

            .route {
                width: 680px;
                margin: 0 10px;
            }
        }
    }
</style>