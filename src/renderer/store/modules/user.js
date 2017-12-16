const state = {
    logining: false,
    username: null
}

const mutations = {
    changeLogining: function (state, data) {
        state.logining = !state.logining
    },
    setUsername: function (state, data) {
        state.username = data
    }
}

const actions = {
    login: function (context, {username, password, remember}) {
        this.$http({
            method: 'post',
            url: '/api/user/login',
            data: {
                username,
                password,
                remember
            }
        }).then(e => {
            if (e.data.success) {
                context.commit('changeLogining')
                context.commit('setUsername', username)
            } else {
                console.log(e.data.msg)
            }
        })
    },
    register: function (context, {username, password, withLogin}) {
        this.$http({
            method: 'post',
            url: '/api/user/register',
            data: {
                username,
                password,
                withLogin
            }
        }).then(e => {
            if (e.data.success) {
                if (withLogin) {
                    context.commit('setUsername', username)
                }
                context.commit('changeLogining')
            } else {
                console.log(e.data.msg)
            }
        })
    },
    getLogined: function (context) {
        this.$http({
            method: 'post',
            url: '/api/user/getLogined'
        }).then(e => {
            if (e.data.success) {
                context.commit('setUsername', e.data.msg)
            } else {
                context.commit('setUsername', null)
            }
        })
    },
    logout: function (context) {
        this.$http({
            method: 'post',
            url: '/api/user/logout'
        }).then(e => {
            if (e.data.success) {
                context.commit('setUsername', null)
            }
        })
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}