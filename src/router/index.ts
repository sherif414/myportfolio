import { createRouter, createWebHashHistory } from 'vue-router'
import index from "../pages/index.vue";
import about from "../pages/about.vue"
import contact from "../pages/contact.vue"
import projects from "../pages/projects.vue"

const router = createRouter({
    linkActiveClass: 'nav-link-active',
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        },
        {
            path: '/projects',
            name: 'projects',
            component: projects
        }
    ]
})
export default router