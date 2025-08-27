import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(localStorage.getItem('auth_token') || null)
  const loading = ref(false)

  const isAuthenticated = computed(() => !!token.value && !!user.value)
  const isAdmin = computed(() => user.value?.role === 'admin' || user.value?.role === 'superadmin')
  const isSuperAdmin = computed(() => user.value?.role === 'superadmin')

  // Set up axios defaults
  if (token.value) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
  }

  const setToken = (newToken) => {
    token.value = newToken
    if (newToken) {
      localStorage.setItem('auth_token', newToken)
      axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`
    } else {
      localStorage.removeItem('auth_token')
      delete axios.defaults.headers.common['Authorization']
    }
  }

  const setUser = (userData) => {
    user.value = userData
  }

  const login = async (credentials) => {
    try {
      loading.value = true
      const response = await axios.post('/api/auth/login', credentials)
      
      if (response.data.success) {
        const { user: userData, tokens } = response.data.data
        setUser(userData)
        setToken(tokens.accessToken)
        return { success: true }
      }
      
      return { success: false, message: response.data.error }
    } catch (error) {
      console.error('Login error:', error)
      return { 
        success: false, 
        message: error.response?.data?.error || 'Login failed' 
      }
    } finally {
      loading.value = false
    }
  }

  const register = async (userData) => {
    try {
      loading.value = true
      const response = await axios.post('/api/auth/register', userData)
      
      if (response.data.success) {
        const { user: newUser, tokens } = response.data.data
        setUser(newUser)
        setToken(tokens.accessToken)
        return { success: true }
      }
      
      return { success: false, message: response.data.error }
    } catch (error) {
      console.error('Registration error:', error)
      return { 
        success: false, 
        message: error.response?.data?.error || 'Registration failed' 
      }
    } finally {
      loading.value = false
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
  }

  const validateToken = async () => {
    if (!token.value) return false
    
    try {
      const response = await axios.get('/api/auth/me')
      if (response.data.success) {
        setUser(response.data.data)
        return true
      }
    } catch (error) {
      console.error('Token validation failed:', error)
      logout()
    }
    return false
  }

  const updateProfile = async (profileData) => {
    try {
      loading.value = true
      const response = await axios.put('/api/auth/profile', profileData)
      
      if (response.data.success) {
        setUser(response.data.data)
        return { success: true }
      }
      
      return { success: false, message: response.data.error }
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.error || 'Update failed' 
      }
    } finally {
      loading.value = false
    }
  }

  return {
    user,
    token,
    loading,
    isAuthenticated,
    isAdmin,
    isSuperAdmin,
    login,
    register,
    logout,
    validateToken,
    updateProfile
  }
})
