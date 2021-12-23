<template>
  <div class="home">
    <logo />
    <levels />
    <socialNetworks />
  </div>
</template>

<script>
import logo from "./global/logo.vue";
import levels from "./global/levels.vue";
import socialNetworks from "./global/socialNetworks.vue";
export default {
  name: "home",
  components: {
    logo,
    levels,
    socialNetworks,
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
  gap: 30px;
}
@media (max-width: 750px) {
  .home {
    gap: 30px;
  }
}
</style>