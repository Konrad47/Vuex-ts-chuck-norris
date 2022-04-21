import { IJoke } from "@/model/joke.model";
import axios from "axios";

const url = "https://api.chucknorris.io/jokes";

export default class CategoryJokeService {
  public fetch(category: string): Promise<IJoke> {
    return new Promise<IJoke>((resolve, reject) => {
      axios
        .get(`${url}/random?category=${category}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
