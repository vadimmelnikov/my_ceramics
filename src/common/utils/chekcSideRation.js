const NORMAL_WIDTH = 16;
const NORMAL_HEIGHT = 9;
const NORMAL_RELATION = NORMAL_WIDTH / NORMAL_HEIGHT;

export default (width, height) => {
  const currentReltion = width / height;
  if (currentReltion < NORMAL_RELATION) {
    return {
      width: (NORMAL_WIDTH * height) / NORMAL_HEIGHT,
      isAlighCenterForWidth: true,
      height,
    };
  }
  return {
    width,
    height: (NORMAL_HEIGHT * width) / NORMAL_WIDTH,
    isAlighCenterForWidth: false,
  };
};
