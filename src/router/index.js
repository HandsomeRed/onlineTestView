import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        redirect:"login_regist"
    },
    {
        path: '/login_regist',
        name: 'login_regist',
        component: ()=> import('../views/Login_Regist/index.vue')
    },
    {
        path: '/student_home',
        name: 'student_home',
        component: ()=> import('../views/StudentHome/index.vue')
    },
    {
        path: '/testpaper',
        component: ()=> import("../components/Header/PaperHander")
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
