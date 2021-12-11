<template>
  <div class="modalLevel">
    <h1>hola</h1>
  </div>
</template>

<script>
export default {
  name: "modalLevel",
  components: {},
  data() {
    return {
      title: "Hola",
    };
  },
};
</script>

<style scoped>
.modalLevel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 200px;
  height: 200px;
  background: red;
}
@media (max-width: 480px) {
}
</style>