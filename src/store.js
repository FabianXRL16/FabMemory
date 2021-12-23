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
    levels: JSON.parse(localStorage.getItem("bdLocal")) || [
      {
        difficulty: "f",
        title: "Fácil",
        time: false,
        completedCount: 4,
        content: [
          {
            title: "Nivel 1",
            action: "1",
            maxGame: 4,
            state: true,
            completed: false,
          },
          {
            title: "Nivel 2",
            action: "2",
            maxGame: 6,
            state: false,
            completed: false,
          },
          {
            title: "Nivel 3",
            action: "3",
            maxGame: 8,
            state: false,
            completed: false,
          },
          {
            title: "Nivel 4",
            action: "4",
            maxGame: 10,
            state: false,
            completed: false,
          },
          {
            title: "Nivel 5",
            action: "5",
            maxGame: 12,
            state: false,
            completed: false,
          },
        ],
      },
      {
        difficulty: "i",
        title: "Intermedio",
        time: true,
        duration: 15,
        addTime: 5,
        completedCount: 0,
        content: [
          {
            title: "Nivel 1",
            action: "1",
            maxGame: 8,
            state: true,
            completed: false,
          },
          {
            title: "Nivel 2",
            action: "2",
            maxGame: 12,
            state: false,
            completed: false,
          },
          {
            title: "Nivel 3",
            action: "3",
            maxGame: 16,
            state: false,
            completed: false,
          },
          {
            title: "Nivel 4",
            action: "4",
            maxGame: 20,
            state: false,
            completed: false,
          },
          {
            title: "Nivel 5",
            action: "5",
            maxGame: 24,
            state: false,
            completed: false,
          },
        ],
      },
      {
        difficulty: "d",
        title: "Difícil",
        time: true,
        duration: 10,
        addTime: 3,
        completedCount: 0,
        content: [
          {
            title: "Nivel 1",
            action: "1",
            maxGame: 16,
            state: true,
            completed: false,
          },
          {
            title: "Nivel 2",
            action: "2",
            maxGame: 20,
            state: false,
            completed: false,
          },
          {
            title: "Nivel 3",
            action: "3",
            maxGame: 24,
            state: false,
            completed: false,
          },
          {
            title: "Nivel 4",
            action: "4",
            maxGame: 28,
            state: false,
            completed: false,
          },
          {
            title: "Nivel 5",
            action: "5",
            maxGame: 32,
            state: false,
            completed: false,
          },
        ],
      },
    ],
    disabled: false,
    numberOfPlays: 4,
    time: 0,
    modalMsg: false,
    textMsg: true,
  },
  getters: {
    getModalDifficulty: (state) => state.modalDifficulty,
    getDifficulty: (state) => state.difficulty,
    getPlay: (state) => state.play,
    getLevel: (state) => state.level,
    getGameCards: (state) => state.gameCards,
    getLevels: (state) => state.levels,
    getMaxMove: (state) => state.numberOfPlays,
    getDisabled: (state) => state.disabled,
    getTime: (state) => state.time,
    getModalMsg: (state) => state.modalMsg,
    getTextMsg: (state) => state.textMsg,
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
    nextLevel({ commit }, difficulty) {
      commit("NEXT_LEVEL", difficulty);
    },
    maxMove({ commit }) {
      commit("MAX_MOVE");
    },
    changeDisabled({ commit }) {
      commit("CHANGE_DISABLED");
    },
    disabledCardInMatch({ commit }, pos) {
      commit("CHANGE_STATE_IN_CARD_WITCH_MATCH", pos);
    },
    waitTime({ commit }, difficulty) {
      commit("WAIT_TIME", difficulty);
    },
    runTime({ commit }) {
      commit("RUN_TIME");
    },
    addTime({ commit }, increase) {
      commit("ADD_TIME", increase);
    },
    showWin({ commit }, result) {
      commit("SHOW_WIN", result);
    },
    sendLocalStorage({ commit }) {
      commit("SEND_LOCALSTORAGE");
    },
    levelCompleted({ commit }) {
      commit("LEVEL_COMPLETED");
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
            state: true,
          });
        }
        for (let i = 1; i < count + 1; i++) {
          arr.push({
            id: i,
            state: true,
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
    NEXT_LEVEL(state, difficulty) {
      if (
        state.levels
          .find((i) => i.difficulty === difficulty)
          .content.some((i) => i.state === false)
      ) {
        state.levels
          .find((i) => i.difficulty === state.difficulty)
          .content.find((i) => i.state === false).state = true;
      }
    },
    MAX_MOVE(state) {
      let pos = state.levels
        .find((i) => i.difficulty === state.difficulty)
        .content.findIndex((i) => i.state === false);
      if (pos >= 0) {
        state.numberOfPlays = state.levels.find(
          (i) => i.difficulty === state.difficulty
        ).content[pos - 1].maxGame;
      }
    },
    CHANGE_DISABLED(state) {
      state.disabled = !state.disabled;
    },
    CHANGE_STATE_IN_CARD_WITCH_MATCH(state, pos) {
      state.gameCards[pos[0]].state = true;
      state.gameCards[pos[1]].state = true;
    },
    WAIT_TIME(state, difficulty) {
      let level = state.levels.find((i) => i.difficulty === difficulty);
      if (level.time) state.time = level.duration;
    },
    RUN_TIME(state) {
      state.time -= 1;
    },
    ADD_TIME(state, increase) {
      state.time += increase;
    },
    SHOW_WIN(state, result) {
      if (result) {
        state.textMsg = true;
      } else {
        state.textMsg = false;
      }
      state.modalMsg = true;
      setTimeout(() => {
        state.modalMsg = false;
      }, 2500);
    },
    SEND_LOCALSTORAGE(state) {
      localStorage.setItem("bdLocal", JSON.stringify(state.levels));
    },
    INITIALISE_STORE(state) {
      if (localStorage.getItem("bdLocal")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("bdLocal")))
        );
      }
    },
    LEVEL_COMPLETED(state) {
      let arr = state.levels.find((i) => i.difficulty === state.difficulty);
      arr.content[state.level - 1].completed = true;
      if (state.level === 5) {
        arr.completedCount += 1;
        if (arr.completedCount < 6) {
          arr.content.map((_, i) => {
            if (i === 0) arr.content[i].state = true;
            else arr.content[i].state = false;
            arr.content[i].completed = false;
          });
        }
      } else {
        localStorage.setItem("bdLocal", JSON.stringify(state.levels));
      }
    },
  },
});
