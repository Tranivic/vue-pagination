import { createStore } from 'vuex';
import paginationModule from './modules/pagination.js';

export default createStore({
  modules: {
    pagination: paginationModule,
  },
  state: {
    list: [],
    displayedList: [],
  },
  getters: {
    list(state) {
      return state.list;
    },
    displayedList(state) {
      return state.displayedList;
    },
  },
  mutations: {
    setListData(state, payload) {
      state.list = payload;
    },
    setDisplayedList(state, payload) {
      state.displayedList = payload;
    },
  },
  actions: {
    async fecthListData({ commit }) {
      const respose = await fetch('https://jsonplaceholder.typicode.com/todos');
      const fetchedData = await respose.json();
      const formatedData = fetchedData.map((item) => {
        return {
          id: item.id,
          title: item.title,
        };
      });
      commit('setListData', formatedData);
      if (!respose.ok) {
        throw new Error(respose.statusText || 'Something went wrong');
      }
    },
    getDisplayedList({ commit, getters, state }) {
      const start =
        (getters['pagination/currentPage'] - 1) * getters['pagination/perPage'];
      const end =
        getters['pagination/currentPage'] * getters['pagination/perPage'];
      const displayedList = state.list.slice(start, end);
      commit('setDisplayedList', displayedList);
    },
  },
});
