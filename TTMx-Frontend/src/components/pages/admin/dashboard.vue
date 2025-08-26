<script>
import Pageheader from '../../../shared/components/pageheader/pageheader.vue';
import { authService } from '../../../services/auth.js';

export default {
  data() {
    return {
      dataToPass: {
        title: "Admin",
        currentpage: "Dashboard",
        activepage: "Admin Dashboard"
      },
      adminStats: {
        totalUsers: 1250,
        totalOrders: 5687,
        totalRevenue: 45890.75,
        activeProviders: 3,
        pendingOrders: 23,
        completedToday: 156
      },
      recentUsers: [
        { id: 1, name: 'John Doe', email: 'john@example.com', joined: '2025-01-15', status: 'active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', joined: '2025-01-14', status: 'active' }
      ],
      systemAlerts: [
        { type: 'warning', message: 'Provider 2 (VinaSmm) balance is low', time: '5 minutes ago' },
        { type: 'info', message: '23 orders are pending processing', time: '10 minutes ago' }
      ]
    };
  },
  components: {
    Pageheader
  },
  mounted() {
    const user = authService.getCurrentUser();
    if (!user || (user.role !== 'admin' && user.role !== 'superadmin')) {
      this.$router.push('/auth/login');
    }
  }
};
</script>

<template>
  <div>
    <Pageheader :propData="dataToPass" />
    
    <!-- Admin Stats -->
    <div class="row mb-4">
      <div class="col-xxl-2 col-lg-4 col-md-6">
        <div class="card custom-card">
          <div class="card-body text-center">
            <i class="bx bx-users fs-30 text-primary mb-2"></i>
            <h4>{{ adminStats.totalUsers.toLocaleString() }}</h4>
            <p class="text-muted mb-0">Total Users</p>
          </div>
        </div>
      </div>
      <div class="col-xxl-2 col-lg-4 col-md-6">
        <div class="card custom-card">
          <div class="card-body text-center">
            <i class="bx bx-shopping-bag fs-30 text-success mb-2"></i>
            <h4>{{ adminStats.totalOrders.toLocaleString() }}</h4>
            <p class="text-muted mb-0">Total Orders</p>
          </div>
        </div>
      </div>
      <div class="col-xxl-2 col-lg-4 col-md-6">
        <div class="card custom-card">
          <div class="card-body text-center">
            <i class="bx bx-dollar fs-30 text-warning mb-2"></i>
            <h4>${{ adminStats.totalRevenue.toLocaleString() }}</h4>
            <p class="text-muted mb-0">Total Revenue</p>
          </div>
        </div>
      </div>
      <div class="col-xxl-2 col-lg-4 col-md-6">
        <div class="card custom-card">
          <div class="card-body text-center">
            <i class="bx bx-server fs-30 text-info mb-2"></i>
            <h4>{{ adminStats.activeProviders }}</h4>
            <p class="text-muted mb-0">Active Providers</p>
          </div>
        </div>
      </div>
      <div class="col-xxl-2 col-lg-4 col-md-6">
        <div class="card custom-card">
          <div class="card-body text-center">
            <i class="bx bx-time fs-30 text-danger mb-2"></i>
            <h4>{{ adminStats.pendingOrders }}</h4>
            <p class="text-muted mb-0">Pending Orders</p>
          </div>
        </div>
      </div>
      <div class="col-xxl-2 col-lg-4 col-md-6">
        <div class="card custom-card">
          <div class="card-body text-center">
            <i class="bx bx-check-circle fs-30 text-success mb-2"></i>
            <h4>{{ adminStats.completedToday }}</h4>
            <p class="text-muted mb-0">Completed Today</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Admin Actions -->
    <div class="row mb-4">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">Admin Quick Actions</div>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-lg-2 col-md-4">
                <router-link to="/admin/api-providers" class="btn btn-outline-primary w-100">
                  <i class="bx bx-server me-2"></i>API Providers
                </router-link>
              </div>
              <div class="col-lg-2 col-md-4">
                <router-link to="/admin/payment-gateways" class="btn btn-outline-success w-100">
                  <i class="bx bx-credit-card me-2"></i>Payment Gateways
                </router-link>
              </div>
              <div class="col-lg-2 col-md-4">
                <router-link to="/admin/users" class="btn btn-outline-info w-100">
                  <i class="bx bx-users me-2"></i>Manage Users
                </router-link>
              </div>
              <div class="col-lg-2 col-md-4">
                <router-link to="/admin/orders" class="btn btn-outline-warning w-100">
                  <i class="bx bx-list-ul me-2"></i>All Orders
                </router-link>
              </div>
              <div class="col-lg-2 col-md-4">
                <button class="btn btn-outline-secondary w-100">
                  <i class="bx bx-chart me-2"></i>Reports
                </button>
              </div>
              <div class="col-lg-2 col-md-4">
                <button class="btn btn-outline-danger w-100">
                  <i class="bx bx-cog me-2"></i>Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- System Alerts & Recent Users -->
    <div class="row">
      <div class="col-xl-6">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">System Alerts</div>
          </div>
          <div class="card-body">
            <div v-for="alert in systemAlerts" :key="alert.message" 
                 :class="`alert alert-${alert.type === 'warning' ? 'warning' : 'info'} d-flex align-items-center`">
              <i :class="`bx ${alert.type === 'warning' ? 'bx-error' : 'bx-info-circle'} me-2`"></i>
              <div class="flex-fill">
                <div>{{ alert.message }}</div>
                <small class="text-muted">{{ alert.time }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-xl-6">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">Recent Users</div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table text-nowrap">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Joined</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in recentUsers" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.joined }}</td>
                    <td>
                      <span class="badge bg-success-transparent">{{ user.status }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
