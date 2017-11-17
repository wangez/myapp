const state = {
    height: 80
}

const mutations = {
    show: function (state) {
        if (state.height !== 80) {
            state.height = 80
        }
    },
    hide: function (state) {
        if (state.height !== 0) {
            state.height = 0
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations
}