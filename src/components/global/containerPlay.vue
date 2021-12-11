<template>
  <div class="containerPlay" :style="style">
    <card v-for="(item, i) of $store.state.gameCards" :key="i"></card>
  </div>
</template>

<script>
import card from "../custom/card.vue";
export default {
  name: "containerPlay",
  components: { card },
  data() {
    return {
      title: "FabMemory",
    };
  },
  computed: {
    style() {
      let dif = this.columsF;
      if (this.$store.state.difficulty === "i") dif = this.columsI;
      if (this.$store.state.difficulty === "d") dif = this.columsD;
      return `grid-template-columns: repeat(${dif[0]}, ${dif[1]});
    grid-auto-rows: ${dif[1]};`;
    },
    columsF() {
      let cols = 2;
      let px = "124px";
      if (this.$store.state.level === 3 && screen.width > 570) {
        cols = 2;
        px = "115px";
      }
      if (this.$store.state.level === 3 && screen.width < 570) {
        cols = 2;
        px = "115px";
      }
      if (this.$store.state.level === 4 && screen.width > 570) {
        cols = 2;
        px = "95px";
      }
      if (this.$store.state.level === 4 && screen.width < 570) {
        cols = 2;
        px = "100px";
      }
      if (this.$store.state.level === 5 && screen.width > 570) {
        cols = 3;
        px = "110px";
      }
      if (this.$store.state.level === 5 && screen.width < 570) {
        cols = 3;
        px = "100px";
      }
      return [cols, px];
    },
    columsI() {
      let cols = 2;
      let px = "124px";
      if (screen.width > 570) {
        if (this.$store.state.level === 1) {
          cols = 4;
          px = "140px";
        }
        if (this.$store.state.level === 2) {
          cols = 4;
          px = "120px";
        }
        if (this.$store.state.level === 3) {
          cols = 4;
          px = "110px";
        }
        if (this.$store.state.level === 4) {
          cols = 5;
          px = "100px";
        }
        if (this.$store.state.level === 5) {
          cols = 6;
          px = "90px";
        }
      } else {
        if (this.$store.state.level === 1) {
          cols = 2;
          px = "95px";
        }
        if (this.$store.state.level === 2) {
          cols = 3;
          px = "80px";
        }
        if (this.$store.state.level === 3) {
          cols = 4;
          px = "70px";
        }
        if (this.$store.state.level === 4) {
          cols = 4;
          px = "70px";
        }
        if (this.$store.state.level === 5) {
          cols = 4;
          px = "65px";
        }
      }
      return [cols, px];
    },
    columsD() {
      let cols = 2;
      let px = "124px";
      if (screen.width > 570) {
        if (this.$store.state.level === 1) {
          cols = 4;
          px = "110px";
        }
        if (this.$store.state.level === 2) {
          cols = 5;
          px = "100px";
        }
        if (this.$store.state.level === 3) {
          cols = 6;
          px = "90px";
        }
        if (this.$store.state.level === 4) {
          cols = 7;
          px = "80px";
        }
        if (this.$store.state.level === 5) {
          cols = 8;
          px = "70px";
        }
      } else {
        if (this.$store.state.level === 1) {
          cols = 4;
          px = "65px";
        }
        if (this.$store.state.level === 2) {
          cols = 4;
          px = "70px";
        }
        if (this.$store.state.level === 3) {
          cols = 4;
          px = "70px";
        }
        if (this.$store.state.level === 4) {
          cols = 4;
          px = "70px";
        }
        if (this.$store.state.level === 5) {
          cols = 4;
          px = "55px";
        }
      }
      return [cols, px];
    },
  },
};
</script>

<style scoped>
.containerPlay {
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  place-items: center;
  gap: 10px;
}
</style>