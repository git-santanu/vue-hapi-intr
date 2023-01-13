import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'
import AddDetails from './components/AddDetails.vue'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LogIn',
        component: LogIn,
        path: '/log-in'
    },
    {
        name: 'AddDetails',
        component: AddDetails ,
        path: '/add-Details'
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;