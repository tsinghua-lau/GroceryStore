
    //解构pinia中的createPinia用于创建pinia实例
    import { createPinia } from "pinia";
    //实例化pinia
 
    //引入持久化插件
	import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
    const store = createPinia();
	//pinia使用
	store.use(piniaPluginPersistedstate)

     export default store

