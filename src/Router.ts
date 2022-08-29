import {createRouter, createWebHashHistory} from 'vue-router'

import WelcomePage from './components/WelcomePage.vue'
import ArtistConfigurationPage from './components/ArtistConfigurationPage.vue'

const routes = [
    { path: '/', component: WelcomePage},
    { path: '/configure', component: ArtistConfigurationPage}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router