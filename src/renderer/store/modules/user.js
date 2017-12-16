const state = {
    logining: true
}

const mutations = {
    changeLogining: function (state, data) {
        state.logining = !!state.logining
    }
}

const actions = {
    register: function (context, {username, passworld}) {
        this.$http({
            method: 'post',
            url: '/api/user/login',
            data: {
                username,
                passworld
            }
        }).then(e => {
            console.log(e)
        })
    },
    getLogined: function (context) {
        this.$http({
            method: 'post',
            url: '/api/user/getLogined'
        }).then(e => {
            console.log(e)
        })
    },
    logout: function () {
        this.$http({
            method: 'post',
            url: '/api/user/logout'
        }).then(e => {
            console.log(e)
        })
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}