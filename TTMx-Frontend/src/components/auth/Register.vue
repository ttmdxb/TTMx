<script>
import { authService } from '../../services/auth.js';

export default {
  data() {
    return {
      registerForm: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      loading: false,
      errors: {}
    };
  },
  methods: {
    async handleRegister() {
      if (!this.validateForm()) return;

      this.loading = true;
      try {
        const result = await authService.register({
          name: this.registerForm.name,
          email: this.registerForm.email,
          password: this.registerForm.password
        });
        
        this.$router.push('/dashboard');
      } catch (error) {
        this.errors.general = error.message;
      } finally {
        this.loading = false;
      }
    },

    validateForm() {
      this.errors = {};
      
      if (!this.registerForm.name) {
        this.errors.name = 'Name is required';
      }
      
      if (!this.registerForm.email) {
        this.errors.email = 'Email is required';
      }
      
      if (!this.registerForm.password) {
        this.errors.password = 'Password is required';
      } else if (this.registerForm.password.length < 6) {
        this.errors.password = 'Password must be at least 6 characters';
      }
      
      if (this.registerForm.password !== this.registerForm.confirmPassword) {
        this.errors.confirmPassword = 'Passwords do not match';
      }
      
      return Object.keys(this.errors).length === 0;
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
                  <p class="text-muted">Create your account</p>
                </div>

                <div v-if="errors.general" class="alert alert-danger">
                  {{ errors.general }}
                </div>

                <form @submit.prevent="handleRegister">
                  <div class="row gy-3">
                    <div class="col-xl-12">
                      <label for="name" class="form-label text-default">Full Name</label>
                      <input 
                        type="text" 
                        class="form-control form-control-lg"
                        :class="{ 'is-invalid': errors.name }"
                        id="name" 
                        placeholder="Enter your full name"
                        v-model="registerForm.name">
                      <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
                    </div>
                    
                    <div class="col-xl-12">
                      <label for="email" class="form-label text-default">Email</label>
                      <input 
                        type="email" 
                        class="form-control form-control-lg"
                        :class="{ 'is-invalid': errors.email }"
                        id="email" 
                        placeholder="Enter your email"
                        v-model="registerForm.email">
                      <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
                    </div>
                    
                    <div class="col-xl-12">
                      <label for="password" class="form-label text-default">Password</label>
                      <input 
                        type="password" 
                        class="form-control form-control-lg"
                        :class="{ 'is-invalid': errors.password }"
                        id="password" 
                        placeholder="Enter password"
                        v-model="registerForm.password">
                      <div v-if="errors.password" class="invalid-feedback">{{ errors.password }}</div>
                    </div>
                    
                    <div class="col-xl-12 mb-2">
                      <label for="confirmPassword" class="form-label text-default">Confirm Password</label>
                      <input 
                        type="password" 
                        class="form-control form-control-lg"
                        :class="{ 'is-invalid': errors.confirmPassword }"
                        id="confirmPassword" 
                        placeholder="Confirm password"
                        v-model="registerForm.confirmPassword">
                      <div v-if="errors.confirmPassword" class="invalid-feedback">{{ errors.confirmPassword }}</div>
                    </div>
                    
                    <div class="col-xl-12 d-grid mt-2">
                      <button 
                        type="submit" 
                        class="btn btn-lg btn-primary"
                        :disabled="loading">
                        <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                        {{ loading ? 'Creating Account...' : 'Sign Up' }}
                      </button>
                    </div>
                  </div>
                </form>

                <div class="text-center">
                  <p class="text-muted mt-3">Already have an account? 
                    <router-link to="/auth/login" class="text-primary">Sign In</router-link>
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
