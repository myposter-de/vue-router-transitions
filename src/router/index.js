import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Faq from '@/components/Faq';
import AboutMe from '@/components/AboutMe';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: AboutMe,
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq,
    },
  ],
});
