import { reactive } from 'vue';
const state = reactive({
  startx: '',
  starty: ''
});

//获得角度
const getAngle = (angx, angy) => {
  return (Math.atan2(angy, angx) * 180) / Math.PI;
};

//根据起点终点返回方向 1向上滑动 2向下滑动 3向左滑动 4向右滑动 0点击事件
const getDirection = (startx, starty, endx, endy) => {
  let angx = endx - startx;
  let angy = endy - starty;
  let result = 0;

  //如果滑动距离太短
  if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
    console.log('==>点击了一下');
    return result;
  }
  let angle = getAngle(angx, angy);
  console.log('角度', angle);

  if (angle < 0 && -90 < angle) {
    console.log('==>往 右上 滑动');
  } else if (angle < -90 && -180 < angle) {
    console.log('==>往 左上 滑动');
  } else if (angle < 90 && 0 < angle) {
    console.log('==>往 右下 滑动');
  } else {
    console.log('==>往 左下 滑动');
  }
  return result;
};

// 自定义指令
const focusDirective = {
  install(app) {
    app.directive('touch', {
      mounted(el, binding) {
        // console.log(el);
        // console.log(binding);
        el.addEventListener(
          'touchstart',
          function (e) {
            state.startx = e.touches[0].pageX;
            state.starty = e.touches[0].pageY;
          },
          false
        );
        el.addEventListener(
          'touchend',
          function (e) {
            let endx, endy;
            endx = e.changedTouches[0].pageX;
            endy = e.changedTouches[0].pageY;
            let direction = getDirection(state.startx, state.starty, endx, endy);
            console.log(direction);
          },
          false
        );
      }
    });
  }
};

export default focusDirective;
