<script>
import Pageheader from '../../../shared/components/pageheader/pageheader.vue';
import { authService } from '../../../services/auth.js';

export default {
  data() {
    return {
      dataToPass: {
        title: "SuperAdmin",
        currentpage: "Dashboard",
        activepage: "SuperAdmin Dashboard"
      },
      superAdminStats: {
        totalPlatforms: 1,
        totalAdmins: 5,
        totalRevenue: 125490.75,
        systemUptime: '99.9%',
        apiCalls: 1250000,
        errorRate: '0.1%'
      },
      platformOverview: [
        {
          name: 'TTMx Main',
          users: 1250,
          revenue: 45890.75,
          status: 'healthy',
          uptime: '100%'
        }
      ],
      systemMetrics: [
        { metric: 'CPU Usage', value: '45%', status: 'normal' },
        { metric: 'Memory Usage', value: '62%', status: 'normal' },
        { metric: 'Disk Usage', value: '34%', status: 'normal' },
        { metric: 'Network Traffic', value: '1.2GB/hr', status: 'high' }
      ]
    };
  },
  components: {
    Pageheader
  },
  mounted() {
    const user = authService.getCurrentUser();
    if (!user || user.role !== 'superadmin') {
      this.$router.push('/auth/login');
    }
  }
};
</script>

<template>
  <div>
    <Pageheader :propData="dataToPass" />
    
    <!-- SuperAdmin Stats -->
    <div class="row mb-4">
      <div class="col-xxl-2 col-lg-4 col-md-6">
        <div class="card custom-card border-primary">
          <div class="card-body text-center">
            <i class="bx bx-layer fs-30 text-primary mb-2"></i>
            <h4>{{ superAdminStats.totalPlatforms }}</h4>
            <p class="text-muted mb-0">Platforms</p>
          </div>
        </div>
      </div>
      <div class="col-xxl-2 col-lg-4 col-md-6">
        <div class="card custom-card">
          <div class="card-body text-center">
            <i class="bx bx-shield fs-30 text-success mb-2"></i>
            <h4>{{ superAdminStats.totalAdmins }}</h4>
            <p class="text-muted mb-0">Admins</p>
          </div>
        </div>
      </div>
      <div class="col-xxl-2 col-lg-4 col-md-6">
        <div class="card custom-card">
<div class="card-body text-center">
           <i class="bx bx-dollar fs-30 text-warning mb-2"></i>
           <h4>${{ superAdminStats.totalRevenue.toLocaleString() }}</h4>
           <p class="text-muted mb-0">Total Revenue</p>
         </div>
       </div>
     </div>
     <div class="col-xxl-2 col-lg-4 col-md-6">
       <div class="card custom-card">
         <div class="card-body text-center">
           <i class="bx bx-time fs-30 text-info mb-2"></i>
           <h4>{{ superAdminStats.systemUptime }}</h4>
           <p class="text-muted mb-0">System Uptime</p>
         </div>
       </div>
     </div>
     <div class="col-xxl-2 col-lg-4 col-md-6">
       <div class="card custom-card">
         <div class="card-body text-center">
           <i class="bx bx-server fs-30 text-danger mb-2"></i>
           <h4>{{ superAdminStats.apiCalls.toLocaleString() }}</h4>
           <p class="text-muted mb-0">API Calls</p>
         </div>
       </div>
     </div>
     <div class="col-xxl-2 col-lg-4 col-md-6">
       <div class="card custom-card">
         <div class="card-body text-center">
           <i class="bx bx-error-circle fs-30 text-secondary mb-2"></i>
           <h4>{{ superAdminStats.errorRate }}</h4>
           <p class="text-muted mb-0">Error Rate</p>
         </div>
       </div>
     </div>
   </div>

   <!-- SuperAdmin Controls -->
   <div class="row mb-4">
     <div class="col-xl-12">
       <div class="card custom-card border-danger">
         <div class="card-header bg-danger-transparent">
           <div class="card-title text-danger">SuperAdmin Controls</div>
         </div>
         <div class="card-body">
           <div class="row g-3">
             <div class="col-lg-2 col-md-4">
               <button class="btn btn-outline-primary w-100">
                 <i class="bx bx-cog me-2"></i>System Settings
               </button>
             </div>
             <div class="col-lg-2 col-md-4">
               <button class="btn btn-outline-success w-100">
                 <i class="bx bx-database me-2"></i>Database Admin
               </button>
             </div>
             <div class="col-lg-2 col-md-4">
               <button class="btn btn-outline-info w-100">
                 <i class="bx bx-shield me-2"></i>Manage Admins
               </button>
             </div>
             <div class="col-lg-2 col-md-4">
               <button class="btn btn-outline-warning w-100">
                 <i class="bx bx-server me-2"></i>Server Monitor
               </button>
             </div>
             <div class="col-lg-2 col-md-4">
               <button class="btn btn-outline-danger w-100">
                 <i class="bx bx-error me-2"></i>System Logs
               </button>
             </div>
             <div class="col-lg-2 col-md-4">
               <button class="btn btn-outline-secondary w-100">
                 <i class="bx bx-backup me-2"></i>Backup System
               </button>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>

   <!-- Platform Overview & System Metrics -->
   <div class="row">
     <div class="col-xl-6">
       <div class="card custom-card">
         <div class="card-header">
           <div class="card-title">Platform Overview</div>
         </div>
         <div class="card-body">
           <div class="table-responsive">
             <table class="table text-nowrap">
               <thead>
                 <tr>
                   <th>Platform</th>
                   <th>Users</th>
                   <th>Revenue</th>
                   <th>Status</th>
                   <th>Uptime</th>
                 </tr>
               </thead>
               <tbody>
                 <tr v-for="platform in platformOverview" :key="platform.name">
                   <td>{{ platform.name }}</td>
                   <td>{{ platform.users.toLocaleString() }}</td>
                   <td>${{ platform.revenue.toLocaleString() }}</td>
                   <td>
                     <span class="badge bg-success-transparent">{{ platform.status }}</span>
                   </td>
                   <td>{{ platform.uptime }}</td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
       </div>
     </div>
     
     <div class="col-xl-6">
       <div class="card custom-card">
         <div class="card-header">
           <div class="card-title">System Metrics</div>
         </div>
         <div class="card-body">
           <div v-for="metric in systemMetrics" :key="metric.metric" class="d-flex justify-content-between align-items-center mb-3">
             <div>
               <span class="fw-semibold">{{ metric.metric }}</span>
             </div>
             <div>
               <span :class="`badge bg-${metric.status === 'normal' ? 'success' : metric.status === 'high' ? 'warning' : 'danger'}-transparent`">
                 {{ metric.value }}
               </span>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>
