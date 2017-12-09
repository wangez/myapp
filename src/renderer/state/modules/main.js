const state = {
    main: 0
}

const mutations = {
    register: function (state, data) {
        console.log(state, data)
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
    actions
}