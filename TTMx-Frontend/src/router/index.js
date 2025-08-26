import { createRouter, createWebHistory } from 'vue-router'
import { setupAuthGuards } from './guards.js';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

// Landing Page Route
{
  path: '/landing',
  name: 'landing',
  component: () => import('../components/pages/Landing.vue')
},

// Update the root redirect
{
  path: '/',
  redirect: '/landing'
},

// Authentication Routes
{
  path: '/auth/login',
  name: 'login',
  component: () => import('../components/auth/Login.vue')
},
{
  path: '/auth/register',
  name: 'register',
  component: () => import('../components/auth/Register.vue')
},

// Dashboard Routes
{
  path: '/dashboard',
  name: 'user-dashboard',
  component: () => import('../components/pages/dashboard.vue')
},
{
  path: '/admin/dashboard',
  name: 'admin-dashboard',
  component: () => import('../components/pages/admin/dashboard.vue')
},
{
  path: '/admin/superadmin-dashboard',
  name: 'superadmin-dashboard',
  component: () => import('../components/pages/admin/superadmin-dashboard.vue')
},
    // Wallet Routes
    {
      path: '/wallet/balance',
      name: 'wallet-balance',
      component: () => import('../components/pages/wallet/balance.vue')
    },
    {
      path: '/wallet/add-funds',
      name: 'wallet-add-funds',
      component: () => import('../components/pages/wallet/add-funds.vue')
    },
    {
      path: '/wallet/transactions',
      name: 'wallet-transactions',
      component: () => import('../components/pages/wallet/transactions.vue')
    },

    // Services Routes
    {
      path: '/services/instagram',
      name: 'services-instagram',
      component: () => import('../components/pages/services/instagram.vue')
    },
    {
      path: '/services/tiktok',
      name: 'services-tiktok',
      component: () => import('../components/pages/services/tiktok.vue')
    },
    {
      path: '/services/youtube',
      name: 'services-youtube',
      component: () => import('../components/pages/services/youtube.vue')
    },
    {
      path: '/services/orders',
      name: 'services-orders',
      component: () => import('../components/pages/services/orders.vue')
    },

    // Support Routes
    {
      path: '/support/tickets',
      name: 'support-tickets',
      component: () => import('../components/pages/support/tickets.vue')
    },
    {
      path: '/support/inbox',
      name: 'support-inbox',
      component: () => import('../components/pages/support/inbox.vue')
    },

    // Profile Routes
    {
      path: '/profile/settings',
      name: 'profile-settings',
      component: () => import('../components/pages/profile/settings.vue')
    },

    // Events
    {
      path: '/events',
      name: 'events',
      component: () => import('../components/pages/events.vue')
    },

    // Admin Routes (protected)
    {
      path: '/admin/api/keys',
      name: 'admin-api-keys',
      component: () => import('../components/pages/admin/api-keys.vue')
    },

    // Legal Routes
    {
      path: '/legal/terms',
      name: 'legal-terms',
      component: () => import('../components/pages/legal/terms.vue')
    },
// Add to your routes array
{
  path: '/admin/api-providers',
  name: 'admin-api-providers',
  component: () => import('../components/pages/admin/api-providers.vue')
},
{
  path: '/admin/payment-gateways',
  name: 'admin-payment-gateways',
  component: () => import('../components/pages/admin/payment-gateways.vue')
}

  ]
})

setupAuthGuards(router);

export default router
