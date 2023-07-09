import axios from "./axios";
export const getAllCartItems = () => axios.get("/carts");
export const addItemToCart = (input) => axios.post("/carts", input);
export const deleteItemFromCart = (id) => axios.delete(`/carts/${id}`);
export const editItemInCart = (id, input) => axios.patch(`/carts/${id}`, input);
