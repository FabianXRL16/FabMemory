<template>
  <div class="home">
    <logo />
    <levels />
  </div>
</template>

<script>
import logo from "./global/logo.vue";
import levels from "./global/levels.vue";
export default {
  name: "home",
  components: {
    logo,
    levels,
  },
  data() {
    return {
      title: "FabMemory",
    };
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
@media (max-width: 480px) {
  .home {
    gap: 60px;
  }
}
</style>