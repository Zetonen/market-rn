export const useDefaultImage = (img: String) => {
  if (img) {
    return {uri: img};
  }
  return require('../assets/images/placeholder.jpeg');
};
