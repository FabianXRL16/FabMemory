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
    levels: [
      {
        difficulty: "f",
        title: "Fácil",
        content: [
          { title: "Nivel 1", action: "1", state: true },
          { title: "Nivel 2", action: "2", state: false },
          { title: "Nivel 3", action: "3", state: false },
          { title: "Nivel 4", action: "4", state: false },
          { title: "Nivel 5", action: "5", state: false },
        ],
      },
      {
        difficulty: "i",
        title: "Intermedio",
        content: [
          { title: "Nivel 1", action: "1", state: true },
          { title: "Nivel 2", action: "2", state: false },
          { title: "Nivel 3", action: "3", state: false },
          { title: "Nivel 4", action: "4", state: false },
          { title: "Nivel 5", action: "5", state: false },
        ],
      },
      {
        difficulty: "d",
        title: "Difícil",
        content: [
          { title: "Nivel 1", action: "1", state: true },
          { title: "Nivel 2", action: "2", state: false },
          { title: "Nivel 3", action: "3", state: false },
          { title: "Nivel 4", action: "4", state: false },
          { title: "Nivel 5", action: "5", state: false },
        ],
      },
    ],
  },
  getters: {
    getModalDifficulty: (state) => state.modalDifficulty,
    getDifficulty: (state) => state.difficulty,
    getPlay: (state) => state.play,
    getLevel: (state) => state.level,
    getGameCards: (state) => state.gameCards,
    getLevels: (state) => state.levels,
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
    showCard({ commit }, pos) {
      commit("SHOW_CARD", pos);
    },
    nextLevel({ commit }) {
      commit("NEXT_LEVEL");
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
          arr.push({
            id: i,
            state: false,
          });
        }
        for (let i = 1; i < count + 1; i++) {
          arr.push({
            id: i,
            state: false,
          });
        }
        cards = [...arr];
        return cards.sort(() => Math.random() - 0.5);
      }
      if (state.difficulty === "f") {
        state.gameCards = createdGameCards(state.level + 1);
      }
      if (state.difficulty === "i") {
        state.gameCards = createdGameCards((state.level + 1) * 2);
      }
      if (state.difficulty === "d") {
        state.gameCards = createdGameCards((state.level + 1) * 2 + 4);
      }
    },
    SHOW_CARD(state, pos) {
      state.gameCards[pos].state = !state.gameCards[pos].state;
    },
    NEXT_LEVEL(state) {
      if (
        state.levels
          .find((i) => i.difficulty === "f")
          .content.some((i) => i.state === false)
      ) {
        state.levels
          .find((i) => i.difficulty === state.difficulty)
          .content.find((i) => i.state === false).state = true;
      }
    },
  },
});
