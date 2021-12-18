<template>
  <div id="app">
    <home v-if="!$store.state.play" />
    <modal-level v-if="$store.state.modalDifficulty" />
    <play v-if="$store.state.play" />
    <modal-msg />
  </div>
</template>

<script>
import home from "./components/home.vue";
import modalLevel from "./components/global/modalLevel.vue";
import play from "./components/play.vue";
import modalMsg from "./components/global/modalMsg.vue";
export default {
  name: "App",
  components: {
    home,
    modalLevel,
    play,
    modalMsg,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap");
:root {
  --bg-primary: #e9edf0;
  --bg-secondary: #acbcd1;
  --bg-secondary-disabled: #c5d1e1;
  --bg-happy: #3ca4f3;
  --bg-sad: #3ca4f3;
  --white: #fcfafa;
  --black: #303030;
}
body {
  font-family: "Nunito", sans-serif;
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
@keyframes barsAnimation {
  100% {
    transform: scaleX(0);
  }
}
</style>
