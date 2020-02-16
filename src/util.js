const cubic = value => Math.pow(value, 3);
const easeInOutCubic = value =>
  value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;

export function scrollToTop(el = document.documentElement) {
  const beginTime = Date.now();
  const beginValue = el.scrollTop;
  const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16));
  const frameFunc = () => {
    const progress = (Date.now() - beginTime) / 500;
    if (progress < 1) {
      el.scrollTop = beginValue * (1 - easeInOutCubic(progress));
      rAF(frameFunc);
    } else {
      el.scrollTop = 0;
    }
  };
  rAF(frameFunc);
}
