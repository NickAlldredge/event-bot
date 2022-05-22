import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BirthdaysView from '../views/BirthdaysView.vue';
import SecretSantaView from '../views/SecretSantaView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/birthdays',
      name: 'birthdays',
      component: BirthdaysView
    },
    {
      path: '/secretsanta',
      name: 'secretSanta',
      component: SecretSantaView
    }
  ]
})

export default router
