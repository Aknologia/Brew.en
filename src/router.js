import {createRouter, createWebHistory} from "vue-router";

import Index from "@/views/Index.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    routes: [
        {
            path: '/',
            name: "Index",
            component: Index
        },
        {
            path: '/about',
            name: "About",
            component: About
        },
        {
            path: '/contact',
            name: "Contact",
            component: Contact
        }
    ]
})

router.scrollBehavior = (to, from, savedPosition) => {
    return {top: 0}
}

export default router;