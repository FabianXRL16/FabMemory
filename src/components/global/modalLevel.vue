<template>
  <div
    class="modalLevel"
    :class="
      $store.state.modalDifficulty ? 'animationOpenModel' : 'animationOffModel'
    "
  >
    <div class="title">
      <h1>{{ level.title }}</h1>
    </div>
    <div class="containerLevels">
      <btn
        v-for="(level, i) of level.content"
        :class="level.state ? '' : 'disabled'"
        :disabled="!level.state"
        @actionBtn="selectLevel(i + 1)"
        :key="i"
        :content="level"
        :i="i"
        :styleBtn="styleLevels"
        :levelsComponent="true"
      />
    </div>
    <div class="actions">
      <btn
        :content="{ title: 'Salir' }"
        :styleBtn="style"
        @actionBtn="closed"
      />
    </div>
  </div>
</template>

<script>
import btn from "../custom/btn.vue";
export default {
  name: "modalLevel",
  components: { btn },
  data() {
    return {
      style: `width: 150px; height: 50px;`,
      styleLevels: `width: 100%; height: 100%;`,
    };
  },
  computed: {
    level() {
      let arr = [];
      if (this.$store.state.difficulty === "f") {
        arr = this.$store.state.levels.find((i) => i.difficulty === "f");
      }
      if (this.$store.state.difficulty === "i") {
        arr = this.$store.state.levels.find((i) => i.difficulty === "i");
      }
      if (this.$store.state.difficulty === "d") {
        arr = this.$store.state.levels.find((i) => i.difficulty === "d");
      }
      return arr;
    },
  },
  methods: {
    closed() {
      this.$store.dispatch("showModalDifficulty");
    },
    selectLevel(i) {
      this.$store.dispatch("showModalDifficulty");
      this.$store.dispatch("showPlay");
      this.$store.dispatch("showLevel", i);
      this.$store.dispatch("showGameCards");
      this.$store.dispatch("waitTime", this.$store.state.difficulty);
    },
  },
};
</script>

<style scoped>
.modalLevel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 650px;
  height: 500px;
  background: var(--bg-primary);
  border-radius: 10px;
  box-shadow: rgba(204, 219, 232) 8px 8px 20px,
    rgba(255, 255, 255, 0.8) -8px -8px 20px;
  padding: 20px 40px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 90px 1fr 70px;
  color: var(--bg-secondary);
}
.animationOpenModel {
  animation: showModal ease-in 0s;
}
@keyframes showModal {
  to {
    transform: scale(1);
  }
  from {
    transform: scale(0);
  }
}
.animationOffModel {
  animation: hideModal 0s ease-in 2s;
}
@keyframes hideModal {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
.title {
  display: grid;
  place-content: center;
  position: relative;
}
h1 {
  margin: 0 0 10px 0;
}
.containerLevels {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  place-content: center;
}
.actions {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.disabled {
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.8) -3px -3px 6px 1px inset;
  transition: ease-in;
  color: var(--bg-secondary-disabled);
  opacity: 0.6;
}
@media (max-width: 750px) {
  .modalLevel {
    width: 100vw;
    height: 100vh;
    padding: 40px;
    box-shadow: none;
  }
  .containerLevels {
    grid-template-rows: repeat(5, 1fr);
  }
}
</style>