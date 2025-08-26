<script>
import Pageheader from '../../../shared/components/pageheader/pageheader.vue';

export default {
  data() {
    return {
      dataToPass: {
        title: "Wallet",
        currentpage: "Balance",
        activepage: "Wallet Balance"
      },
      userWallet: {
        balance: 127.50,
        currency: 'USD',
        totalSpent: 1248.75,
        totalDeposited: 1376.25,
        pendingDeposits: 0.00
      },
      recentTransactions: [
        {
          id: 'TXN001',
          type: 'deposit',
          amount: 50.00,
          method: 'Stripe',
          status: 'completed',
          date: '2025-01-15 14:30:00',
          description: 'Wallet top-up via Stripe'
        },
        {
          id: 'TXN002',
          type: 'spend',
          amount: -15.75,
          method: 'order',
          status: 'completed',
          date: '2025-01-15 10:15:00',
          description: 'Instagram Followers - Order #ORD123'
        },
        {
          id: 'TXN003',
          type: 'deposit',
          amount: 100.00,
          method: 'PayPal',
          status: 'completed',
          date: '2025-01-14 16:45:00',
          description: 'Wallet top-up via PayPal'
        }
      ]
    };
  },
  components: {
    Pageheader
  },
  methods: {
    getTransactionColor(type) {
      return type === 'deposit' ? 'success' : 'danger';
    },
    getStatusColor(status) {
      switch(status) {
        case 'completed': return 'success';
        case 'pending': return 'warning';
        case 'failed': return 'danger';
        default: return 'secondary';
      }
    }
  }
};
</script>

<template>
  <div>
    <Pageheader :propData="dataToPass" />
    
    <!-- Wallet Overview Cards -->
    <div class="row mb-4">
      <div class="col-xxl-3 col-lg-6 col-md-6">
        <div class="card custom-card overflow-hidden">
          <div class="card-body">
            <div class="d-flex align-items-top justify-content-between">
              <div>
                <span class="avatar avatar-md avatar-rounded bg-primary">
                  <i class="bx bx-wallet fs-16"></i>
                </span>
              </div>
              <div class="flex-fill ms-3">
                <div class="d-flex align-items-center justify-content-between flex-wrap">
                  <div>
                    <p class="text-muted mb-0">Current Balance</p>
                    <h4 class="fw-semibold mt-1">${{ userWallet.balance.toFixed(2) }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-xxl-3 col-lg-6 col-md-6">
        <div class="card custom-card overflow-hidden">
          <div class="card-body">
            <div class="d-flex align-items-top justify-content-between">
              <div>
                <span class="avatar avatar-md avatar-rounded bg-success">
                  <i class="bx bx-trending-up fs-16"></i>
                </span>
              </div>
              <div class="flex-fill ms-3">
                <div class="d-flex align-items-center justify-content-between flex-wrap">
                  <div>
                    <p class="text-muted mb-0">Total Deposited</p>
                    <h4 class="fw-semibold mt-1">${{ userWallet.totalDeposited.toFixed(2) }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-xxl-3 col-lg-6 col-md-6">
        <div class="card custom-card overflow-hidden">
          <div class="card-body">
            <div class="d-flex align-items-top justify-content-between">
              <div>
                <span class="avatar avatar-md avatar-rounded bg-info">
                  <i class="bx bx-shopping-bag fs-16"></i>
                </span>
              </div>
              <div class="flex-fill ms-3">
                <div class="d-flex align-items-center justify-content-between flex-wrap">
                  <div>
                    <p class="text-muted mb-0">Total Spent</p>
                    <h4 class="fw-semibold mt-1">${{ userWallet.totalSpent.toFixed(2) }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-xxl-3 col-lg-6 col-md-6">
        <div class="card custom-card overflow-hidden">
          <div class="card-body">
            <div class="d-flex align-items-top justify-content-between">
              <div>
                <span class="avatar avatar-md avatar-rounded bg-warning">
                  <i class="bx bx-time fs-16"></i>
                </span>
              </div>
              <div class="flex-fill ms-3">
                <div class="d-flex align-items-center justify-content-between flex-wrap">
                  <div>
                    <p class="text-muted mb-0">Pending Deposits</p>
                    <h4 class="fw-semibold mt-1">${{ userWallet.pendingDeposits.toFixed(2) }}</h4>
                  </div>
                </div>
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
            <div class="d-flex gap-3 flex-wrap">
              <router-link to="/wallet/add-funds" class="btn btn-primary">
                <i class="bx bx-plus me-2"></i>Add Funds
              </router-link>
              <router-link to="/wallet/transactions" class="btn btn-outline-info">
                <i class="bx bx-history me-2"></i>View All Transactions
              </router-link>
              <button class="btn btn-outline-success">
                <i class="bx bx-download me-2"></i>Download Statement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Transactions -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header d-flex justify-content-between">
            <div class="card-title">Recent Transactions</div>
            <router-link to="/wallet/transactions" class="btn btn-sm btn-primary">View All</router-link>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table text-nowrap">
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Method</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="transaction in recentTransactions" :key="transaction.id">
                    <td>
                      <span class="fw-semibold">{{ transaction.id }}</span>
                    </td>
                    <td>
                      <span :class="`badge bg-${getTransactionColor(transaction.type)}-transparent`">
                        {{ transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1) }}
                      </span>
                    </td>
                    <td>
                      <span :class="transaction.type === 'deposit' ? 'text-success' : 'text-danger'">
                        {{ transaction.type === 'deposit' ? '+' : '' }}${{ Math.abs(transaction.amount).toFixed(2) }}
                      </span>
                    </td>
                    <td>{{ transaction.method }}</td>
                    <td>
                      <span :class="`badge bg-${getStatusColor(transaction.status)}-transparent`">
                        {{ transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1) }}
                      </span>
                    </td>
                    <td>{{ new Date(transaction.date).toLocaleDateString() }}</td>
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
