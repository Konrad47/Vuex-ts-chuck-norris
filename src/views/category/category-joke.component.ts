import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class CategoryJoke extends Vue {
  @Prop({ default: "category" })
  category!: string;
}
