<template>
    <div id="login">
        <div class="login-bottom"></div>
        <div class="login-container"></div>
    </div>
</template>

<script>
    export default {
        name: 'Login'
    }
</script>

<style lang="less">
    #login {
        position: absolute;
        height: 100%;
        width: 100%;

        .login-container {
            position: absolute;
            top: 20px;
            bottom: 20px;
            left: 20px;
            right: 20px;
            margin: auto;
            background-color: #fff;
        }

        .login-bottom {
            position: absolute;
            height: 100%;
            width: 100%;
            background-color: #333;
            opacity: 0.2;
        }
    }
</style>