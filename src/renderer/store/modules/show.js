const state = {
    menu: []
}

const mutations = {
    setMenu: function (state, data) {
        state.menu = data
    }
}

const actions = {
    getMenu: function (context) {
        this.$http({
            method: 'post',
            url: '/api/show/getMenu'
        }).then(e => {
            context.commit('setMenu', e.data)
        })
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}