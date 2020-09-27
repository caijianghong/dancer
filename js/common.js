// 识别屏幕宽度设置页面默认字体大小
!(function () {
  var winW = document.documentElement.clientWidth;
  var fontS = 0;
  fontS = Math.round(winW / 19.2);
  document.documentElement.style.fontSize = fontS + "px";
})();