import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue';
import Collect from '../components/Collect.vue';
import List from '../components/List.vue';
import Detail from '../components/Detail.vue';
import Add from '../components/Add.vue';
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/home',
      component:Home
    },
    {
      path:'/collect',
      component:Collect
    },
    {
      path:'/list',
      component:List
    },
    {
      path:'/detail',
      component:Detail
    },
    {
      path:'/add',
      component:Add
    },

  ]
})
