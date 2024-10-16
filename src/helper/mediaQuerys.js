export const mediaQuerysMin = (px, callBack = null) => {
  const media = window.matchMedia(`(min-width:${px}px)`).matches;
  if (typeof callBack === "function" && callBack) {
    callBack(media);
  }
  return media;
};
