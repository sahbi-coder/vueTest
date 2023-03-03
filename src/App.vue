<template>
  <router-view></router-view>
</template>

<script>
import mutaions from './store/mutation_types';

export default {
  name: "App",
  components: {},
  mounted() {
    const userJson = localStorage.getItem("user");
    if (userJson) {
      return this.$store.commit(mutaions.LOGIN, JSON.parse(userJson));
    }

    this.unwatch = this.$store.watch(
      (state) => state.user,
      (newValue) => {
        localStorage.setItem("user", JSON.stringify(newValue));
      }
    );
  },
  unmounted() {
    this.unwatch();
  },
};
</script>

<style>
</style>
