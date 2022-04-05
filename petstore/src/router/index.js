import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/Main'
import Form from '@/components/Form'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/form',
        name: 'form',
        component: Form
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router