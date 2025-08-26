<script>
import Pageheader from '../../../shared/components/pageheader/pageheader.vue';
import { orderService } from '../../../services/orderService.js';
import { authService } from '../../../services/auth.js';

export default {
  data() {
    return {
      dataToPass: {
        title: "Services",
        currentpage: "Instagram",
        activepage: "Instagram Services"
      },
      services: [
        {
          id: 'IG_FOLLOWERS_001',
          name: 'Instagram Followers',
          description: 'High Quality Mix | Natural Increase | Slow Delivery',
          rate: 14.48,
          min: 10,
          max: 500000,
          category: 'followers',
          provider: 'VinaSmm',
          status: 'active'
        },
        {
          id: 'IG_LIKES_001',
          name: 'Instagram Likes',
          description: 'Real Likes | Instant Start | Non-Drop',
          rate: 2.21,
          min: 10,
          max: 500000,
          category: 'likes',
          provider: 'VinaSmm',
          status: 'active'
        },
        {
          id: 'IG_VIEWS_001',
          name: 'Instagram Views',
          description: 'Video/Reel Views | Fast Delivery',
          rate: 0.8,
          min: 100,
          max: 1000000,
          category: 'views',
          provider: 'HQ SmartPanel',
          status: 'active'
        },
        {
          id: 'IG_STORY_001',
          name: 'Instagram Story Views',
          description: 'Story Views | Instant Start',
          rate: 0.5,
          min: 100,
          max: 50000,
          category: 'story-views',
          provider: 'MomoPanel',
          status: 'active'
        }
      ],
      selectedService: null,
      orderForm: {
        link: '',
        quantity: '',
        totalPrice: 0
      },
      showOrderModal: false,
      userBalance: 127.50,
      processing: false
    };
  },
  components: {
    Pageheader
  },
  methods: {
    selectService(service) {
      this.selectedService = service;
      this.showOrderModal = true;
      this.orderForm.link = '';
      this.orderForm.quantity = service.min;
      this.calculatePrice();
    },

    calculatePrice() {
      if (this.orderForm.quantity && this.selectedService) {
        this.orderForm.totalPrice = (this.orderForm.quantity * this.selectedService.rate / 1000);
      }
    },

    validateOrder() {
      const errors = [];
      
      if (!this.orderForm.link) {
        errors.push('Instagram link is required');
      } else if (!this.isValidInstagramLink(this.orderForm.link)) {
        errors.push('Please enter a valid Instagram link');
      }
      
      if (!this.orderForm.quantity) {
        errors.push('Quantity is required');
      } else if (this.orderForm.quantity < this.selectedService.min) {
        errors.push(`Minimum quantity is ${this.selectedService.min}`);
      } else if (this.orderForm.quantity > this.selectedService.max) {
        errors.push(`Maximum quantity is ${this.selectedService.max.toLocaleString()}`);
      }
      
      if (this.orderForm.totalPrice > this.userBalance) {
        errors.push('Insufficient balance. Please add funds to your wallet.');
      }
      
      return errors;
    },

    isValidInstagramLink(link) {
      const instagramRegex = /^https?:\/\/(www\.)?(instagram\.com|instagr\.am)\/.+/;
      return instagramRegex.test(link);
    },

    async submitOrder() {
      const errors = this.validateOrder();
      if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
      }

      this.processing = true;
      try {
        const orderData = {
          serviceId: this.selectedService.id,
          link: this.orderForm.link,
          quantity: parseInt(this.orderForm.quantity),
          totalPrice: this.orderForm.totalPrice
        };

        const result = await orderService.placeOrder(orderData);
        
        alert(`Order placed successfully!\nOrder ID: ${result.orderId}\nStatus: Pending`);
        this.showOrderModal = false;
        this.resetForm();
        
        // Update user balance
        this.userBalance -= this.orderForm.totalPrice;
        
      } catch (error) {
        alert(`Order failed: ${error.message}`);
      } finally {
        this.processing = false;
      }
    },

    resetForm() {
      this.orderForm = {
        link: '',
        quantity: '',
        totalPrice: 0
      };
      this.selectedService = null;
    }
  },

  mounted() {
    const user = authService.getCurrentUser();
    if (!user) {
      this.$router.push('/auth/login');
    }
  }
};
</script>

<template>
  <div>
    <Pageheader :propData="dataToPass" />
    
    <!-- User Balance Display -->
    <div class="row mb-4">
      <div class="col-xl-12">
        <div class="alert alert-info d-flex justify-content-between align-items-center">
          <div>
            <i class="bx bx-wallet me-2"></i>
            <strong>Current Balance: ${{ userBalance.toFixed(2) }}</strong>
          </div>
          <router-link to="/wallet/add-funds" class="btn btn-sm btn-success">
            Add Funds
          </router-link>
        </div>
      </div>
    </div>

    <!-- Services Grid -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title d-flex align-items-center">
              <i class="bx bxl-instagram text-primary fs-20 me-2"></i>
              Instagram Services
            </div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6 col-md-6 mb-4" v-for="service in services" :key="service.id">
                <div class="card border service-card h-100">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h6 class="mb-2">{{ service.name }}</h6>
                        <p class="text-muted small mb-0">{{ service.description }}</p>
                      </div>
                      <span class="badge bg-success-transparent">{{ service.provider }}</span>
                    </div>
                    
                    <div class="service-details mb-3">
                      <div class="row text-center">
                        <div class="col-4">
                          <div class="small text-muted">Rate per 1000</div>
                          <div class="fw-semibold text-success">${{ service.rate }}</div>
                        </div>
                        <div class="col-4">
                          <div class="small text-muted">Min Order</div>
                          <div class="fw-semibold">{{ service.min.toLocaleString() }}</div>
                        </div>
                        <div class="col-4">
                          <div class="small text-muted">Max Order</div>
                          <div class="fw-semibold">{{ service.max.toLocaleString() }}</div>
                        </div>
                      </div>
                    </div>
                    
                    <button class="btn btn-primary w-100" @click="selectService(service)">
                      <i class="bx bx-cart me-2"></i>Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Order Modal -->
    <div v-if="showOrderModal" class="modal fade show d-block" style="background: rgba(0,0,0,0.5);">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Place Order - {{ selectedService?.name }}</h5>
            <button type="button" class="btn-close" @click="showOrderModal = false"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-8">
                <div class="mb-3">
                  <label class="form-label">Instagram Link *</label>
                  <input 
                    type="url" 
                    class="form-control" 
                    v-model="orderForm.link"
                    placeholder="https://instagram.com/username or post link"
                    required
                  />
                  <div class="form-text">Enter your Instagram profile or post link</div>
                </div>
                
                <div class="mb-3">
                  <label class="form-label">Quantity *</label>
                  <input 
                    type="number" 
                    class="form-control" 
                    v-model="orderForm.quantity"
                    :min="selectedService?.min"
                    :max="selectedService?.max"
                    @input="calculatePrice"
                    placeholder="Enter quantity"
                    required
                  />
                  <div class="form-text">
                    Min: {{ selectedService?.min?.toLocaleString() }} - 
                    Max: {{ selectedService?.max?.toLocaleString() }}
                  </div>
                </div>
                
                <div class="alert alert-success">
                  <div class="d-flex justify-content-between">
                    <strong>Total Cost:</strong>
                    <strong>${{ orderForm.totalPrice.toFixed(2) }}</strong>
                  </div>
                </div>
                
                <div class="d-flex gap-2">
                  <button 
                    class="btn btn-primary flex-fill" 
                    @click="submitOrder"
                    :disabled="processing || orderForm.totalPrice > userBalance">
                    <span v-if="processing" class="spinner-border spinner-border-sm me-2"></span>
                    {{ processing ? 'Processing...' : 'Confirm Order' }}
                  </button>
                  <button class="btn btn-secondary" @click="showOrderModal = false">
                    Cancel
                  </button>
                </div>
              </div>
              
              <div class="col-md-4">
                <div class="bg-light p-3 rounded">
                  <h6>Service Details</h6>
                  <p class="small mb-2">{{ selectedService?.description }}</p>
                  <hr>
                  <div class="small">
                    <div class="d-flex justify-content-between mb-1">
                      <span>Service ID:</span>
                      <span>{{ selectedService?.id }}</span>
                    </div>
                    <div class="d-flex justify-content-between mb-1">
                      <span>Rate per 1000:</span>
                      <span class="text-success">${{ selectedService?.rate }}</span>
                    </div>
                    <div class="d-flex justify-content-between mb-1">
                      <span>Provider:</span>
                      <span>{{ selectedService?.provider }}</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span>Your Balance:</span>
                      <span :class="userBalance >= orderForm.totalPrice ? 'text-success' : 'text-danger'">
                        ${{ userBalance.toFixed(2) }}
                      </span>
                    </div>
                  </div>
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
.service-card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.service-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
</style>
