const baseSize = 16;
// 设置 rem 函数
function setRem() {
  var scale,slientW = document.documentElement.clientWidth;
  if(slientW > 375 && slientW < 480){
    scale = document.documentElement.clientWidth / 390;
  }else{
    scale = document.documentElement.clientWidth / 1440;
  }
  console.log(scale)
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize =
    baseSize * Math.min(scale, 2) + "px";
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem();
};
