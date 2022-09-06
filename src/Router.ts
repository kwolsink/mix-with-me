import {createRouter, createWebHashHistory} from 'vue-router'

import WelcomePage from './components/WelcomePage.vue'
import ArtistConfigurationPage from './components/ArtistConfigurationPage.vue'
import Carousel from './components/Carousel.vue'

const routes = [
    { path: '/', component: WelcomePage},
    { path: '/configure', component: ArtistConfigurationPage},
    { path: '/carousel', component: Carousel}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router