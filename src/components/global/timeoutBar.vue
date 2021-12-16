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
  data() {
    return {
      time: "",
      duration: 0,
    };
  },
  created() {
    let that = this;
    this.time = setInterval(() => {
      if (that.duration === 5) {
        that.$refs.barTime.style.transform = "scaleX(0)";
        that.$refs.barTime.style.transition = ".5s";
        clearInterval(that.time);
      } else {
        that.duration++;
      }
    }, 1000);
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
  transition: linear;
}
@media (max-width: 750px) {
  .timeoutBar {
    width: 90vw;
    height: 10px;
    top: 20px;
  }
}
</style>