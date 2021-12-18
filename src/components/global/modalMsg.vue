<template>
  <div class="modalMsg" v-if="$store.state.modalMsg">
    <div
      class="container"
      :style="
        $store.state.textMsg
          ? 'color: var(--bg-happy);'
          : 'color: var(--bg-sad);'
      "
    >
      <template v-if="$store.state.textMsg">
        <span class="msg">Felicidades!</span>
        <i class="far fa-laugh-wink"></i>
      </template>
      <template v-else>
        <span class="msg">Lo lamento</span>
        <i class="far fa-frown-open"></i>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalMsg",
  data() {
    return {};
  },
};
</script>

<style scoped>
.modalMsg {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(4px);
  display: grid;
  place-content: center;
}
.modalMsg .container {
  width: 200px;
  height: 200px;
  background-color: var(--bg-primary);
  border-radius: 10px;
  box-shadow: rgba(204, 219, 232) 8px 8px 20px,
    rgba(255, 255, 255, 0.8) -8px -8px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.modalMsg .container .msg {
  font-size: 20px;
}
i {
  font-size: 70px;
}
</style>
