import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        addCount(state) {
            state.count += 1;
        }
    },
    getters: {
        // count(state) {
        //     return state.count
        // }
        count: state => state.count
    },
    actions: {
        add(store) {
            store.commit('addCount')
        }
    }
});

export default store;
