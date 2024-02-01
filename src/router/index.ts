import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/HomeView.vue'
import QuizView from '@/views/QuizView/QuizView.vue'
import QuizGameView from '@/views/QuizGameView/QuizGameView.vue'
import QuizResultView from '@/views/QuizResultView/QuizResultView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: QuizView
    },
    {
      path: '/quiz/play',
      name: 'quiz-playing',
      component: QuizGameView
    },
    {
      path: '/quiz/result',
      name: 'quiz-result',
      component: QuizResultView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
