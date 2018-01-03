<script>
    import './articles/dyna'
    export default {
        name: 'showArticles',
        props: {
            name: {
                type: String,
                required: true
            }
        },
        render: function (createElement) {
            return createElement(
                this.name
            )
        }
    }
</script>

<style lang="less">
.ab {
    width: 200px;
    height: 200px;
    background-color: red;
}
</style>