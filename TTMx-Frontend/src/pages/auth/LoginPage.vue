<template>
  <div class="login-page">
    <div class="container-fluid">
      <div class="row min-vh-100">
        <!-- Left Side - Branding -->
        <div class="col-lg-6 d-none d-lg-flex align-items-center justify-content-center bg-primary">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bold mb-4">TTMx</h1>
            <p class="lead mb-4">Professional Social Media Marketing Platform</p>
            <div class="features-list">
              <div class="feature-item mb-3">
                <i class="fas fa-chart-line fa-2x mb-2"></i>
                <h5>Boost Your Growth</h5>
                <p>Instagram, TikTok, YouTube & More</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Login Form -->
        <div class="col-lg-6 d-flex align-items-center justify-content-center">
          <div class="login-form-container">
            <div class="text-center mb-4">
              <h2 class="fw-bold">Welcome Back</h2>
              <p class="text-muted">Sign in to your TTMx account</p>
            </div>

            <form @submit.prevent="handleLogin" class="login-form">
              <!-- Login Method Toggle -->
              <div class="login-method-toggle mb-4">
                <div class="btn-group w-100" role="group">
                  <input 
                    type="radio" 
                    class="btn-check" 
                    name="loginMethod" 
                    id="username" 
                    value="username"
                    v-model="loginMethod"
                  />
                  <label class="btn btn-outline-primary" for="username">
                    <i class="fas fa-user me-1"></i>Username
                  </label>

                  <input 
                    type="radio" 
                    class="btn-check" 
                    name="loginMethod" 
                    id="email" 
                    value="email"
                    v-model="loginMethod"
                  />
                  <label class="btn btn-outline-primary" for="email">
                    <i class="fas fa-envelope me-1"></i>Email
                  </label>

                  <input 
                    type="radio" 
                    class="btn-check" 
                    name="loginMethod" 
                    id="phone" 
                    value="phone"
                    v-model="loginMethod"
                  />
                  <label class="btn btn-outline-primary" for="phone">
                    <i class="fas fa-phone me-1"></i>Phone
                  </label>
                </div>
              </div>

              <!-- Dynamic Input Field -->
              <div class="mb-3">
                <label class="form-label">{{ getInputLabel() }}</label>
                <div class="input-group">
                  <span class="input-group-text">
                    <i :class="getInputIcon()"></i>
                  </span>
                  <input 
                    :type="getInputType()"
                    class="form-control"
                    :placeholder="getPlaceholder()"
                    v-model="formData.identifier"
                    required
                  />
                </div>
              </div>

              <!-- Password Field -->
              <div class="mb-4">
                <label class="form-label">Password</label>
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="fas fa-lock"></i>
                  </span>
                  <input 
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control"
                    placeholder="Enter your password"
                    v-model="formData.password"
                    required
                  />
                  <button 
                    type="button" 
                    class="btn btn-outline-secondary"
                    @click="showPassword = !showPassword"
                  >
                    <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                  </button>
                </div>
              </div>

              <!-- Remember Me & Forgot Password -->
              <div class="row mb-4">
                <div class="col-6">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="rememberMe" v-model="rememberMe">
                    <label class="form-check-label" for="rememberMe">
                      Remember me
                    </label>
                  </div>
                </div>
                <div class="col-6 text-end">
                  <router-link to="/forgot-password" class="text-decoration-none">
                    Forgot Password?
                  </router-link>
                </div>
              </div>

              <!-- Error Message -->
              <div v-if="error" class="alert alert-danger" role="alert">
                <i class="fas fa-exclamation-circle me-2"></i>
                {{ error }}
              </div>

              <!-- Login Button -->
              <button 
                type="submit" 
                class="btn btn-primary w-100 py-2 mb-3"
                :disabled="loading"
              >
                <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                <i v-else class="fas fa-sign-in-alt me-2"></i>
                {{ loading ? 'Signing in...' : 'Sign In' }}
              </button>

              <!-- Quick Login Buttons for Testing -->
              <div v-if="isDevelopment" class="quick-login mb-3">
                <p class="text-muted text-center small mb-2">Quick Login (Development Only)</p>
                <div class="d-grid gap-2">
                  <button 
                    type="button" 
                    class="btn btn-sm btn-outline-success"
                    @click="quickLogin('admin')"
                  >
                    🔑 Super Admin (admin/admin123)
                  </button>
                  <button 
                    type="button" 
                    class="btn btn-sm btn-outline-warning"
                    @click="quickLogin('manager')"
                  >
                    👔 Manager (manager/manager123)
                  </button>
                  <button 
                    type="button" 
                    class="btn btn-sm btn-outline-info"
                    @click="quickLogin('testuser')"
                  >
                    👤 Test User (testuser/test123)
                  </button>
                </div>
              </div>

              <!-- Register Link -->
              <div class="text-center">
                <p class="mb-0">
                  Don't have an account? 
                  <router-link to="/register" class="text-decoration-none fw-bold">
                    Create Account
                  </router-link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const loginMethod = ref('username')
const showPassword = ref(false)
const rememberMe = ref(false)
const loading = ref(false)
const error = ref('')

const formData = ref({
  identifier: '',
  password: ''
})

const isDevelopment = computed(() => {
  return import.meta.env.DEV || import.meta.env.NODE_ENV === 'development'
})

const getInputLabel = () => {
  const labels = {
    username: 'Username',
    email: 'Email Address',
    phone: 'Phone Number'
  }
  return labels[loginMethod.value]
}

const getInputIcon = () => {
  const icons = {
    username: 'fas fa-user',
    email: 'fas fa-envelope',
    phone: 'fas fa-phone'
  }
  return icons[loginMethod.value]
}

const getInputType = () => {
  const types = {
    username: 'text',
    email: 'email',
    phone: 'tel'
  }
  return types[loginMethod.value]
}

const getPlaceholder = () => {
  const placeholders = {
    username: 'Enter your username',
    email: 'Enter your email address',
    phone: 'Enter your phone number (+971501234567)'
  }
  return placeholders[loginMethod.value]
}

const handleLogin = async () => {
  try {
    loading.value = true
    error.value = ''

    const result = await authStore.login({
      identifier: formData.value.identifier,
      password: formData.value.password
    })

    if (result.success) {
      // Check if user needs verification
      if (!authStore.isVerified) {
        router.push('/verify-account')
        return
      }

      // Redirect based on role
      if (authStore.isAdmin) {
        router.push('/admin/dashboard')
      } else {
        router.push('/dashboard')
      }
    } else {
      error.value = result.message
    }
  } catch (err) {
    error.value = 'Login failed. Please try again.'
  } finally {
    loading.value = false
  }
}

const quickLogin = async (userType) => {
  const credentials = {
    admin: { identifier: 'admin', password: 'admin123' },
    manager: { identifier: 'manager', password: 'manager123' },
    testuser: { identifier: 'testuser', password: 'test123' }
  }

  formData.value = credentials[userType]
  await handleLogin()
}
</script>

<style scoped>
.login-page {
  background-color: #f8f9fa;
}

.login-form-container {
  max-width: 400px;
  width: 100%;
  padding: 2rem;
}

.login-method-toggle .btn-check:checked + .btn {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
  color: white;
}

.quick-login {
  border-top: 1px solid #dee2e6;
  padding-top: 1rem;
}

.bg-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
}

.feature-item {
  opacity: 0.9;
}

@media (max-width: 991.98px) {
  .login-form-container {
    padding: 1rem;
  }
}
</style>

