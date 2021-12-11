<template>
  <div class="levels">
    <div class="containerLevel">
      <button class="btnLevel btn" v-for="(level, i) of levels" :key="i">
        {{ level.title }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "levels",
  components: {},
  data() {
    return {
      levels: [
        { title: "Fácil" },
        { title: "Intermedio" },
        { title: "Difícil" },
      ],
    };
  },
};
</script>

<style scoped>
.levels {
  width: 60vw;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
}
.containerLevel {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.btn {
  outline: none;
  cursor: pointer;
  border: none;
  background: transparent;
}
.btnLevel {
  min-width: 200px;
  height: 100px;
  box-shadow: rgba(204, 219, 232) 8px 8px 20px,
    rgba(255, 255, 255, 0.8) -8px -8px 20px;
  border-radius: 10px;
  color: var(--bg-secondary);
  font-size: 25px;
  transition: ease-in;
}
.btnLevel:hover {
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.8) -3px -3px 6px 1px inset;
  transition: ease-in;
}
@media (max-width: 480px) {
  .levels {
    width: 90vw;
  }
}
</style>