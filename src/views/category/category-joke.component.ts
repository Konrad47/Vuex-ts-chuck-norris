import { IJoke } from "@/model/joke.model";
import Vue from "vue";
import Component from "vue-class-component";
import { Inject, Prop, Ref } from "vue-property-decorator";
import CategoryJokeService from "./category-joke.service";

@Component
export default class CategoryJoke extends Vue {
  @Prop({ default: "category" })
  category!: string;

  @Inject("categoryJokeService")
  private categoryJokeService!: () => CategoryJokeService;

  public randomJoke: IJoke = {
    value: "",
  };
  @Ref("my-modal") myModal: any;

  public getCategoryRandomJoke() {
    this.categoryJokeService()
      .fetch(this.category)
      .then(
        (res) => {
          this.randomJoke = res;
          console.log(res);
          this.myModal.show();
        },
        (err) => {
          console.log(err);
        }
      );
  }
  hideModal() {
    this.myModal.hide();
  }
}
