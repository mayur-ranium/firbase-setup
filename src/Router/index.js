import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '/src/views/Dashboard.vue'
import Home from '/src/views/Home.vue'
import Register from '/src/views/Register.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    
   
   
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router