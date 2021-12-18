<template>
  <div class="play">
    <timeoutBar :tick="tick" />
    <header-play />
    <container-play />
    {{ duration }}
    <button @click="duration += 5">+</button>
  </div>
</template>

<script>
import headerPlay from "./global/headerPlay.vue";
import containerPlay from "./global/containerPlay.vue";
import timeoutBar from "./global/timeoutBar.vue";
export default {
  name: "play",
  components: { headerPlay, containerPlay, timeoutBar },
  data() {
    return {
      title: "FabMemory",
      delay: "",
      duration: 30,
      tick: 0,
      waitTime: 6,
    };
  },
  watch: {
    tick() {
      if (this.duration > 0) {
        this.duration -= 1;
      }
      if (this.waitTime > 0) {
        this.waitTime -= 1;
      }
    },
    waitTime(value) {
      if (value === 0) {
        this.$store.state.gameCards.map((_, i) =>
          this.$store.dispatch("showCard", i)
        );
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.tick = Math.round(new Date().getTime() / 1000);
    }, 1000);
  },
};
</script>

<style scoped>
.play {
  display: grid;
  grid-template-rows: 80px 1fr;
  width: 650px;
  height: 80vh;
  gap: 20px;
  box-sizing: border-box;
}
@media (max-width: 750px) {
  .play {
    width: 90vw;
    height: 90vh;
  }
}
</style>