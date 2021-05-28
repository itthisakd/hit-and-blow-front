const getColorsOnly = (color) => {
  return Object.keys(color).filter((key) => /^[A-Z]/.test(key));
};

export default getColorsOnly;
