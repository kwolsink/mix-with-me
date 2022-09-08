import {createRouter, createWebHashHistory} from 'vue-router'

import WelcomePage from './components/WelcomePage.vue'
import ArtistConfigurationPage from './components/ArtistConfigurationPage.vue'
import Dashboard from './components/Dashboard.vue'

const routes = [
    { path: '/', component: WelcomePage, name: 'welcome-page'},
    { path: '/configure', component: ArtistConfigurationPage, name: 'artist-config-page'},
    { path: '/carousel', component: Dashboard, name: 'dashboard'}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router