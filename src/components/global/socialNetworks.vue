<template>
  <div class="socialNetworks">
    <span>By</span>
    <div class="containerSN">
      <a
        v-for="(sn, i) in arrSN"
        :key="i"
        :href="sn.href"
        target="_blank"
        :style="`color: ${sn.color}`"
      >
        <i :class="sn.icon"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "socialNetworks",
  components: {},
  data() {
    return {
      arrSN: [
        {
          icon: "fab fa-instagram",
          href: "https://www.instagram.com/fabian.xrl16/",
          color: "#f04c5b",
        },
        {
          icon: "fab fa-github",
          href: "https://github.com/FabianXRL16",
          color: "#171515",
        },
        {
          icon: "fab fa-twitter",
          href: "https://twitter.com/_fxrl16",
          color: "#00aced",
        },
      ],
    };
  },
};
</script>

<style scoped>
.socialNetworks {
  display: flex;
  flex-direction: column;
  color: var(--bg-secondary);
  gap: 10px;
}
.containerSN {
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 10px;
}
a {
  width: 50px;
  height: 50px;
  text-decoration: none;
  background: var(--bg-primary);
  border-radius: 10px;
  box-shadow: rgba(204, 219, 232) 8px 8px 20px,
    rgba(255, 255, 255, 0.8) -8px -8px 20px;
  display: grid;
  place-content: center;
  font-size: 20px;
}
a:hover {
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.8) -3px -3px 6px 1px inset;
  transition: ease-in;
}
span {
  font-size: 14px;
}
@media (max-width: 750px) {
  a {
    width: 40px;
    height: 40px;
  }
}
</style>