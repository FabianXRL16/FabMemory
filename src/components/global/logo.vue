<template>
  <div class="logo">
    <img
      src="https://site.innovasport.com/ux/iv-slide-marcas/-logo-adidas.png"
      alt="logo de FabMemory"
    />
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "logo",
  components: {},
  data() {
    return {
      title: "FabMemory",
    };
  },
};
</script>

<style scoped>
.logo {
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
}
img {
  width: auto;
  height: 100px;
}
h1 {
  font-size: 50px;
}
@media (max-width: 480px) {
  .logo {
    width: 90vw;
  }
  h1 {
    font-size: 20px;
  }
}
</style>