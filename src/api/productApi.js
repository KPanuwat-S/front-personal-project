import axios from "./axios";

export const getAllProductModel = () => axios.get("/products");
export const getAllProductDetails = (productModelId) =>
  axios.get(`/products/${productModelId}`);
export const getGenderedProduct = (genderId) =>
  axios.get(`/products/gender/${genderId}`);
export const getGenderedProductQuery = (genderId, query) =>
  axios.get(`/products/gender/${genderId}`, { params: query });

