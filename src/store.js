import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalLevel: false,
    level: "f",
  },
  getters: {
    getModalLevel: (state) => state.modalLevel,
    getLevel: (state) => state.level,
  },
  actions: {
    showModalLevel({ commit }) {
      commit("CHANGE_STATE_MODAL");
    },
    showLevel({ commit }, level) {
      commit("SHOW_LEVEL", level);
    },
  },
  mutations: {
    CHANGE_STATE_MODAL(state) {
      state.modalLevel = !state.modalLevel;
    },
    SHOW_LEVEL(state, level) {
      state.level = level;
    },
  },
});
