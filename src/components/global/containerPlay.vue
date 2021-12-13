<template>
  <div class="containerPlay" :style="style">
    <card
      v-for="(item, i) of $store.state.gameCards"
      :item="item"
      :i="i"
      :key="i"
      @showCard="game"
      :disabled="disabled"
    ></card>
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
      count: 0,
      pos: [],
      totalMatch: 0,
      disabled: false,
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
  methods: {
    game(newPos) {
      this.$store.dispatch("showCard", newPos);
      this.pos.push(newPos);
      this.count += 1;
      if (this.count === 2) {
        if (this.match()) {
          this.totalMatch += 1;
          this.endGame();
        } else {
          this.hiddenCard(this, this.pos);
        }
        this.newGame();
      }
    },
    newGame() {
      this.count = 0;
      this.pos = [];
    },
    match() {
      let cards = this.$store.state.gameCards;
      let pos = this.pos;
      return cards[pos[0]].id === cards[pos[1]].id;
    },
    hiddenCard(that, arr) {
      this.disabled = true;
      setTimeout(function () {
        arr.map((i) => that.$store.dispatch("showCard", i));
        that.disabled = false;
      }, 1000);
    },
    endGame() {
      this.disabled = false;
      let maxGame = this.$store.state.gameCards.length / 2;
      if (this.totalMatch === maxGame) {
        console.log("end game");
      }
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