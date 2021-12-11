import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalLevel: false,
  },
  getters: {
    getModalLevel: (state) => state.modalLevel,
  },
  actions: {
    showModalLevel({ commit }) {
      commit("CHANGE_STATE_MODAL");
    },
  },
  mutations: {
    CHANGE_STATE_MODAL(state) {
      state.modalLevel = !state.modalLevel;
    },
  },
});
