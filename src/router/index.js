import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DefaultLayout from '../components/DefaultLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue')
    },
    {
      path: '/single-product/:id',
      name: 'SingleProduct',
      component: () => import('../views/SingleProductView.vue'),
      // handle these as props
      props: true
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/contact-us',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('../views/CheckoutView.vue')
    },
    {
      path: '/wishlist',
      name: 'WishList',
      component: () => import('../views/WishListView.vue')
    }
  ]
});

export default router;
