const ACCESS_TOEKN = "accessToken";
export const setAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOEKN, token);

export const getAccessToken = () => localStorage.getItem(ACCESS_TOEKN);

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOEKN);

export const setCartItems = (items) =>
  localStorage.setItem("cartItems", JSON.stringify(items));

export const setLikedItems = (items) =>
  localStorage.setItem("likedItems", JSON.stringify(items));

export const getCartItems = () =>
  JSON.parse(localStorage.getItem("cartItems")) || [];

export const getLikedItems = () =>
  JSON.parse(localStorage.getItem("likedItems")) || [];

export const removeCartItems = () => {
  localStorage.removeItem("cartItems");
};

export const setProductDetails = (items) => {
  localStorage.setItem("detailsProduct", JSON.stringify(items));
};
export const getProductDetails = (items) => {
  localStorage.setItem("detailsProduct", JSON.stringify(items));
};
