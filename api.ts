import axios from "axios";
import { setupCache } from "axios-cache-adapter";

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 15 * 60000 * 1000,
  debug: false
});

const credentials = {
  username: "EyeCatcher",
  password: "7kv4y77a2g"
};

const Http = axios.create({
  baseURL: "https://app.flamant.com:8004/PIM/Ecommerce",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization:
      "Basic " +
      Buffer.from(credentials.username + ":" + credentials.password).toString(
        "base64"
      )
  },
  adapter: cache.adapter
});

export const getCategoriesAndCategoryStructure = () =>
  Promise.all<any, any>([
    Http.get("/CategoryStructure"),
    Http.get("/Categories")
  ]).then(([categoryStructureResponse, categoriesResponse]) => {
    return [categoryStructureResponse.data, categoriesResponse.data];
  });

export const getProducts = () =>
    Http.get("/Products").then((productsResponse) => {
      return productsResponse.data;
    });