const state = {
    menu: []
}

const mutations = {
    setMenu: function (state, data) {
        console.log(data)
        for (let j = 0; j < data.length; j++) {
            if (data[j].index === 2) {
                const parent = data[j]
            }
        }
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