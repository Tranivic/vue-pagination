export default {
  namespaced: true,
  state: {
    currentPage: 1,
    perPage: 10,
    totalOfPages: null,
  },
  getters: {
    currentPage(state) {
      return state.currentPage;
    },
    totalOfPages(state) {
      return state.totalOfPages;
    },
    perPage(state) {
      return state.perPage;
    },
  },
  mutations: {
    setCurrentPage(state, payload) {
      state.currentPage = payload;
    },
    setTotalOfPages(state, payload) {
      state.totalOfPages = payload;
    },
  },
  actions: {
    getTotalOfPages({ commit, getters, rootState }) {
      const totalOfPages = Math.ceil(rootState.list.length / getters.perPage);
      commit('setTotalOfPages', totalOfPages);
    },
  },
};
