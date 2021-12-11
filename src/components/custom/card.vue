<template>
  <button class="card" :class="styleCard" @click="action">aaa</button>
</template>

<script>
export default {
  name: "card",
  components: {},
  props: {
    content: {
      type: Object,
      default: () => {},
    },
    styleCard: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    action() {
      this.$emit("actionBtn", this.content.action);
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
}
.card:hover {
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.8) -3px -3px 6px 1px inset;
  transition: ease-in;
}
</style>