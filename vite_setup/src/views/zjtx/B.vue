<template>
  <div id="box2">
      子组件B
      {{store.list}}
  </div>
</template>

<script setup>
import { reactive, onBeforeMount, onMounted } from 'vue';
import {useStore} from '../../store/index.js'
import { storeToRefs } from 'pinia'
 
const store = useStore();


onMounted(() => {});

const state = reactive({});

</script>
<style lang="less" scoped>
#box2 {
  width: 50%;
  height: 200px;
  display: flex;
  background-color: aquamarine;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
