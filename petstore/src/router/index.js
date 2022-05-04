import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/Main'
import Form from '@/components/Form'
import Product from '@/components/Product'
// import Food from '@/components/Food'
// import Movie from '@/components/Movie'

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
    // {
    //     path: '/food',
    //     name: 'food',
    //     component: Food,
    //     props: true
    // },
    // {
    //     path: '/movies',
    //     name: 'movie',
    //     component: Movie,
    //     props: true
    // },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router