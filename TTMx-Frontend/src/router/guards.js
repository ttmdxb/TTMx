import { authService } from '../services/auth.js';

export function setupAuthGuards(router) {
  router.beforeEach((to, from, next) => {
    const isAuthenticated = authService.isAuthenticated();
    const userRole = authService.getUserRole();
    
    // Public routes that don't require authentication
    const publicRoutes = ['/auth/login', '/auth/register'];
    
    if (!isAuthenticated && !publicRoutes.includes(to.path)) {
      next('/auth/login');
      return;
    }
    
    // Role-based access control
    if (to.path.startsWith('/admin/superadmin') && userRole !== 'superadmin') {
      next('/dashboard');
      return;
    }
    
    if (to.path.startsWith('/admin') && !['admin', 'superadmin'].includes(userRole)) {
      next('/dashboard');
      return;
    }
    
    // Redirect authenticated users away from auth pages
    if (isAuthenticated && publicRoutes.includes(to.path)) {
      const role = userRole;
      if (role === 'superadmin') {
        next('/admin/superadmin-dashboard');
      } else if (role === 'admin') {
        next('/admin/dashboard');
      } else {
        next('/dashboard');
      }
      return;
    }
    
    next();
  });
}
