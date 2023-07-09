const createColor = (colorId) => {
  const color = {
    1: "black",
    2: "white",
    3: "gray",
    4: "blue",
    5: "brown",
    6: "#EF4444",
  };
  return color[colorId];
};
export default createColor;
