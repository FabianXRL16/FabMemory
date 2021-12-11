import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalDifficulty: false,
    difficulty: "f",
    play: false,
    facil:[]
  },
  getters: {
    getModalDifficulty: (state) => state.modalDifficulty,
    getDifficulty: (state) => state.difficulty,
    getPlay: (state) => state.play,
  },
  actions: {
    showModalDifficulty({ commit }) {
      commit("CHANGE_STATE_MODAL");
    },
    showDifficulty({ commit }, difficulty) {
      commit("SHOW_DIFFICULTY", difficulty);
    },
    showPlay({ commit }) {
      commit("CHANGE_STATE_PLAY");
    },
  },
  mutations: {
    CHANGE_STATE_MODAL(state) {
      state.modalDifficulty = !state.modalDifficulty;
    },
    SHOW_DIFFICULTY(state, difficulty) {
      state.difficulty = difficulty;
    },
    CHANGE_STATE_PLAY(state) {
      state.play = !state.play;
    },
  },
});
