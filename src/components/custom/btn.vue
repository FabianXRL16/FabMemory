<template>
  <button class="btn" :style="styleBtn" @click="action">
    {{ content.title }}
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "btn",
  components: {},
  props: {
    content: {
      type: Object,
      default: () => {},
    },
    styleBtn: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    action() {
      this.$emit("actionBtn", this.content.difficulty);
    },
  },
};
</script>

<style scoped>
.btn {
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
  min-width: 50px;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn:hover {
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.8) -3px -3px 6px 1px inset;
  transition: ease-in;
}
</style>