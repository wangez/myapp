<template>
    <div id="login">
        <div class="login-warper">
            <div class="login-bottom" @click="close"></div>
            <div class="login-container" >
                <div class="login-title">
                    <h2>登陆</h2><div class="login-close" @click="close" @touchstart="close"></div>
                </div>
                <div class="login-form right">
                    <form action="">
                        <h4>用户登录</h4>
                        <div class="form-group">
                            <label for="username">用户名</label>
                            <input class="input" type="text" name="username" v-model="username">
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input class="input" type="password" name="password" v-model="password">
                        </div>
                        <div class="form-group">
                            <div class="checkboxc" @click.prevent="remember">
                                <label for="remember">
                                    <input type="checkbox" name="remember" v-model="isRemember">
                                    记住登录状态
                                </label>
                            </div>
                            <button type="submit" @click.prevent="login">登陆</button>
                        </div>
                    </form>
                </div>
                <div class="login-form left">
                    <form action="">
                        <h4>用户注册</h4>
                        <div class="form-group">
                            <label for="username">用户名</label>
                            <input class="input" type="text" name="username" v-model="regname">
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input class="input" type="password" name="password" v-model="regpass">
                        </div>
                        <div class="form-group">
                            <label for="again">重复密码</label>
                            <input class="input" type="password" name="again" v-model="regword">
                        </div>
                        <div class="form-group">
                            <div class="checkboxc" @click.prevent="withLogin">
                                <label for="withLogin">
                                    <input type="checkbox" name="withLogin" v-model="isWithLogin">
                                    注册并登录
                                </label>
                            </div>
                            <button type="submit" @click.prevent="register">登陆</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="login-swaper-margin"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data: function () {
            return {
                closeActive: false,
                username: '',
                password: '',
                regname: '',
                regpass: '',
                regword: '',
                isRemember: true,
                isWithLogin: true
            }
        },
        methods: {
            close: function () {
                this.$store.commit('user/changeLogining')
            },
            closeStart: function () {
                this.closeActive = true
            },
            login: function () {
                this.$store.dispatch('user/login', {username: this.username, password: this.password, remember: this.isRemember})
            },
            register: function () {
                if (this.regpass !== this.regword) {
                    return
                }
                this.$store.dispatch('user/register', {username: this.regname, password: this.regpass, withLogin: this.isWithLogin})
            },
            remember: function () {
                this.isRemember = !this.isRemember
            },
            withLogin: function () {
                this.isWithLogin = !this.isWithLogin
            }
        }
    }
</script>

<style lang="less">

    #login {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;

        .login-warper {
            position: absolute;
            height: 100%;
            width: 100%;
            overflow: auto;

            
            .login-container {
                position: relative;
                margin: 40px 40px 0 40px;
                background-color: #fff;
                border-radius: 16px;
                overflow: hidden;

                .login-title {
                    position: relative;
                    height: 60px;
                    line-height: 60px;
                    color: #333;
                    text-indent: 1em;
                    width: 100%;
                    background-color: #efefef;
                    border: 0 solid #868686;
                    border-bottom-width: 1px;
                    font-size: 32px;

                    h2 {
                        margin: 0;
                        font-size: 32px;
                    }

                    .login-close {
                        position: absolute;
                        width: 1em;
                        height: 1em;
                        right: 1em;
                        top: 0;
                        bottom: 0;
                        margin: auto 0;
                        border: 1px solid transparent;
                        box-sizing: border-box;
                        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAaCAYAAABYQRdDAAADJUlEQVRIiZ2UXUhTYRjH/8flTM0Qa5ZiX164gjKjENMbxSCFmCiokWk4NmxqU2cQERFG5U2KzokMreFHlrsoWkYahN1UEkZaQSnlovxEIyPF3JzrnPPObcezs1n/q/c573l/53ne5zx/au7nD7tlYR5WG1hRECNosxjrlnUeC4vcsxuY4FffVeRqh8iGPRJyvQF50b55lG0EdxRqtEza2XhXgRaG01L4MUF4ejHKpOwSdmoCrXoT5taR5NjDeifQFpmFi7lSds2S7KLdyKjIwU66ALaiwWZon897J872orH1iyOQ4FR5IWL84YKyis6DRraVlGW3oO+WASNWIaIFA2069C+SLAPTVJDHufrggtKXHKtQITOQZEtNd6Oh2+wRuTykR20v+aIt+CguKZPg77bvx3l7YxLkFQkIIFy8a2vFy99cINMcY+1jTNnt9P2LkahSIzGE+w4XSis4WY2yQ2QtWniF680v4H4L7s3xj1NCkxrGq4QHBcKQVqrAfkf050kLjKOOYNaExibSHD+/g9BoZJCI+AQPUFpR2agoiGCXrl+MaU4z+imS5b4iFdK2eTwtAKW1J6cS+RHkcpffGtHVoYeuh1zESuRJVMr2CB0FxYyp0Kb1dQ1kl59iye0NZuLyGvSQ7xUeZcFMGfnHF+FCAvfZ9oxi5HsB+oTCYob5K8V5ND7wAeM2r6e8QS0Ybq9B+yT5H3dESsiBiXuoMXkeCp9Q6ycDqrumSCDJwpVrGc7f7KO+CT3T/wq1vEdH9QN8A8kyRZGN6KgMlGSSbFdWhlBX3yvoZB6grrIZBRwuhTp5ExhvkBa6vGHpjU7QyXhQ97KZqSkvO47Q1U3aGwpKDrDewDjZs/qbPG/gQ93KZuRpakJTS3A2hhzz5A08qNnoKptx8nMn+FOz1tAXe5pwe9AiAB01oKrN0e01Ts4TbeilaaubM+is4xo6C2U8srOqy1n2WifnS4wjykocczRNNHGf7sMwFzp694bTI6mgWJw/w3VyjwpJhlIZ6wzH2rR49H0VyikbiFdqkLLFF5EoPF0BhcPJbPiMBp0JMzYfLvW/+gtYZiq7DnWUJgAAAABJRU5ErkJggg==') 50% 50% no-repeat;

                        &:hover {
                            border-color: #333;
                        }
                    }
                }

                .login-form {
                    width: 100%;
                    padding: 20px;
                    box-sizing: border-box;

                    h4 {
                        font-size: 22px;
                        margin: 0;
                    }

                    .form-group {
                        margin-top: 10px;
                        font-size: 22px;
                        overflow: auto;

                        label {
                            display: block;
                        }

                        .input {
                            display: block;
                            box-sizing: border-box;
                            height: 34px;
                            width: 100%;
                            margin: 10px 0 0 0;
                            padding: 6px 12px;
                            font-size: 14px;
                            line-height: 1.42858;
                            color: #555;
                            background-color: #fff;
                            background-image: none;
                            border: 1px solid #ccc;
                            border-radius: 4px;
                            -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
                            box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
                            -webkit-transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
                            -o-transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
                            transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
                        }

                        .checkboxc {
                            float: left;
                            height: 41px;
                            font-size: 22px;
                            line-height: 41px;
                        }

                        button {
                            font-size: 22px;
                            float: right;
                            line-height: 35px;
                        }
                    }

                }
            }

            .login-swaper-margin {
                height: 40px;
            }
        }

        

        .login-bottom {
            position: absolute;
            height: 100%;
            width: 100%;
            background-color: #333;
            opacity: 0.2;
        }
    }

    
    @media screen and (min-width: 1024px) {
        #login .login-warper .login-container {
            overflow: auto;

            .login-form {
                position: relative;
                width: 40%;
            }

            .login-form.left {
                float: left;
                left: 5%;
            }
            .login-form.right {
                float: right;
                right: 5%;
            }
        }
    }

    @media screen and (min-width: 1280px) {
        #login .login-warper .login-container {
            width: 1200px;
            margin: 40px auto 0;
        }
    }
</style>