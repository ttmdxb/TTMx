<template>
  <div class="register-page">
    <div class="container-fluid">
      <div class="row min-vh-100">
        <!-- Left Side - Form -->
        <div class="col-lg-8 d-flex align-items-center justify-content-center">
          <div class="register-form-container">
            <div class="text-center mb-4">
              <h2 class="fw-bold">Create Your Account</h2>
              <p class="text-muted">Join TTMx and start growing your social media presence</p>
            </div>

            <!-- Step Indicator -->
            <div class="step-indicator mb-4">
              <div class="steps">
                <div class="step" :class="{ active: currentStep >= 1, completed: currentStep > 1 }">
                  <div class="step-number">1</div>
                  <div class="step-label">Basic Info</div>
                </div>
                <div class="step-line" :class="{ completed: currentStep > 1 }"></div>
                <div class="step" :class="{ active: currentStep >= 2, completed: currentStep > 2 }">
                  <div class="step-number">2</div>
                  <div class="step-label">Contact</div>
                </div>
                <div class="step-line" :class="{ completed: currentStep > 2 }"></div>
                <div class="step" :class="{ active: currentStep >= 3 }">
                  <div class="step-number">3</div>
                  <div class="step-label">Verify</div>
                </div>
              </div>
            </div>

            <form @submit.prevent="handleSubmit" class="register-form">
              <!-- Step 1: Basic Information -->
              <div v-if="currentStep === 1" class="step-content">
                <h5 class="mb-3">Basic Information</h5>
                
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label">First Name</label>
                    <input 
                      type="text" 
                      class="form-control"
                      v-model="formData.firstName"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Last Name</label>
                    <input 
                      type="text" 
                      class="form-control"
                      v-model="formData.lastName"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div class="mb-3">
                  <label class="form-label">Username *</label>
                  <div class="input-group">
                    <span class="input-group-text">@</span>
                    <input 
                      type="text" 
                      class="form-control"
                      v-model="formData.username"
                      placeholder="Choose a username"
                      required
                    />
                  </div>
                  <div class="form-text">Username can only contain letters, numbers, and underscores</div>
                </div>

                <div class="mb-3">
                  <label class="form-label">Password *</label>
                  <div class="input-group">
                    <input 
                      :type="showPassword ? 'text' : 'password'"
                      class="form-control"
                      v-model="formData.password"
                      placeholder="Create a password"
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
                  <div class="form-text">Minimum 6 characters</div>
                </div>

                <div class="mb-4">
                  <label class="form-label">Confirm Password *</label>
                  <input 
                    type="password"
                    class="form-control"
                    v-model="confirmPassword"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>

              <!-- Step 2: Contact Information -->
              <div v-if="currentStep === 2" class="step-content">
                <h5 class="mb-3">Contact Information</h5>
                
                <div class="mb-3">
                  <label class="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    class="form-control"
                    v-model="formData.email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div class="mb-4">
                  <label class="form-label">Phone Number *</label>
                  <div class="input-group">
                    <select class="form-select" style="max-width: 100px;" v-model="selectedCountry">
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+92">🇵🇰 +92</option>
                      <option value="+966">🇸🇦 +966</option>
                    </select>
                    <input 
                      type="tel" 
                      class="form-control"
                      v-model="phoneNumber"
                      placeholder="501234567"
                      required
                    />
                  </div>
                  <div class="form-text">We'll send a verification code to this number</div>
                </div>
              </div>

              <!-- Step 3: Verification -->
              <div v-if="currentStep === 3" class="step-content">
                <h5 class="mb-3">Account Verification</h5>
                <div class="text-center mb-4">
                  <i class="fas fa-paper-plane fa-3x text-primary mb-3"></i>
                  <p>We've sent verification codes to:</p>
                  <div class="verification-sent">
                    <p><i class="fas fa-envelope text-primary"></i> {{ formData.email }}</p>
                    <p><i class="fas fa-phone text-success"></i> {{ formData.phoneNumber }}</p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Email Verification Code</label>
                    <input 
                      type="text" 
                      class="form-control text-center"
                      v-model="emailCode"
                      placeholder="000000"
                      maxlength="6"
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Phone Verification Code</label>
                    <input 
                      type="text" 
                      class="form-control text-center"
                      v-model="phoneCode"
                      placeholder="000000"
                      maxlength="6"
                    />
                  </div>
                </div>

                <div class="text-center mb-3">
                  <button 
                    type="button" 
                    class="btn btn-link"
                    @click="resendCodes"
                    :disabled="loading"
                  >
                    Didn't receive codes? Resend
                  </button>
                </div>
              </div>

              <!-- Error Message -->
              <div v-if="error" class="alert alert-danger" role="alert">
                <i class="fas fa-exclamation-circle me-2"></i>
                {{ error }}
              </div>

              <!-- Navigation Buttons -->
              <div class="step-navigation">
                <button 
                  v-if="currentStep > 1 && currentStep < 3"
                  type="button" 
                  class="btn btn-outline-secondary me-2"
                  @click="previousStep"
                >
                  <i class="fas fa-arrow-left me-1"></i>
                  Previous
                </button>

                <button 
                  v-if="currentStep < 3"
                  type="button" 
                  class="btn btn-primary"
                  @click="nextStep"
                  :disabled="!canProceed"
                >
                  Next
                  <i class="fas fa-arrow-right ms-1"></i>
                </button>

                <button 
                  v-if="currentStep === 3"
                  type="submit" 
                  class="btn btn-success w-100"
                  :disabled="loading || !emailCode || !phoneCode"
                >
                  <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                  <i v-else class="fas fa-check me-2"></i>
                  {{ loading ? 'Verifying...' : 'Complete Registration' }}
                </button>
              </div>

              <!-- Login Link -->
              <div class="text-center mt-4">
                <p class="mb-0">
                  Already have an account? 
                  <router-link to="/login" class="text-decoration-none fw-bold">
                    Sign In
                  </router-link>
                </p>
              </div>
            </form>
          </div>
        </div>

        <!-- Right Side - Info -->
        <div class="col-lg-4 d-none d-lg-flex align-items-center justify-content-center bg-gradient">
          <div class="text-center text-white p-4">
            <h3 class="mb-4">Why Choose TTMx?</h3>
            <div class="feature-list">
              <div class="feature-item mb-3">
                <i class="fas fa-shield-alt fa-2x mb-2"></i>
                <h5>Secure & Reliable</h5>
                <p>Your data is protected with industry-standard security</p>
              </div>
              <div class="feature-item mb-3">
                <i class="fas fa-rocket fa-2x mb-2"></i>
                <h5>Fast Delivery</h5>
                <p>Get results quickly with our premium service network</p>
              </div>
              <div class="feature-item mb-3">
                <i class="fas fa-headset fa-2x mb-2"></i>
                <h5>24/7 Support</h5>
                <p>Our team is here to help you succeed</p>
              </div>
            </div>
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

const currentStep = ref(1)
const showPassword = ref(false)
const loading = ref(false)
const error = ref('')

const formData = ref({
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  phoneNumber: '',
  password: ''
})

const confirmPassword = ref('')
const selectedCountry = ref('+971')
const phoneNumber = ref('')
const emailCode = ref('')
const phoneCode = ref('')

// Computed properties
const canProceed = computed(() => {
  if (currentStep.value === 1) {
    return formData.value.username && 
           formData.value.password && 
           confirmPassword.value && 
           formData.value.password === confirmPassword.value
  }
  if (currentStep.value === 2) {
    return formData.value.email && phoneNumber.value
  }
  return false
})

// Update phone number when country or number changes
const updatePhoneNumber = () => {
  formData.value.phoneNumber = selectedCountry.value + phoneNumber.value
}

const nextStep = () => {
  if (currentStep.value === 1 && formData.value.password !== confirmPassword.value) {
    error.value = 'Passwords do not match'
    return
  }
  
  if (currentStep.value === 2) {
    updatePhoneNumber()
    registerUser()
    return
  }
  
  error.value = ''
  currentStep.value++
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
    error.value = ''
  }
}

const registerUser = async () => {
  try {
    loading.value = true
    error.value = ''

    const result = await authStore.register(formData.value)
    
    if (result.success) {
      if (result.requiresVerification) {
        currentStep.value = 3
      } else {
        router.push('/dashboard')
      }
    } else {
      error.value = result.message
    }
  } catch (err) {
    error.value = 'Registration failed. Please try again.'
  } finally {
    loading.value = false
  }
}

const handleSubmit = async () => {
  try {
    loading.value = true
    error.value = ''

    // Verify email code
    const emailResult = await authStore.verifyCode(formData.value.email, emailCode.value, 'email')
    if (!emailResult.success) {
      error.value = 'Invalid email verification code'
      return
    }

    // Verify phone code
    const phoneResult = await authStore.verifyCode(formData.value.phoneNumber, phoneCode.value, 'phone')
    if (!phoneResult.success) {
      error.value = 'Invalid phone verification code'
      return
    }

    // Registration complete
    router.push('/dashboard')
  } catch (err) {
    error.value = 'Verification failed. Please try again.'
  } finally {
    loading.value = false
  }
}

const resendCodes = async () => {
  try {
    await authStore.sendVerificationCode(formData.value.email, 'email')
    await authStore.sendVerificationCode(formData.value.phoneNumber, 'phone')
  } catch (err) {
    error.value = 'Failed to resend codes'
  }
}
</script>

<style scoped>
.register-page {
  background-color: #f8f9fa;
}

.register-form-container {
  max-width: 600px;
  width: 100%;
  padding: 2rem;
}

.step-indicator {
  margin-bottom: 2rem;
}

.steps {
  display: flex;
  align-items: center;
  justify-content: center;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.5;
}

.step.active {
  opacity: 1;
}

.step.completed {
  opacity: 1;
  color: #28a745;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 8px;
}

.step.active .step-number {
  background-color: #007bff;
  color: white;
}

.step.completed .step-number {
  background-color: #28a745;
  color: white;
}

.step-line {
  width: 80px;
  height: 2px;
  background-color: #e9ecef;
  margin: 0 10px;
  margin-top: -20px;
}

.step-line.completed {
  background-color: #28a745;
}

.step-label {
  font-size: 0.875rem;
  text-align: center;
}

.bg-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.verification-sent p {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin: 0.25rem 0;
}

@media (max-width: 991.98px) {
  .register-form-container {
    padding: 1rem;
  }
}
</style>
