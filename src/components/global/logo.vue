<template>
  <div class="logo">
    <img src="../../assets/logo.svg" alt="logo de FabMemory" />
    <h1>Fab<span>Memory</span></h1>
  </div>
</template>

<script>
export default {
  name: "logo",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.logo {
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--bg-secondary);
  gap: 10px;
}
img {
  width: auto;
  height: 80px;
}
h1 {
  font-size: 60px;
  font-weight: 700;
}
span {
  font-weight: 300;
  color: var(---bg-secondary-disabled);
}
@media (max-width: 750px) {
  .logo {
    width: 90vw;
    flex-direction: column;
    gap: 20px;
  }
  img {
    height: 75px;
  }
  h1 {
    margin: 0;
    font-size: 50px;
    line-height: 50px;
  }
}
</style>