import { defineStore } from "pinia" // 定义容器
 
export const useUser  = defineStore('user', {
  state: () => {
    return {
     name:'小明'
    }
  },
  getters: {
  },
  actions: {
  },
  // persist: {
  //   enabled: true, // 开启数据缓存
  //   strategies: [
  //     {
  //       key: 'myuser',
  //       storage: localStorage // 默认是sessionStorage
  //     }
  //   ],
  // }
 
})