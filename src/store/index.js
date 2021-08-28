import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
    token: () => {
      return Vue.$cookies.get('token')
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
