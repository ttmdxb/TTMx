import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

// Import components
const LandingPage = () => import('@/pages/LandingPage.vue')
const LoginPage = () => import('@/pages/auth/LoginPage.vue')
const RegisterPage = () => import('@/pages/auth/RegisterPage.vue')
const Dashboard = () => import('@/pages/dashboard/Dashboard.vue')
const Services = () => import('@/pages/services/ServicesPage.vue')
const Orders = () => import('@/pages/orders/OrdersPage.vue')
const Wallet = () => import('@/pages/wallet/WalletPage.vue')
const Profile = () => import('@/pages/profile/ProfilePage.vue')

// Admin components
const AdminDashboard = () => import('@/pages/admin/AdminDashboard.vue')
const AdminUsers = () => import('@/pages/admin/AdminUsers.vue')
const AdminOrders = () => import('@/pages/admin/AdminOrders.vue')
const AdminServices = () => import('@/pages/admin/AdminServices.vue')

const routes = [
  // Public routes - No authentication required
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/LandingPage.vue'),
    meta: { 
      requiresAuth: false,
      title: 'TTMx - Professional Social Media Marketing'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/auth/LoginPage.vue'),
    meta: { 
      requiresAuth: false,
      redirectIfAuthenticated: true,
      title: 'Login - TTMx'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
    meta: { 
      requiresAuth: false,
      redirectIfAuthenticated: true,
      title: 'Register - TTMx'
    }
  },

  // Protected routes - Authentication required
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { 
      requiresAuth: true,
      title: 'Dashboard - TTMx'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: { 
      requiresAuth: true,
      title: 'Services - TTMx'
    }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    meta: { 
      requiresAuth: true,
      title: 'My Orders - TTMx'
    }
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet,
    meta: { 
      requiresAuth: true,
      title: 'Wallet - TTMx'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { 
      requiresAuth: true,
      title: 'Profile - TTMx'
    }
  },

  // Admin routes - Admin authentication required
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard,
    meta: { 
      requiresAuth: true,
      requiresAdmin: true,
      title: 'Admin Dashboard - TTMx'
    }
  },
  {
    path: '/admin/users',
    name: 'AdminUsers',
    component: AdminUsers,
    meta: { 
      requiresAuth: true,
      requiresAdmin: true,
      title: 'Manage Users - TTMx Admin'
    }
  },
  {
    path: '/admin/orders',
    name: 'AdminOrders',
    component: AdminOrders,
    meta: { 
      requiresAuth: true,
      requiresAdmin: true,
      title: 'Manage Orders - TTMx Admin'
    }
  },
  {
    path: '/admin/services',
    name: 'AdminServices',
    component: AdminServices,
    meta: { 
      requiresAuth: true,
      requiresAdmin: true,
      title: 'Manage Services - TTMx Admin'
    }
  },

  // Catch all 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue'),
    meta: { title: 'Page Not Found - TTMx' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Navigation guards
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  
  // Set page title
  document.title = to.meta.title || 'TTMx - Professional Social Media Marketing'
  
  // Check if user is authenticated
  if (authStore.token) {
    await authStore.validateToken()
  }
  
  // Handle routes that require authentication
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ 
      name: 'Login', 
      query: { redirect: to.fullPath } 
    })
    return
  }
  
  // Handle routes that require admin access
  if (to.meta.requiresAdmin && !authStore.isAdmin) {
    next({ name: 'Dashboard' })
    return
  }
  
  // Redirect authenticated users away from login/register
  if (to.meta.redirectIfAuthenticated && authStore.isAuthenticated) {
    next({ name: 'Dashboard' })
    return
  }
  
  next()
})

export default router
