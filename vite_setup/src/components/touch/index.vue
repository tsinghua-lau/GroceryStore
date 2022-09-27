<template>
  <div id="touchBox" v-touch="hello"></div>
</template>
<script setup>
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
onMounted(() => {
  //手指接触屏幕
  document.getElementById('touchBox').addEventListener(
    'touchstart',
    function (e) {
      state.startx = e.touches[0].pageX;
      state.starty = e.touches[0].pageY;
    },
    false
  );

  document.getElementById('touchBox').addEventListener(
    'touchend',
    function (e) {
      let endx, endy;
      endx = e.changedTouches[0].pageX;
      endy = e.changedTouches[0].pageY;
      let direction = getDirection(state.startx, state.starty, endx, endy);
    },
    false
  );
});
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
  //   console.log('角度', angle);

  if((angle < 0 && angle > -45)||(angle < 45 && angle > 0)){
    console.log('往右滑动');
  }

  if (angle < 0 && -90 < angle) {
    console.log('==>往【右上】滑动');
    result = 1;
  } else if (angle < -90 && -180 < angle) {
    console.log('==>往【左上】滑动');
    result = 1;
  } else if (angle < 90 && 0 < angle) {
    console.log('==>往【右下】滑动');
    result = 2;
  } else {
    console.log('==>往【左下】滑动');
  }
  return result;
};
</script>
<style lang="less" scoped>
#touchBox {
  width: 80%;
  margin-top: 10%;
  margin-left: 10%;
  height: 60%;
  background: palegreen;
}
</style>
