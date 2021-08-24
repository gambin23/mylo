import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/groups',
        name: 'Groups',
        children: [],
        component: () => import(/* webpackChunkName: "groups" */ '@/views/Groups.vue')
    },
    {
        path: '/groups/:id',
        name: 'Group',
        component: () => import(/* webpackChunkName: "group" */ '@/views/Group.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
