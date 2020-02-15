import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Card from '../views/Card.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/:id',
    name: 'Card',
    component: Card,
    props: route => ({ id: route.params.id })
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
