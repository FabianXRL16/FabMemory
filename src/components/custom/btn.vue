<template>
  <button
    class="btn"
    :class="content.completedCount >= 6 ? 'btnPro' : ''"
    :style="styleBtn"
    @click="action"
  >
    {{ content.title }}
    <slot></slot>
    <div
      v-if="star"
      class="completed"
      :class="content.completedCount >= 4 ? 'pro' : ''"
    >
      <i
        v-for="(n, i) in 3"
        :key="n"
        class="fas fa-star"
        :style="`color: ${colorStar[i]}`"
      ></i>
    </div>
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
    star: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    colorStar() {
      let count = this.content.completedCount;
      if (count === 1) return ["#34b7eb", "#acbcd1", "#acbcd1"];
      if (count === 2) return ["#34b7eb", "#34b7eb", "#acbcd1"];
      if (count === 3) return ["#34b7eb", "#34b7eb", "#34b7eb"];
      if (count === 4) return ["#ebbd34", "#34b7eb", "#34b7eb"];
      if (count === 5) return ["#ebbd34", "#ebbd34", "#34b7eb"];
      if (count >= 6) return ["#ebbd34", "#ebbd34", "#ebbd34"];
      else return ["#acbcd1", "#acbcd1", "#acbcd1"];
    },
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
  overflow: hidden;
}
.btnPro {
  color: #ebbd34;
 font-size: 28px;
}
.btn:hover {
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.8) -3px -3px 6px 1px inset;
  transition: ease-in;
}
.completed {
  display: flex;
  align-items: flex-end;
}
i {
  margin-top: 3px;
  font-size: 10px;
}
i:nth-child(2) {
  margin-top: -1px;
  font-size: 13px;
}
.pro {
  transform: scale(1.2);
  margin-top: 3px;
}
</style>