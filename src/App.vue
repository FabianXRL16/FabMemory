<template>
  <div id="app">
    <home v-if="!$store.state.play" />
    <modal-level v-if="$store.state.modalLevel" />
    <play v-if="$store.state.play" />
  </div>
</template>

<script>
import home from "./components/home.vue";
import modalLevel from "./components/global/modalLevel.vue";
import play from "./components/play.vue";
export default {
  name: "App",
  components: {
    home,
    modalLevel,
    play,
  },
};
</script>

<style>
:root {
  --bg-primary: #e9edf0;
  --bg-secondary: #acbcd1;
  --bg-secondary-disabled: #c5d1e1;
  --white: #fcfafa;
  --black: #303030;
}
body {
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background: var(--bg-primary);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  position: relative;
}
</style>
