import { createStore } from 'vuex'
import paginationModule from './modules/pagination.js'

export default createStore({
  modules: {
    pagination: paginationModule
  },
  state: {
    list: []
  },
  getters: {
    list(state) {
      return state.list
    }
  },
  mutations: {
    setListData(state, payload) {
      state.list = payload
    }
  },
  actions: {
    async fecthListData({ commit }) {
      const respose = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await respose.json()
      commit('setListData', data)
      if (!respose.ok) {
        throw new Error(respose.statusText || 'Something went wrong' )
      }
      
    }
  },
})
