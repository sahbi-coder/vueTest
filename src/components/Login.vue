<template>
  <form>
    <label>Email : </label>
    <input type="text" placeholder="email" v-model="form.email" />
    <br />
    <br />
    <label>Password : </label>
    <input type="text" placeholder="password" v-model="form.password" />
    <br />
    <br />
    <button type="button" @click="login">Login</button>
  </form>
</template>

<script>
import mutations from "../store/mutation_types";
export default {
  name: "app-form",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch(mutations.LOGIN, this.form);
    },
  },
};
</script>

<style>
</style>