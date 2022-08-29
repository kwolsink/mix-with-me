import {createRouter, createWebHashHistory} from 'vue-router'
import WelcomePage from './components/WelcomePage.vue'

const routes = [
    { path: '/', component: WelcomePage} 
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router