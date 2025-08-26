<script>
import { authService } from '../../services/auth.js';

export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      loading: false,
      showPassword: false,
      errors: {}
    };
  },
  methods: {
    async handleLogin() {
      if (!this.validateForm()) return;

      this.loading = true;
      try {
        const result = await authService.login(this.loginForm.email, this.loginForm.password);
        
        // Redirect based on user role
        this.redirectToDashboard(result.user.role);
      } catch (error) {
        this.errors.general = error.message;
      } finally {
        this.loading = false;
      }
    },

    validateForm() {
      this.errors = {};
      
      if (!this.loginForm.email) {
        this.errors.email = 'Email is required';
      } else if (!this.isValidEmail(this.loginForm.email)) {
        this.errors.email = 'Please enter a valid email';
      }
      
      if (!this.loginForm.password) {
        this.errors.password = 'Password is required';
      }
      
      return Object.keys(this.errors).length === 0;
    },

    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    redirectToDashboard(role) {
      switch(role) {
        case 'superadmin':
          this.$router.push('/admin/superadmin-dashboard');
          break;
        case 'admin':
          this.$router.push('/admin/dashboard');
          break;
        default:
          this.$router.push('/dashboard');
      }
    }
  }
};
</script>

<template>
  <div class="authentication-wrapper">
    <div class="container-fluid">
      <div class="authentication-main">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
            <div class="card custom-card">
              <div class="card-body p-5">
                <div class="text-center mb-4">
                  <h3 class="fw-semibold text-primary">TTMx</h3>
                  <p class="text-muted">Sign in to your account</p>
                </div>

                <div v-if="errors.general" class="alert alert-danger">
                  {{ errors.general }}
                </div>

                <form @submit.prevent="handleLogin">
                  <div class="row gy-3">
                    <div class="col-xl-12">
                      <label for="email" class="form-label text-default">Email</label>
                      <input 
                        type="email" 
                        class="form-control form-control-lg"
                        :class="{ 'is-invalid': errors.email }"
                        id="email" 
                        placeholder="Enter your email"
                        v-model="loginForm.email">
                      <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
                    </div>
                    
                    <div class="col-xl-12 mb-2">
                      <label for="password" class="form-label text-default">Password</label>
                      <div class="input-group">
                        <input 
                          :type="showPassword ? 'text' : 'password'" 
                          class="form-control form-control-lg"
                          :class="{ 'is-invalid': errors.password }"
                          id="password" 
                          placeholder="Enter your password"
                          v-model="loginForm.password">
                        <button 
                          class="btn btn-light" 
                          type="button" 
                          @click="showPassword = !showPassword">
                          <i :class="showPassword ? 'bx bx-hide' : 'bx bx-show'"></i>
                        </button>
                        <div v-if="errors.password" class="invalid-feedback">{{ errors.password }}</div>
                      </div>
                    </div>
                    
                    <div class="col-xl-12 d-grid mt-2">
                      <button 
                        type="submit" 
                        class="btn btn-lg btn-primary"
                        :disabled="loading">
                        <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                        {{ loading ? 'Signing in...' : 'Sign In' }}
                      </button>
                    </div>
                  </div>
                </form>

                <div class="text-center">
                  <p class="text-muted mt-3">Don't have an account? 
                    <router-link to="/auth/register" class="text-primary">Sign Up</router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.authentication-wrapper {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.authentication-main {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
</style>
