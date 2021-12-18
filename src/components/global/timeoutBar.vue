<template>
  <div class="timeoutBar" ref="barTime">
    <div class="containerBar">
      <div class="bar" :style="styles"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "timeoutBar",
  props: {
    tick: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    width() {
      return 20 * this.duration;
    },
    styles() {
      return {
        width: `${this.width}%`,
      };
    },
  },
  watch: {
    tick() {
      if (this.duration <= 5) {
        if (this.duration === 5) {
          this.$refs.barTime.style.animation = "barsAnimation 1s forwards";
        } else {
          this.duration += 1;
        }
      }
    },
  },
  data() {
    return {
      time: "",
      duration: 0,
    };
  },
};
</script>

<style scoped>
.timeoutBar {
  position: absolute;
  transform: scaleX(1);
  top: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 650px;
  height: 20px;
  border-radius: 10px;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.8) -3px -3px 6px 1px inset;
}
.timeoutBar .containerBar {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: relative;
}
.timeoutBar .containerBar .bar {
  height: 100%;
  border-radius: 10px;
  background-color: var(--bg-secondary-disabled);
  z-index: 1;
  position: absolute;
  transition: width 0.5s;
}
@media (max-width: 750px) {
  .timeoutBar {
    width: 90vw;
    height: 10px;
    top: 20px;
  }
}
</style>