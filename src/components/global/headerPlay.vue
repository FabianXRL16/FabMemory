<template>
  <div class="headerPlay">
    <btn :content="{}" @actionBtn="actionBtn">
      <template>
        <i class="fas fa-angle-left"></i>
      </template>
    </btn>
    <div class="titleLevel">
      <span class="level">Facil</span>
      <h2>Nivel 2</h2>
    </div>
    <div class="time">
      <label>30s</label>
    </div>
  </div>
</template>

<script>
import btn from "../custom/btn.vue";
export default {
  name: "headerPlay",
  components: { btn },
  data() {
    return {
      title: "FabMemory",
    };
  },
  methods: {
    actionBtn() {
      this.$store.dispatch("showModalLevel");
      this.$store.dispatch("showPlay");
    },
  },
};
</script>

<style scoped>
.headerPlay {
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  place-content: center;
  width: 100%;
  height: 100%;
}
i {
  font-size: 30px;
}
.titleLevel {
  display: flex;
  flex-direction: column;
  color: var(--bg-secondary);
  justify-content: center;
  gap: 5px;
}
span {
  font-size: 14px;
  line-height: 14px;
}
h2 {
  margin: 0;
  font-size: 24px;
  line-height: 24px;
}
.time {
  display: grid;
  place-content: center;
}
label {
  font-size: 30px;
  color: var(--bg-secondary);
  font-weight: 800;
}
@media (max-width: 750px) {
  .headerPlay {
    gap: 60px;
  }
}
</style>