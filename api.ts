import axios from "axios";
import cache from "./cache-products.json";

const credentials = {
  username: "EyeCatcher",
  password: "7kv4y77a2g",
};

const Http = axios.create({
  baseURL: "https://app.flamant.com:8004/PIM/Ecommerce",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization:
      "Basic " +
      Buffer.from(credentials.username + ":" + credentials.password).toString(
        "base64"
      ),
  },
});

export const getCategoriesAndCategoryStructure = () =>
  Promise.all<any, any>([
    Http.get("/CategoryStructure"),
    Http.get("/Categories"),
  ])
    .then(([categoryStructureResponse, categoriesResponse]) => {
      console.log("getCategoriesAndCategoryStructure");
      return [categoryStructureResponse.data, categoriesResponse.data];
    })
    .catch((response) => {
      console.log("getCategoriesAndCategoryStructure::error", response.message);
      throw response;
    });

let cachedProducts = cache;
export const getProducts = () => {
  console.log("getProducts");
  if (cachedProducts) {
    console.log("getProducts::cached");
    return Promise.resolve(cachedProducts);
  }

  return Http.get("/Products")
    .then((productsResponse) => {
      cachedProducts = productsResponse.data;
      console.log("getProducts::success");
      return cachedProducts;
    })
    .catch((response) => {
      console.log("getProducts::error", response.message);
      return [];
    });
};
