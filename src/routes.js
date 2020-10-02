import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Cases from './pages/Cases.vue'
import About from './pages/About.vue'
import Services from './pages/Services.vue'
import SingleCase from './pages/SingleCase.vue'
import SingleServ from './pages/SingleServ.vue'
import Contacts from './pages/Contacts.vue'

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/cases',
			component: Cases
		},
		{
			path: '/cases/:id',
			component: SingleCase
		},
		{
			path: '/services/:id',
			component: SingleServ
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '/contacts',
			component: Contacts
		},
		{
			path: '/services',
			component: Services
		}
	],
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
	  	 if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 }
        }
	}
})
