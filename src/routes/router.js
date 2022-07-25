import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Proposal from '../views/Proposal.vue'
import Order from '../views/Order.vue'
import ClientRequest from '../views/Request.vue'
import Delivery from '../views/Delivery.vue'
import Stock from '../views/Stock.vue'
import Material from '../views/Material.vue'
import Customer from '../views/Customer.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/proposal',
            name: 'propostas',
            component: Proposal
        },
        {
            path: '/order',
            name: 'ordens',
            component: Order
        },
        {
            path: '/request',
            name: 'pedidos',
            component: ClientRequest
        },
        {
            path: '/delivery',
            name: 'entregas',
            component: Delivery
        },
        {
            path: '/stock',
            name: 'estoque',
            component: Stock
        },
        {
            path: '/material',
            name: 'materiais',
            component: Material
        },
        {
            path: '/customer',
            name: 'clientes',
            component: Customer
        }
    ]
})