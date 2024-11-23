import { createRouter, createWebHistory } from 'vue-router';

// Import components for the routes
import Home from '../views/Home.vue';
import Store from '../views/Store.vue';
import Explore from '../views/Explore.vue';

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home 
  },
  { path: '/store', 
    name: 'Store', 
    component: Store 
  },
  { path: '/explore', 
    name: 'Explore', 
    component: Explore 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
