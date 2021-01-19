import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Homepage from '@/components/homepage/Homepage';
import LogIn from '@/components/LogIn';
import Register from '@/components/Register';

Vue.use(Router);

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/signin',
      name: 'LogIn',
      component: LogIn,
    },
    {
      path: '/signup',
      name: 'Register',
      component: Register,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      get component() {
        if (localStorage.signedIn) {
          return Dashboard;
        }
        return Homepage;
      },
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: Homepage,
    },
  ],
});
