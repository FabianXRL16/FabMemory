<template>
  <div class="levels">
    <div class="containerLevel">
      <btn
        v-for="(level, i) of $store.state.levels"
        :key="i"
        :content="level"
        :styleBtn="style"
        :star="true"
        @actionBtn="actionBtn"
      >
      </btn>
    </div>
  </div>
</template>

<script>
import btn from "../custom/btn.vue";
export default {
  name: "levels",
  components: { btn },
  data() {
    return {
      style: `min-width: 200px; height: 100px;`,
    };
  },
  methods: {
    actionBtn(e) {
      this.$store.dispatch("showModalDifficulty");
      this.$store.dispatch("showDifficulty", e);
    },
  },
};
</script>

<style scoped>
.levels {
  width: 60vw;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
}
.containerLevel {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
@media (max-width: 750px) {
  .levels {
    width: 90vw;
  }
}
</style>