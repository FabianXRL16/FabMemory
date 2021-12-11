import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalDifficulty: false,
    difficulty: "f",
    level: 1,
    play: false,
    gameCards: [],
  },
  getters: {
    getModalDifficulty: (state) => state.modalDifficulty,
    getDifficulty: (state) => state.difficulty,
    getPlay: (state) => state.play,
    getLevel: (state) => state.level,
    getGameCards: (state) => state.gameCards,
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
    showLevel({ commit }, level) {
      commit("CHANGE_STATE_LEVEL", level);
    },
    showGameCards({ commit }) {
      commit("CREATED_GAME_CARDS");
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
    CHANGE_STATE_LEVEL(state, level) {
      state.level = level;
    },
    CREATED_GAME_CARDS(state) {
      function createdGameCards(count) {
        let cards = [];
        let arr = [];
        for (let i = 1; i < count + 1; i++) {
          arr.push(i);
        }
        cards = [...arr, ...arr];
        return cards.sort(() => Math.random() - 0.5);
      }
      if (state.difficulty === "f") {
        state.gameCards = createdGameCards(state.level + 1);
      }
      if (state.difficulty === "i") {
        state.gameCards = createdGameCards((state.level + 1) * 2 + 2);
      }
      if (state.difficulty === "d") {
        state.gameCards = createdGameCards((state.level + 1) * 4 + 20);
      }
    },
  },
});
