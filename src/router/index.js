import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home.vue'
import news from '../components/news.vue'
import details from '../components/details.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes:[
    {
      path:'/home',
      component:home
    },
    {
      path:'/news',
      component:news,
      children:[
        {
          path:'details',
          component:details
        }
      ]
    },
    {
      path:'*',
      redirect:'/home'
    }
  ]
})
