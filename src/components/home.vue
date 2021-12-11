<template>
  <div class="home">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      title: "FabMusic",
    };
  },
};
</script>

<style scoped>
.home {
  background: red;
}
</style>