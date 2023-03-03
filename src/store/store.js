import { createStore } from "vuex";
import axios from "axios";
import router from "@/router/router";
import mutations from "./mutation_types";
const store = createStore({
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    login(state, user) {
      state.user = user;
    },

    logout(state) {
      state.user = null;
    },
  },
  actions: {
    async login({ commit }, form) {
      try {
        const res = await axios.post(process.env.VUE_APP_URL, form);
        commit(mutations.LOGIN, res.data);
        router.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
    logout({ commit }) {
      commit(mutations.LOGOUT);
      router.push("/");
    },
  },
  getters: {
    isAuth(state) {
      return state.user ? true : false;
    },
  },
});

export default store;
