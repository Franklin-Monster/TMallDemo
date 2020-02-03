import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('../views/home/Home.vue')
const Register =() => import('../views/register/Register.vue')
const Login =() => import('../views/login/Login.vue')
// const ShopCar=()=> import('../views/shopcar/ShopCar.vue')
const routes =[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/login',
        component:Login
    },
    // {
    //     path:'/shopcar',
    //     component:ShopCar
    // },

]
const router =new VueRouter({
    routes,
    mode:'history'
})
export default router