<template>
  <div class="headerPlay">
    <btn :content="{}" @actionBtn="actionBtn">
      <template>
        <i class="fas fa-angle-left"></i>
      </template>
    </btn>
    <div class="titleLevel">
      <span class="level">{{ difficulty }}</span>
      <h2>Nivel {{ $store.state.level }}</h2>
    </div>
    <div class="time">
      <label v-if="timeText">{{ time }}</label>
    </div>
  </div>
</template>

<script>
import btn from "../custom/btn.vue";
export default {
  name: "headerPlay",
  components: { btn },
  data() {
    return {
      title: "FabMemory",
    };
  },
  computed: {
    difficulty() {
      let difficulty = this.$store.state.difficulty;
      let text = "";
      if (difficulty === "f") text = "Fácil";
      if (difficulty === "i") text = "Intermedio";
      if (difficulty === "d") text = "Difícil";
      return text;
    },
    timeText() {
      return (
        this.$store.state.difficulty === "i" ||
        this.$store.state.difficulty === "d"
      );
    },
    time() {
      if (
        this.$store.state.difficulty === "i" ||
        this.$store.state.difficulty === "d"
      ) {
        return this.$store.state.time;
      } else {
        return "";
      }
    },
  },
  watch: {
    time() {
      if (this.time === 0) {
        this.$store.dispatch("showWin", false);
        let that = this;
        setTimeout(() => {
          that.$store.dispatch("showModalDifficulty");
          that.$store.dispatch("showPlay");
        }, 2500);
      }
    },
  },
  methods: {
    actionBtn() {
      this.$store.dispatch("showModalDifficulty");
      this.$store.dispatch("showPlay");
    },
  },
};
</script>

<style scoped>
.headerPlay {
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  place-content: center;
  width: 100%;
  height: 100%;
}
i {
  font-size: 30px;
}
.titleLevel {
  display: flex;
  flex-direction: column;
  color: var(--bg-secondary);
  justify-content: center;
  gap: 5px;
}
span {
  font-size: 14px;
  line-height: 14px;
}
h2 {
  margin: 0;
  font-size: 24px;
  line-height: 24px;
}
.time {
  display: grid;
  place-content: center;
}
label {
  font-size: 30px;
  color: var(--bg-secondary);
  font-weight: 800;
}
@media (max-width: 750px) {
  .headerPlay {
    gap: 60px;
  }
}
</style>