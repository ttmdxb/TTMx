// Authentication Service
export class AuthService {
  constructor() {
    this.baseURL = '/api/auth';
    this.currentUser = null;
  }

  // Login
  async login(email, password) {
    try {
      const response = await fetch(`${this.baseURL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const data = await response.json();
        this.setAuthData(data);
        return data;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      throw error;
    }
  }

  // Register
  async register(userData) {
    try {
      const response = await fetch(`${this.baseURL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        const data = await response.json();
        this.setAuthData(data);
        return data;
      } else {
        const error = await response.json();
        throw new Error(error.message || 'Registration failed');
      }
    } catch (error) {
      throw error;
    }
  }

  // Set authentication data
  setAuthData(data) {
    this.currentUser = data.user;
    sessionStorage.setItem('token', data.token);
    sessionStorage.setItem('user', JSON.stringify(data.user));
  }

  // Get current user
  getCurrentUser() {
    if (!this.currentUser) {
      const userData = sessionStorage.getItem('user');
      this.currentUser = userData ? JSON.parse(userData) : null;
    }
    return this.currentUser;
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.getToken();
  }

  // Get token
  getToken() {
    return sessionStorage.getItem('token');
  }

  // Get user role
  getUserRole() {
    const user = this.getCurrentUser();
    return user ? user.role : null;
  }

  // Check permissions
  hasPermission(permission) {
    const role = this.getUserRole();
    const permissions = {
      user: ['view_profile', 'place_orders', 'view_wallet'],
      admin: ['view_profile', 'place_orders', 'view_wallet', 'manage_users', 'view_reports'],
      superadmin: ['all']
    };
    
    return permissions[role]?.includes(permission) || permissions[role]?.includes('all');
  }

  // Logout
  logout() {
    this.currentUser = null;
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }
}

export const authService = new AuthService();
