<template>
  <div id="box">
    <div class="text">
      {{ count }}
      <!-- &nbsp;
      <div style="font-weight:600">
        父组件数据
      </div> -->
    </div>
    <!-- <div class="text">父组件
      &nbsp;
      <div style="font-weight:600">
        父组件数据
      </div>
    </div> -->
    <!-- title:{{state.title}} -->
    <!-- <div @click="modify">对象修改</div>
    <div @click="modify2">函数修改</div>

    <div></div>
    count:{{ count }}{{ list }} -->
    <div @click="modify3">actions修改</div>

    -----{{ store.name }}
    <childA
      ref="isA"
      :title="title"
      @update:title="state.title = $event"
      @changeData="doFn"
      :isPropData="state.isPropData"
    />
    <childB />
  </div>

</template>

<script setup>
import childA from './A.vue';
import childB from './B.vue';
import { useStore } from '../../store/index.js';
import { storeToRefs } from 'pinia';

const store = useStore();
//简单数据修改
store.count++;
//重置
store.$reset();
//解构
const { count, list } = storeToRefs(store);

//多条数据修改
const modify = () => {
  store.$patch({
    count: 10,
    list: [1]
  });
};

const modify2 = () => {
  store.$patch(state => {
    state.count = state.count += 100;
    state.list = [1, 2, 3];
  });
};

const modify3 = () => {
  store.changeState();
};

const { proxy } = getCurrentInstance();

// 向子组件传递数据
provide('fromParent', '123456');

onMounted(() => {
  //修改A组件数据
  isA.value.state.data = 123;
  //访问A组件数据
  console.log(isA.value.state.data);
  //调用A组件方法
  console.log(isA.value.afn());
});
const isA = ref(null);
const state = reactive({
  isPropData: '来自父组件数据',
  title: '组件通信'
});

const doFn = () => {
  console.log('访问、修改父组件数据');
  //TODO
};
</script>
<style lang="less" scoped>
#box {
  width: 40%;
  height: 40%;
  overflow: hidden;
  display: flex;
  align-items: end;
  background-color: coral;
  .text {
    position: absolute;
    top: 52px;
    left: 18%;
    color: #fff;
  }
}
</style>
:sunflower:
