import { createRouter, createWebHistory } from 'vue-router'
import { app } from '../firebase/firebase.js';
import LoginView from '../views/LoginView.vue';
import DashboardView from '../views/DashboardView.vue'
import BirthdaysView from '../views/BirthdaysView.vue';
import SecretSantaView from '../views/SecretSantaView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: {authRequired: true}
    },
    {
      path: '/birthdays',
      name: 'birthdays',
      component: BirthdaysView,
      meta: {authRequired: true}
    },
    {
      path: '/secretsanta',
      name: 'secretSanta',
      component: SecretSantaView,
      meta: {authRequired: true}
    }
  ]
});

//Route guards
router.beforeEach(async (to, from) => {
  const authRequired = to.matched.some(record => record.meta.authRequired)
  if(authRequired && !await app.getCurrentUser()) {
    return {name: 'login'};
  }
});

export default router
