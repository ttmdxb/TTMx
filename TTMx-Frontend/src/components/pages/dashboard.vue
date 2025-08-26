<script>
import Pageheader from '../../shared/components/pageheader/pageheader.vue';
import { authService } from '../../services/auth.js';

export default {
  data() {
    return {
      dataToPass: {
        title: "Dashboard",
        currentpage: "Overview",
        activepage: "User Dashboard"
      },
      user: null,
      userStats: {
        totalOrders: 24,
        walletBalance: 127.50,
        activeServices: 8,
        completedOrders: 18
      },
      recentOrders: [
        {
          id: 'ORD001',
          service: 'Instagram Followers',
          quantity: 1000,
          status: 'Completed',
          platform: 'instagram',
          date: '2025-01-15'
        },
        {
          id: 'ORD002',
          service: 'TikTok Likes',
          quantity: 500,
          status: 'Processing',
          platform: 'tiktok',
          date: '2025-01-15'
        }
      ],
      quickActions: [
        { name: 'Instagram Services', route: '/services/instagram', icon: 'bxl-instagram', color: 'primary' },
        { name: 'Add Funds', route: '/wallet/add-funds', icon: 'bx-wallet', color: 'success' },
        { name: 'View Orders', route: '/services/orders', icon: 'bx-list-ul', color: 'info' },
        { name: 'Support', route: '/support/tickets', icon: 'bx-support', color: 'warning' }
      ]
    };
  },
  components: {
    Pageheader
  },
  mounted() {
    this.user = authService.getCurrentUser();
    if (!this.user) {
      this.$router.push('/auth/login');
    }
  },
  methods: {
    getStatusColor(status) {
      switch(status) {
        case 'Completed': return 'success';
        case 'Processing': return 'warning';
        case 'Pending': return 'info';
        default: return 'secondary';
      }
    }
  }
};
</script>

<template>
  <div>
    <Pageheader :propData="dataToPass" />
    
    <!-- Welcome Section -->
    <div class="row mb-4">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="avatar avatar-lg avatar-rounded bg-primary me-3">
                <span class="avatar-initials fs-16">{{ user?.name?.charAt(0) || 'U' }}</span>
              </div>
              <div>
                <h5 class="mb-1">Welcome back, {{ user?.name || 'User' }}!</h5>
                <p class="text-muted mb-0">Here's what's happening with your social media growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="row mb-4">
      <div class="col-xxl-3 col-lg-6 col-md-6">
        <div class="card custom-card">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between">
              <div>
                <div class="mb-2 text-muted">Total Orders</div>
                <h3 class="fw-semibold mb-0 text-primary">{{ userStats.totalOrders }}</h3>
              </div>
              <div class="avatar avatar-md bg-primary-transparent">
                <i class="bx bx-shopping-bag fs-18"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-xxl-3 col-lg-6 col-md-6">
        <div class="card custom-card">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between">
              <div>
                <div class="mb-2 text-muted">Wallet Balance</div>
                <h3 class="fw-semibold mb-0 text-success">${{ userStats.walletBalance.toFixed(2) }}</h3>
              </div>
              <div class="avatar avatar-md bg-success-transparent">
                <i class="bx bx-wallet fs-18"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-xxl-3 col-lg-6 col-md-6">
        <div class="card custom-card">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between">
              <div>
                <div class="mb-2 text-muted">Active Services</div>
                <h3 class="fw-semibold mb-0 text-info">{{ userStats.activeServices }}</h3>
              </div>
              <div class="avatar avatar-md bg-info-transparent">
                <i class="bx bx-broadcast fs-18"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-xxl-3 col-lg-6 col-md-6">
        <div class="card custom-card">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between">
              <div>
                <div class="mb-2 text-muted">Completed Orders</div>
                <h3 class="fw-semibold mb-0 text-warning">{{ userStats.completedOrders }}</h3>
              </div>
              <div class="avatar avatar-md bg-warning-transparent">
                <i class="bx bx-check-circle fs-18"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="row mb-4">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">Quick Actions</div>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-lg-3 col-md-6" v-for="action in quickActions" :key="action.name">
                <router-link :to="action.route" class="text-decoration-none">
                  <div class="card border hover-card">
                    <div class="card-body text-center">
                      <i :class="`${action.icon} fs-30 text-${action.color} mb-2`"></i>
                      <h6 class="mb-0">{{ action.name }}</h6>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Orders -->
    <div class="row">
      <div class="col-xl-8">
        <div class="card custom-card">
          <div class="card-header d-flex justify-content-between">
            <div class="card-title">Recent Orders</div>
            <router-link to="/services/orders" class="btn btn-sm btn-primary">View All</router-link>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table text-nowrap">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Service</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="order in recentOrders" :key="order.id">
                    <td><span class="fw-semibold">{{ order.id }}</span></td>
                    <td>{{ order.service }}</td>
                    <td>{{ order.quantity.toLocaleString() }}</td>
                    <td>
                      <span :class="`badge bg-${getStatusColor(order.status)}-transparent`">
                        {{ order.status }}
                      </span>
                    </td>
                    <td>{{ order.date }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-xl-4">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">Account Overview</div>
          </div>
          <div class="card-body">
            <div class="d-flex align-items-center mb-3">
              <div class="avatar avatar-sm bg-success-transparent me-3">
                <i class="bx bx-user fs-14"></i>
              </div>
              <div>
                <div class="fw-semibold">{{ user?.email }}</div>
                <small class="text-muted">Account Email</small>
              </div>
            </div>
            <div class="d-flex align-items-center mb-3">
              <div class="avatar avatar-sm bg-info-transparent me-3">
                <i class="bx bx-calendar fs-14"></i>
              </div>
              <div>
                <div class="fw-semibold">{{ user?.created_at || 'Recently' }}</div>
                <small class="text-muted">Member Since</small>
              </div>
            </div>
            <router-link to="/profile/settings" class="btn btn-outline-primary btn-sm w-100">
              Manage Account
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hover-card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.hover-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
</style>
