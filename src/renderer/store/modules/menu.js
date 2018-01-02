const state = {
    menu: []
}

const mutations = {
    setMenu: function (state, data) {
        if (state.menu.length === 0 || JSON.stringify(state.menu) !== JSON.stringify(data)) {
            state.menu = data
        }
    }
}

const actions = {
    getMenu (context, search) {
        this.$http({
            method: 'post',
            url: '/api/menu/getMenu',
            data: {
                search
            }
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