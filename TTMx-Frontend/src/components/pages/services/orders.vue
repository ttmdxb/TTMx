<script>
import Pageheader from '../../../shared/components/pageheader/pageheader.vue';
import { orderService } from '../../../services/orderService.js';

export default {
  data() {
    return {
      dataToPass: {
        title: "Services",
        currentpage: "Orders",
        activepage: "My Orders"
      },
      orders: [
        {
          id: 'ORD001',
          serviceId: 'IG_FOLLOWERS_001',
          service: 'Instagram Followers',
          platform: 'Instagram',
          link: 'https://instagram.com/user123',
          quantity: 1000,
          price: 14.48,
          status: 'Completed',
          progress: 100,
          startCount: 5420,
          currentCount: 6420,
          created: '2025-01-15 10:30:00',
          completed: '2025-01-15 14:20:00'
        },
        {
          id: 'ORD002',
          serviceId: 'IG_LIKES_001',
          service: 'Instagram Likes',
          platform: 'Instagram',
          link: 'https://instagram.com/p/xyz123/',
          quantity: 500,
          price: 1.11,
          status: 'Processing',
          progress: 65,
          startCount: 145,
          currentCount: 470,
          created: '2025-01-15 16:45:00',
          completed: null
        },
        {
          id: 'ORD003',
          serviceId: 'IG_VIEWS_001',
          service: 'Instagram Views',
          platform: 'Instagram',
          link: 'https://instagram.com/reel/abc456/',
          quantity: 2000,
          price: 1.60,
          status: 'Pending',
          progress: 0,
          startCount: 892,
          currentCount: 892,
          created: '2025-01-15 18:20:00',
          completed: null
        }
      ],
      filterStatus: 'all',
      selectedOrder: null,
      showDetailsModal: false
    };
  },
  components: {
    Pageheader
  },
  computed: {
    filteredOrders() {
      if (this.filterStatus === 'all') {
        return this.orders;
      }
      return this.orders.filter(order => order.status.toLowerCase() === this.filterStatus);
    }
  },
  methods: {
    getStatusColor(status) {
      switch(status) {
        case 'Completed': return 'success';
        case 'Processing': return 'warning';
        case 'Pending': return 'info';
        case 'Failed': return 'danger';
        case 'Cancelled': return 'secondary';
        default: return 'secondary';
      }
    },

    getPlatformIcon(platform) {
      switch(platform.toLowerCase()) {
        case 'instagram': return 'bxl-instagram';
        case 'tiktok': return 'bxl-tiktok';
        case 'youtube': return 'bxl-youtube';
        case 'facebook': return 'bxl-facebook';
        case 'twitter': return 'bxl-twitter';
        default: return 'bx-globe';
      }
    },

    viewOrderDetails(order) {
      this.selectedOrder = order;
      this.showDetailsModal = true;
    },

    async refreshOrderStatus(order) {
      try {
        const status = await orderService.getOrderStatus(order.id);
        order.status = status.status;
        order.progress = status.progress || 0;
        order.currentCount = status.currentCount || order.startCount;
        alert('Order status updated!');
      } catch (error) {
        alert('Failed to refresh order status');
      }
    }
  }
};
</script>

<template>
  <div>
    <Pageheader :propData="dataToPass" />
    
    <!-- Order Statistics -->
    <div class="row mb-4">
      <div class="col-lg-3 col-md-6 mb-3">
        <div class="card custom-card">
          <div class="card-body text-center">
            <h4 class="text-primary">{{ orders.length }}</h4>
            <p class="text-muted mb-0">Total Orders</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-3">
        <div class="card custom-card">
          <div class="card-body text-center">
            <h4 class="text-success">{{ orders.filter(o => o.status === 'Completed').length }}</h4>
            <p class="text-muted mb-0">Completed</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-3">
        <div class="card custom-card">
          <div class="card-body text-center">
            <h4 class="text-warning">{{ orders.filter(o => o.status === 'Processing').length }}</h4>
            <p class="text-muted mb-0">Processing</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-3">
        <div class="card custom-card">
          <div class="card-body text-center">
            <h4 class="text-info">{{ orders.filter(o => o.status === 'Pending').length }}</h4>
            <p class="text-muted mb-0">Pending</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Orders Table -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header d-flex justify-content-between">
            <div class="card-title">Order History</div>
            <div class="d-flex gap-2">
              <select class="form-select form-select-sm" v-model="filterStatus">
                <option value="all">All Orders</option>
                <option value="completed">Completed</option>
                <option value="processing">Processing</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table text-nowrap">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Service</th>
                    <th>Platform</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Progress</th>
                    <th>Created</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="order in filteredOrders" :key="order.id">
                    <td>
                      <span class="fw-semibold">{{ order.id }}</span>
                    </td>
                    <td>{{ order.service }}</td>
                    <td>
                      <i :class="`${getPlatformIcon(order.platform)} me-2`"></i>
                      {{ order.platform }}
                    </td>
                    <td>{{ order.quantity.toLocaleString() }}</td>
                    <td>${{ order.price.toFixed(2) }}</td>
                    <td>
                      <span :class="`badge bg-${getStatusColor(order.status)}-transparent`">
                        {{ order.status }}
                      </span>
                    </td>
                    <td>
                      <div class="progress" style="height: 6px;">
                        <div 
                          class="progress-bar" 
                          :class="`bg-${getStatusColor(order.status)}`"
                          :style="`width: ${order.progress}%`">
                        </div>
                      </div>
                      <small class="text-muted">{{ order.progress }}%</small>
                    </td>
                    <td>{{ new Date(order.created).toLocaleDateString() }}</td>
                    <td>
                      <div class="btn-group btn-group-sm">
                        <button class="btn btn-outline-info" @click="viewOrderDetails(order)">
                          <i class="bx bx-info-circle"></i>
                        </button>
                        <button class="btn btn-outline-success" @click="refreshOrderStatus(order)">
                          <i class="bx bx-refresh"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Order Details Modal -->
    <div v-if="showDetailsModal && selectedOrder" class="modal fade show d-block" style="background: rgba(0,0,0,0.5);">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Order Details - {{ selectedOrder.id }}</h5>
            <button type="button" class="btn-close" @click="showDetailsModal = false"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <h6>Order Information</h6>
                <table class="table table-borderless">
                  <tr>
                    <td><strong>Service:</strong></td>
                    <td>{{ selectedOrder.service }}</td>
                  </tr>
                  <tr>
                    <td><strong>Platform:</strong></td>
                    <td>
                      <i :class="`${getPlatformIcon(selectedOrder.platform)} me-2`"></i>
                      {{ selectedOrder.platform }}
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Target Link:</strong></td>
                    <td>
                      <a :href="selectedOrder.link" target="_blank" class="text-decoration-none">
                        {{ selectedOrder.link.substring(0, 50) }}...
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Quantity:</strong></td>
                    <td>{{ selectedOrder.quantity.toLocaleString() }}</td>
                  </tr>
                  <tr>
                    <td><strong>Price:</strong></td>
                    <td>${{ selectedOrder.price.toFixed(2) }}</td>
                  </tr>
                </table>
              </div>
              <div class="col-md-6">
                <h6>Status & Progress</h6>
                <div class="mb-3">
                  <div class="d-flex justify-content-between mb-1">
                    <span>Status:</span>
                    <span :class="`badge bg-${getStatusColor(selectedOrder.status)}-transparent`">
                      {{ selectedOrder.status }}
                    </span>
                  </div>
                  <div class="progress mb-2">
                    <div 
                      class="progress-bar" 
                      :class="`bg-${getStatusColor(selectedOrder.status)}`"
                      :style="`width: ${selectedOrder.progress}%`">
                    </div>
                  </div>
                  <small class="text-muted">{{ selectedOrder.progress }}% Complete</small>
                </div>
                
                <table class="table table-borderless">
                  <tr>
                    <td><strong>Start Count:</strong></td>
                    <td>{{ selectedOrder.startCount.toLocaleString() }}</td>
                  </tr>
                  <tr>
                    <td><strong>Current Count:</strong></td>
                    <td>{{ selectedOrder.currentCount.toLocaleString() }}</td>
                  </tr>
                  <tr>
                    <td><strong>Delivered:</strong></td>
                    <td>{{ (selectedOrder.currentCount - selectedOrder.startCount).toLocaleString() }}</td>
                  </tr>
                  <tr>
                    <td><strong>Created:</strong></td>
                    <td>{{ new Date(selectedOrder.created).toLocaleString() }}</td>
                  </tr>
                  <tr v-if="selectedOrder.completed">
                    <td><strong>Completed:</strong></td>
                    <td>{{ new Date(selectedOrder.completed).toLocaleString() }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="showDetailsModal = false">Close</button>
            <button type="button" class="btn btn-primary" @click="refreshOrderStatus(selectedOrder)">
              Refresh Status
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
