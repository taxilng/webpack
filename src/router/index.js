/**
 * Created by wisdom on 2017/12/4.
 */
import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes:[
        {
            path:'/',
            name:'home',
            component: home
        }
    ]
})

export default router