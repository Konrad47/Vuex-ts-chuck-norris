import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Categories extends Vue {
  get getCategories() {
    return this.$store.getters.getCategories;
  }
  created() {
    this.$store.dispatch("fetchCategories");
  }
}
