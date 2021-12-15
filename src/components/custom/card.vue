<template>
  <button class="card" :class="styleCard" @click="action">
    <img
      v-if="item.state"
      class="stamp"
      :src="require(`../../assets/imgGameCards/img${item.id}.png`)"
      alt=""
    />
    <img v-else class="stamp" src="../../assets/logo.svg" alt="" />
  </button>
</template>

<script>
export default {
  name: "card",
  components: {},
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    styleCard: {
      type: String,
      default: "",
    },
    i: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  methods: {
    action() {
      this.item.state ? "" : this.$emit("showCard", this.i);
    },
  },
};
</script>

<style scoped>
.card {
  outline: none;
  cursor: pointer;
  border: none;
  background: transparent;
  box-shadow: rgba(204, 219, 232) 8px 8px 20px,
    rgba(255, 255, 255, 0.8) -8px -8px 20px;
  border-radius: 10px;
  color: var(--bg-secondary);
  font-size: 25px;
  transition: ease-in;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card:hover {
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.8) -3px -3px 6px 1px inset;
  transition: ease-in;
}
.stamp {
  width: 80%;
  opacity: 0.6;
  transform: scale(1);
  transition: ease-in;
}
.card:hover .stamp {
  opacity: 1;
  transition: ease-in;
}
</style>