const state = {
    width: null,
    height: null,
}

const mutations = {
    setWidth: function (state, data) {
        if (state.width !== data) {
            state.width = data
        }
    }
}

const actions = {
    someAsyncTask({
        commit
    }) {
        // do something async
        commit('INCREMENT_MAIN_COUNTER')
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}