import { createRouter, createWebHistory } from 'vue-router'
import index from "./pages/index.vue";
import about from "./pages/about.vue"
import contact from "./pages/contact.vue"
import projects from "./pages/projects.vue"

export const router = createRouter({
    linkActiveClass: 'nav-link-active',
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: '/about',
            component: about
        },
        {
            path: '/contact',
            component: contact
        },
        {
            path: '/projects',
            component: projects
        }
    ]
})
