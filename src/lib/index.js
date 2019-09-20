import Roll from "./Roll.vue";
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) { 
 console.log('window 情况');
 window.Vue.use(Roll) 
}

export default Roll.install = (Vue) => {
 Vue.component(Roll.name, Roll)
}
