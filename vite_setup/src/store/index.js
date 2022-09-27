import { defineStore } from "pinia" // 定义容器
 import {useUser} from './user.js'
export const useStore  = defineStore('main', {
  /**
   * 存储全局状态
   * 1.必须是箭头函数: 为了在服务器端渲染的时候避免交叉请求导致数据状态污染
   * 和 TS 类型推导
  */
  
  state: () => {
    return {
      count: 0,
      list: [1, 2, 3, 4 ],
      name: 123
    }
  },    
  /**
   * 用来封装计算属性 有缓存功能  类似于computed
   */
  getters: {
    getNum(state){
        return `${this.count}我爱你`
    }
  },
  /**
   * 编辑业务逻辑  类似于methods
   */
  actions: {
    changeState(){
        
        this.count =123;
        this.name =123;
        
    }
  },
  persist: {
    enabled: true, // 开启数据缓存
    strategies: [
      {
        key: 'myuser',
        storage: localStorage, // 默认是sessionStorage
        paths: ['count']
      }
    ],
  }

 
})