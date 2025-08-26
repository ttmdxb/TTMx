<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      features: [
        {
          icon: 'bx bxl-instagram',
          title: 'Instagram Growth',
          description: 'Boost your Instagram presence with real followers, likes, and views',
          color: 'primary'
        },
        {
          icon: 'bx bxl-tiktok',
          title: 'TikTok Services',
          description: 'Grow your TikTok account with genuine followers and engagement',
          color: 'dark'
        },
        {
          icon: 'bx bxl-youtube',
          title: 'YouTube Boost',
          description: 'Increase subscribers, views, and watch time for your YouTube channel',
          color: 'danger'
        },
        {
          icon: 'bx bx-shield-check',
          title: 'Safe & Secure',
          description: 'All services are 100% safe with no risk to your account',
          color: 'success'
        },
        {
          icon: 'bx bx-support',
          title: '24/7 Support',
          description: 'Get help anytime with our dedicated customer support team',
          color: 'info'
        },
        {
          icon: 'bx bx-bolt',
          title: 'Instant Delivery',
          description: 'Fast processing and delivery of all your social media orders',
          color: 'warning'
        }
      ],
      stats: [
        { number: '50K+', label: 'Happy Customers' },
        { number: '1M+', label: 'Orders Completed' },
        { number: '99.9%', label: 'Success Rate' },
        { number: '24/7', label: 'Support Available' }
      ],
      pricing: [
        {
          name: 'Starter',
          price: 10,
          features: ['Instagram Services', 'Basic Support', '1K-10K Orders', 'Standard Delivery']
        },
        {
          name: 'Professional',
          price: 50,
          features: ['All Platforms', 'Priority Support', '10K-100K Orders', 'Fast Delivery'],
          popular: true
        },
        {
          name: 'Enterprise',
          price: 200,
          features: ['Custom Solutions', 'Dedicated Manager', 'Unlimited Orders', 'Instant Delivery']
        }
      ]
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<template>
  <div class="landing-page">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-white shadow-sm">
      <div class="container">
        <a class="navbar-brand fw-bold text-primary fs-3" href="#">TTMx</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item">
              <a class="nav-link" href="#features">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#pricing">Pricing</a>
            </li>
            <li class="nav-item ms-3">
              <router-link to="/auth/login" class="btn btn-outline-primary me-2">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/auth/register" class="btn btn-primary">Get Started</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center min-vh-100 py-5">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold mb-4">
              Grow Your Social Media 
              <span class="text-primary">Presence</span>
            </h1>
            <p class="lead mb-4">
              Professional social media marketing services for Instagram, TikTok, and YouTube. 
              Boost your followers, likes, views, and engagement with real, high-quality services.
            </p>
            <div class="d-flex gap-3">
              <router-link to="/auth/register" class="btn btn-primary btn-lg">
                Start Growing Now
              </router-link>
              <button class="btn btn-outline-secondary btn-lg" @click="scrollToSection('features')">
                Learn More
              </button>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-image text-center">
              <div class="social-icons-float">
                <i class="bx bxl-instagram text-primary fs-1"></i>
                <i class="bx bxl-tiktok text-dark fs-1"></i>
                <i class="bx bxl-youtube text-danger fs-1"></i>
                <i class="bx bxl-facebook text-info fs-1"></i>
                <i class="bx bxl-twitter text-primary fs-1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section py-5 bg-primary text-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0" v-for="stat in stats" :key="stat.label">
            <div class="text-center">
              <h3 class="display-6 fw-bold mb-2">{{ stat.number }}</h3>
              <p class="mb-0">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features-section py-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="display-5 fw-bold mb-4">Why Choose TTMx?</h2>
            <p class="lead">
              We provide the most reliable and effective social media marketing services 
              to help you achieve your growth goals.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4" v-for="feature in features" :key="feature.title">
            <div class="feature-card text-center p-4 h-100">
              <i :class="`${feature.icon} fs-1 text-${feature.color} mb-3`"></i>
              <h5 class="fw-semibold mb-3">{{ feature.title }}</h5>
              <p class="text-muted">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section py-5 bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="display-5 fw-bold mb-4">Our Services</h2>
            <p class="lead">
              Comprehensive social media growth solutions for all major platforms
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="service-card p-4">
              <i class="bx bxl-instagram fs-1 text-primary mb-3"></i>
              <h5 class="fw-semibold mb-3">Instagram Services</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><i class="bx bx-check text-success me-2"></i>Followers</li>
                <li class="mb-2"><i class="bx bx-check text-success me-2"></i>Likes & Views</li>
                <li class="mb-2"><i class="bx bx-check text-success me-2"></i>Story Views</li>
                <li class="mb-2"><i class="bx bx-check text-success me-2"></i>Comments</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="service-card p-4">
              <i class="bx bxl-tiktok fs-1 text-dark mb-3"></i>
              <h5 class="fw-semibold mb-3">TikTok Services</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><i class="bx bx-check text-success me-2"></i>Followers</li>
                <li class="mb-2"><i class="bx bx-check text-success me-2"></i>Likes & Shares</li>
                <li class="mb-2"><i class="bx bx-check text-success me-2"></i>Video Views</li>
                <li class="mb-2"><i class="bx bx-check text-success me-2"></i>Comments</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="service-card p-4">
              <i class="bx bxl-youtube fs-1 text-danger mb-3"></i>
              <h5 class="fw-semibold mb-3">YouTube Services</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><i class="bx bx-check text-success me-2"></i>Subscribers</li>
                <li class="mb-2"><i class="bx bx-check text-success me-2"></i>Video Views</li>
                <li class="mb-2"><i class="bx bx-check text-success me-2"></i>Likes & Comments</li>
                <li class="mb-2"><i class="bx bx-check text-success me-2"></i>Watch Time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="pricing-section py-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="display-5 fw-bold mb-4">Simple Pricing</h2>
            <p class="lead">
              Choose the plan that fits your social media growth needs
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 mb-4" v-for="plan in pricing" :key="plan.name">
            <div :class="`pricing-card text-center p-4 h-100 ${plan.popular ? 'border-primary popular' : ''}`">
              <div v-if="plan.popular" class="popular-badge">Most Popular</div>
              <h5 class="fw-semibold mb-3">{{ plan.name }}</h5>
              <div class="price-display mb-4">
                <span class="display-4 fw-bold">${{ plan.price }}</span>
                <span class="text-muted">/month</span>
              </div>
              <ul class="list-unstyled mb-4">
                <li class="mb-2" v-for="feature in plan.features" :key="feature">
                  <i class="bx bx-check text-success me-2"></i>{{ feature }}
                </li>
              </ul>
              <router-link to="/auth/register" :class="`btn w-100 ${plan.popular ? 'btn-primary' : 'btn-outline-primary'}`">
                Get Started
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py-5 bg-primary text-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="display-5 fw-bold mb-4">Ready to Grow Your Social Media?</h2>
            <p class="lead mb-4">
              Join thousands of satisfied customers who trust TTMx for their social media growth.
            </p>
            <router-link to="/auth/register" class="btn btn-light btn-lg">
              Start Your Journey Today
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer py-5 bg-dark text-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-4">
            <h5 class="fw-bold text-primary mb-3">TTMx</h5>
            <p class="text-light">
              Professional social media marketing services to help you grow your online presence.
            </p>
          </div>
          <div class="col-lg-2 col-md-6 mb-4">
            <h6 class="fw-semibold mb-3">Services</h6>
            <ul class="list-unstyled">
              <li><a href="#" class="text-light text-decoration-none">Instagram</a></li>
              <li><a href="#" class="text-light text-decoration-none">TikTok</a></li>
              <li><a href="#" class="text-light text-decoration-none">YouTube</a></li>
              <li><a href="#" class="text-light text-decoration-none">Facebook</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4">
            <h6 class="fw-semibold mb-3">Support</h6>
            <ul class="list-unstyled">
              <li><a href="#" class="text-light text-decoration-none">Help Center</a></li>
              <li><a href="#" class="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="#" class="text-light text-decoration-none">FAQ</a></li>
              <li><a href="#" class="text-light text-decoration-none">Live Chat</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4">
            <h6 class="fw-semibold mb-3">Legal</h6>
            <ul class="list-unstyled">
              <li><a href="#" class="text-light text-decoration-none">Terms of Service</a></li>
              <li><a href="#" class="text-light text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" class="text-light text-decoration-none">Refund Policy</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4">
            <h6 class="fw-semibold mb-3">Connect</h6>
            <div class="social-links">
              <a href="#" class="text-primary me-3 fs-4"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="text-primary me-3 fs-4"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="text-primary me-3 fs-4"><i class="bx bxl-instagram"></i></a>
            </div>
          </div>
        </div>
        <hr class="my-4">
        <div class="row">
          <div class="col-md-6">
            <p class="mb-0">&copy; 2
025 TTMx. All rights reserved.</p>
         </div>
         <div class="col-md-6 text-end">
           <p class="mb-0">Made with ❤️ for social media growth</p>
         </div>
       </div>
     </div>
   </footer>
 </div>
</template>

<style scoped>
.landing-page {
 overflow-x: hidden;
}

.hero-section {
 background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
 color: white;
}

.social-icons-float {
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 gap: 2rem;
 padding: 2rem;
}

.social-icons-float i {
 animation: float 3s ease-in-out infinite;
 background: white;
 padding: 1rem;
 border-radius: 50%;
 box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.social-icons-float i:nth-child(2) {
 animation-delay: -1s;
}

.social-icons-float i:nth-child(3) {
 animation-delay: -2s;
}

@keyframes float {
 0%, 100% { transform: translateY(0px); }
 50% { transform: translateY(-20px); }
}

.feature-card {
 background: white;
 border-radius: 15px;
 box-shadow: 0 5px 15px rgba(0,0,0,0.08);
 transition: transform 0.3s ease;
}

.feature-card:hover {
 transform: translateY(-5px);
 box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.service-card {
 background: white;
 border-radius: 15px;
 box-shadow: 0 5px 15px rgba(0,0,0,0.08);
 transition: transform 0.3s ease;
}

.service-card:hover {
 transform: translateY(-5px);
}

.pricing-card {
 background: white;
 border-radius: 15px;
 border: 2px solid #e9ecef;
 transition: transform 0.3s ease;
 position: relative;
}

.pricing-card.popular {
 transform: scale(1.05);
 box-shadow: 0 10px 25px rgba(102, 126, 234, 0.15);
}

.popular-badge {
 position: absolute;
 top: -12px;
 left: 50%;
 transform: translateX(-50%);
 background: #667eea;
 color: white;
 padding: 0.5rem 1rem;
 border-radius: 20px;
 font-size: 0.8rem;
 font-weight: 600;
}

.pricing-card:hover {
 transform: translateY(-5px);
}

.pricing-card.popular:hover {
 transform: translateY(-5px) scale(1.05);
}

.navbar {
 backdrop-filter: blur(10px);
}

.stats-section {
 background: linear-gradient(45deg, #667eea, #764ba2);
}

.cta-section {
 background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
