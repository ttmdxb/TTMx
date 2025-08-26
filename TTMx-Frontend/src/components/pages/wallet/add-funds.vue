<script>
import Pageheader from '../../../shared/components/pageheader/pageheader.vue';

export default {
  data() {
    return {
      dataToPass: {
        title: "Wallet",
        currentpage: "Add Funds",
        activepage: "Add Funds to Wallet"
      },
      selectedAmount: 50,
      customAmount: '',
      selectedPaymentMethod: 'stripe',
      predefinedAmounts: [10, 25, 50, 100, 250, 500],
      paymentMethods: {
        stripe: {
          name: 'Credit/Debit Card',
          description: 'Pay with Visa, Mastercard, American Express',
          icon: 'bx-credit-card',
          color: 'primary',
          fees: '2.9% + $0.30'
        },
        paypal: {
          name: 'PayPal',
          description: 'Pay with your PayPal account',
          icon: 'bxl-paypal',
          color: 'info',
          fees: '3.49%'
        },
        nomod: {
          name: 'NoMod (UAE)',
          description: 'Local UAE payment gateway',
          icon: 'bx-money',
          color: 'success',
          fees: '2.5%'
        }
      },
      processing: false
    };
  },
  components: {
    Pageheader
  },
  computed: {
    finalAmount() {
      return this.customAmount || this.selectedAmount;
    },
    processingFee() {
      const method = this.paymentMethods[this.selectedPaymentMethod];
      const amount = this.finalAmount;
      
      if (this.selectedPaymentMethod === 'stripe') {
        return (amount * 0.029) + 0.30;
      } else if (this.selectedPaymentMethod === 'paypal') {
        return amount * 0.0349;
      } else if (this.selectedPaymentMethod === 'nomod') {
        return amount * 0.025;
      }
      return 0;
    },
    totalAmount() {
      return this.finalAmount + this.processingFee;
    }
  },
  methods: {
    selectAmount(amount) {
      this.selectedAmount = amount;
      this.customAmount = '';
    },
    
    async processPayment() {
      if (this.finalAmount < 5) {
        alert('Minimum deposit amount is $5.00');
        return;
      }

      this.processing = true;

      try {
        if (this.selectedPaymentMethod === 'stripe') {
          await this.processStripePayment();
        } else if (this.selectedPaymentMethod === 'paypal') {
          await this.processPayPalPayment();
        } else if (this.selectedPaymentMethod === 'nomod') {
          await this.processNoModPayment();
        }
      } catch (error) {
        alert('Payment failed: ' + error.message);
      } finally {
        this.processing = false;
      }
    },

    async processStripePayment() {
      // Stripe integration will go here
      alert(`Processing $${this.finalAmount} payment via Stripe...`);
    },

    async processPayPalPayment() {
      // PayPal integration will go here
      alert(`Processing $${this.finalAmount} payment via PayPal...`);
    },

    async processNoModPayment() {
      // NoMod integration will go here
      alert(`Processing $${this.finalAmount} payment via NoMod...`);
    }
  }
};
</script>

<template>
  <div>
    <Pageheader :propData="dataToPass" />
    
    <div class="row justify-content-center">
      <div class="col-xl-8">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">Add Funds to Wallet</div>
          </div>
          <div class="card-body">
            
            <!-- Amount Selection -->
            <div class="mb-4">
              <h6 class="fw-semibold mb-3">Select Amount</h6>
              <div class="row g-3 mb-3">
                <div class="col-md-2 col-4" v-for="amount in predefinedAmounts" :key="amount">
                  <button 
                    :class="`btn w-100 ${selectedAmount === amount && !customAmount ? 'btn-primary' : 'btn-outline-primary'}`"
                    @click="selectAmount(amount)">
                    ${{ amount }}
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label class="form-label">Custom Amount</label>
                  <div class="input-group">
                    <span class="input-group-text">$</span>
                    <input 
                      type="number" 
                      class="form-control" 
                      v-model="customAmount"
                      placeholder="Enter custom amount"
                      min="5"
                      step="0.01">
                  </div>
                  <div class="form-text">Minimum amount: $5.00</div>
                </div>
              </div>
            </div>

            <!-- Payment Method Selection -->
            <div class="mb-4">
              <h6 class="fw-semibold mb-3">Payment Method</h6>
              <div class="row g-3">
                <div class="col-md-4" v-for="(method, key) in paymentMethods" :key="key">
                  <div 
                    :class="`card border ${selectedPaymentMethod === key ? 'border-primary bg-primary-transparent' : 'border-light'} cursor-pointer`"
                    @click="selectedPaymentMethod = key">
                    <div class="card-body text-center">
                      <i :class="`${method.icon} fs-30 text-${method.color} mb-2`"></i>
                      <h6 class="mb-1">{{ method.name }}</h6>
                      <p class="text-muted small mb-1">{{ method.description }}</p>
                      <small class="text-muted">Fee: {{ method.fees }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Payment Summary -->
            <div class="mb-4">
              <div class="card bg-light">
                <div class="card-body">
                  <h6 class="fw-semibold mb-3">Payment Summary</h6>
                  <div class="d-flex justify-content-between mb-2">
                    <span>Amount:</span>
                    <span>${{ finalAmount.toFixed(2) }}</span>
                  </div>
                  <div class="d-flex justify-content-between mb-2">
                    <span>Processing Fee:</span>
                    <span>${{ processingFee.toFixed(2) }}</span>
                  </div>
                  <hr>
                  <div class="d-flex justify-content-between fw-semibold">
                    <span>Total:</span>
                    <span>${{ totalAmount.toFixed(2) }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Payment Button -->
            <div class="d-grid">
              <button 
                class="btn btn-primary btn-lg" 
                @click="processPayment"
                :disabled="processing || finalAmount < 5">
                <span v-if="processing" class="spinner-border spinner-border-sm me-2"></span>
                {{ processing ? 'Processing...' : `Pay $${totalAmount.toFixed(2)}` }}
              </button>
            </div>

            <!-- Security Notice -->
            <div class="mt-3">
              <div class="alert alert-info">
                <i class="bx bx-shield-check me-2"></i>
                <small>Your payment information is secure and encrypted. We never store your card details.</small>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
