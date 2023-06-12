import axios from "./axios";

export const getAllProductModel = () => axios.get("/products");
export const getAllProductDetails = (productModelId) =>
  axios.get(`/products/${productModelId}`);
