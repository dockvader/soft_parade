import { createRouter, createWebHistory } from 'vue-router'
// We will import views after creating them. For now, placeholders.

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/journal/:id',
        name: 'Journal',
        component: () => import('../views/JournalView.vue')
    },
    {
        path: '/journal/:id/day/:day',
        name: 'Day',
        component: () => import('../views/DayView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Always scroll to top on navigation
        return { top: 0 }
    }
})

export default router
