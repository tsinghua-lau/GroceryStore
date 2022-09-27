<template>
  <div id="private-box">
    <van-button plain hairline type="primary">细边框按钮</van-button>
<van-button plain hairline type="success">细边框按钮</van-button>

      子组件A
     &nbsp;&nbsp;
      <!-- <div style="font-weight:600">
        props数据==>{{isPropData}}

      </div> -->
      <div @click="getData">
        A点击
      </div>
      <div @click="titleChange">
        改变title
      </div>
  </div>
</template>

<script setup>
import {inject, reactive,defineProps,defineExpose, defineEmits, onBeforeMount, onMounted } from 'vue';

onMounted(() => {
  console.log(inject('fromParent'));
});

const emit = defineEmits(["changeData",'update:title']);

const getData = ()=>{
  emit("changeData", '传给父组件数据');
}

const titleChange = ()=>{
  emit('update:title', 'title改变啦！')
}

const props = defineProps({
  isPropData: {
    type: String,
    default: () => '',
  },
})

emit

const state = reactive({
  data:'我是a组件数据'
});

//a组件方法
const afn=()=>{
  console.log('a组件方法执行');
}

defineExpose({
  state,
  afn
})

</script>
<style lang="less" scoped>
#private-box {
  width: 50%;

  height: 200px;
  background-color: bisque;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
