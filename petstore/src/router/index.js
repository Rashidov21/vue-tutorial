import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/Main'
import Form from '@/components/Form'
import Product from '@/components/Product'
import Gallery from '@/components/Gallery'

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
    {
        path: '/product/:id',
        name: 'product',
        component: Product,
        props: true
    },
    {
        path: '/images',
        name: 'gallery',
        component: Gallery,
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router