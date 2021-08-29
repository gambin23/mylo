import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: 'groups'
    },
    {
        path: '/my-account',
        name: 'Account',
        component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
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
        path: '/recipes',
        name: 'Recipes',
        component: () => import(/* webpackChunkName: "recipes" */ '@/views/Recipes.vue')
    },
    {
        path: '/user/:id',
        name: 'User',
        component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
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
