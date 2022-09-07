import {createRouter, createWebHashHistory} from 'vue-router'

import WelcomePage from './components/WelcomePage.vue'
import ArtistConfigurationPage from './components/ArtistConfigurationPage.vue'
import Carousel from './components/Carousel.vue'

const routes = [
    { path: '/', component: WelcomePage, name: 'welcome-page'},
    { path: '/configure', component: ArtistConfigurationPage, name: 'artist-config-page'},
    { path: '/carousel', component: Carousel, name: 'carousel'}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router