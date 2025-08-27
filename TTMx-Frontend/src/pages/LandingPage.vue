<template>
  <div class="landing-page">
    <div class="hero-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="hero-title">TTMx</h1>
            <p class="hero-subtitle">Professional Social Media Marketing Platform</p>
            <p class="hero-description">
              Boost your social media presence with our premium services for Instagram, TikTok, YouTube, and more.
            </p>
            <div class="hero-buttons">
              <router-link to="/register" class="btn btn-primary btn-lg me-3">Get Started</router-link>
              <router-link to="/login" class="btn btn-outline-primary btn-lg">Login</router-link>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-image">
              <i class="fas fa-chart-line fa-10x text-primary"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Landing page logic here
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
}

.hero-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-buttons {
  margin-bottom: 2rem;
}

.hero-image {
  text-align: center;
  padding: 2rem;
}
</style>
