const createSizes = (sizeId) => {
  const size = { 1: "S", 2: "M", 3: "L", 4: "XL", 5: "XXL" };
  return size[sizeId];
};
export default createSizes;
