import {createApp} from "vue";
import {createRouter, createWebHistory} from "vue-router";

import App from './App.vue'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import './assets/main.css'

import IndexView from "./views/Index.vue";
import AboutView from "./views/About.vue";
import ContactView from "./views/Contact.vue";
import LoginView from "./views/Login.vue";
import RegisterView from "./views/Register.vue";

const routes = [
    {
        path: '/',
        name: "Index",
        component: IndexView
    },
    {
        path: '/about',
        name: "About",
        component: AboutView
    },
    {
        path: '/contact',
        name: "Contact",
        component: ContactView
    },
    {
        path: '/login',
        name: "Login",
        component: LoginView
    },
    {
        path: '/register',
        name: "Register",
        component: RegisterView
    }
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    routes
});

const app = createApp(App)

app.use(router)

app.mount('#app')
