import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/index',
			name: 'index',
			component: () => import('@/views/home')
		},
		{
			path: '/form/account',
			name: 'form-account',
			component: () => import('@/views/account')
		},
		{
			path: '/form/proceed',
			name: 'form-proceed',
			component: () => import('@/views/proceed')
		},
		{
			path: '/form/borrow',
			name: 'form-borrow',
			component: () => import('@/views/borrow')
		},
		{
			path: '/form/transfer',
			name: 'transfer',
			component: () => import('@/views/transfer')
		},
		{
			path: '/rule',
			name: 'rule',
			component: () => import('@/views/rule')
		},
		{
			path: '/approval',
			name: 'approval',
			component: () => import('@/views/approval')
		},
		{
			path: '/recharge',
			name: 'recharge',
			component: () => import('@/views/recharge')
		},
		{
			path: '/mglist',
			name: 'mglist',
			component: () => import('@/views/mglist')
		},
		{
			path: '/demo',
			name: 'demo',
			component: () => import('@/views/pay')
		}
	]
})
