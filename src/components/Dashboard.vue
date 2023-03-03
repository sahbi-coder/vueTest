<template>
  <h1>
    Welcome {{ this.$store.state.user.userName }}
    <a type="button" @click="logout">logout</a>
  </h1>
</template>

<script>
import mutations from "../store/mutation_types";
export default {
  name: "app-dashboard",
  methods: {
     logout() {
      this.$store.dispatch(mutations.LOGOUT);
      localStorage.removeItem('user')
    },
  },
};
</script>

<style>
</style>