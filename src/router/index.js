import { createRouter, createWebHistory } from 'vue-router'
import { getUserState } from '../firebase/firebase.js';
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
      component: LoginView,
      meta: { requiresUnauth: true}
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: {requiresAuth: true}
    },
    {
      path: '/birthdays',
      name: 'birthdays',
      component: BirthdaysView,
      meta: {requiresAuth: true}
    },
    {
      path: '/secretsanta',
      name: 'secretSanta',
      component: SecretSantaView,
      meta: {requiresAuth: true}
    }
  ]
});

//Route guards
router.beforeEach(async (to, from) => {
  const isAuth = await getUserState();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresUnauth = to.matched.some(record => record.meta.requiresUnauth);

  if (requiresAuth && !isAuth) return {name: 'login'}
  else if (requiresUnauth && isAuth) return {name: 'dashboard'}
});

export default router
