<template>
  <div class="header-img">江苏联网高速区间测速平台</div>
  <div class="btn-group">
    <div class="day" @click="changeBtn(0)" :class="active === 0 ? 'active' : ''">日</div>
    <div class="month" @click="changeBtn(1)" :class="active === 1 ? 'active' : ''">月</div>
    <div class="year" @click="changeBtn(2)" :class="active === 2 ? 'active' : ''">年</div>
  </div>

  <div class="some-info">
    <div class="weather"></div>
    <div class="date">{{date}}</div>
    <div class="time">{{time}}</div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';

onMounted(()=>{
    date.value = formatterTime(1);
    week.value =  formatterTime(3);
    setInterval(()=>{
        time.value = formatterTime(2);
    },1000)
})
const active = ref(0);
const date = ref('');
const week = ref('');
const time = ref('');

const changeBtn = index => {
  active.value = index;
};

const formatterTime = function (type) {
  if (type == 1 || type == 2) {
    const dt = new Date();
    const y = dt.getFullYear();
    const m = (dt.getMonth() + 1 + '').padStart(2, '0');
    const d = (dt.getDate() + '').padStart(2, '0');
    const hh = (dt.getHours() + '').padStart(2, '0');
    const mm = (dt.getMinutes() + '').padStart(2, '0');
    const ss = (dt.getSeconds() + '').padStart(2, '0');
    if (type == 1) {
      return `${y}-${m}-${d}`;
    }
    return `${hh}:${mm}:${ss}`;
    //   return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
  }
  if (type == 3) {
    let days = new Date().getDay();
    let week = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
    if (new Date().getDay() == 0) {
      return '星期天';
    }
    return week[days - 1];
  }
  return '';
};
</script>

<style lang="less" scoped>
.active {
  background-image: linear-gradient(#031f32, #0f78ae) !important;
}
.header-img {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 125px;
  line-height: 67px;
  font-size: 36px;
  color: #fff;
  text-align: center;
  background-image: url('@/assets/imgs/header.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.btn-group {
  display: flex;
  width: 200px;
  position: absolute;
  z-index: 1;
  top: 60px;
  left: 20px;
  .day,
  .month,
  .year {
    width: 54px;
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    background: #062338;
    color: #fff;
    margin: 0 5px;
    border-radius: 4px;
    border: 1px solid #1287c3;
    border-top: none;
  }
  &:hover {
    cursor: pointer;
  }
}
.some-info{
    display: flex;
  width: 200px;
  position: absolute;
  z-index: 1;
  top: 60px;
  right: 20px;
}
</style>
