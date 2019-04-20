import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Sign_In from '../components/sign_in'
import Sign_Up from '../components/sign_up'
import Settings from '../components/settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/sign_in',
      name: 'Sign_In',
      component: Sign_In
    },

    {
      path: '/sign_up',
      name: 'Sign_Up',
      component: Sign_Up
    },

    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
