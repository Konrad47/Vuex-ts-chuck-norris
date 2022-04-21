import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "https://api.chucknorris.io/jokes";

export default new Vuex.Store({
  state: {
    categories: [],
  },
  getters: {
    getCategories: (state) => state.categories,
  },
  mutations: {
    setCategories: (state, categories) => (state.categories = categories),
  },
  actions: {
    async fetchCategories({ commit }) {
      const response = await axios.get(`${url}/categories`);
      commit("setCategories", response.data);
    },
  },
});
