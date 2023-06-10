const ACCESS_TOEKN = "accessToken";
export const setAccessToken = (token) => {
  localStorage.setItem(ACCESS_TOEKN, token);
};

export const getAccessToken = () => {
  localStorage.getItem(ACCESS_TOEKN);
};

export const removeAccessToken = () => {
  localStorage.removeItem(ACCESS_TOEKN);
};
