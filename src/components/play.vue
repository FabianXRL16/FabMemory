<template>
  <div class="play">
    <header-play />
    <div class="containerPlay">a</div>
  </div>
</template>

<script>
import headerPlay from "./global/headerPlay.vue";
export default {
  name: "play",
  components: { headerPlay },
  data() {
    return {
      title: "FabMemory",
    };
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