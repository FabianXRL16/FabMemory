<template>
  <div class="play">
    <timeoutBar />
    <header-play @clear="clearTime" />
    <container-play />
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
      time: "",
    };
  },
  created() {
    let that = this;
    this.time = setTimeout(() => {
      that.$store.state.gameCards.map((_, i) =>
        that.$store.dispatch("showCard", i)
      );
    }, 5000);
  },
  methods: {
    clearTime() {
      clearInterval(this.time);
    },
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