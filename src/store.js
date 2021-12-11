import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalLevel: false,
    level: "f",
    play: false,
  },
  getters: {
    getModalLevel: (state) => state.modalLevel,
    getLevel: (state) => state.level,
    getPlay: (state) => state.play,
  },
  actions: {
    showModalLevel({ commit }) {
      commit("CHANGE_STATE_MODAL");
    },
    showLevel({ commit }, level) {
      commit("SHOW_LEVEL", level);
    },
    showPlay({ commit }) {
      commit("CHANGE_STATE_PLAY");
    },
  },
  mutations: {
    CHANGE_STATE_MODAL(state) {
      state.modalLevel = !state.modalLevel;
    },
    SHOW_LEVEL(state, level) {
      state.level = level;
    },
    CHANGE_STATE_PLAY(state) {
      state.play = !state.play;
    },
  },
});
