<script>
import Pageheader from '../../../shared/components/pageheader/pageheader.vue';

export default {
  data() {
    return {
      dataToPass: {
        title: "Wallet",
        currentpage: "Transactions",
        activepage: "Transaction History"
      },
      transactions: [
        {
          id: 'TXN001',
          type: 'deposit',
          amount: 50.00,
          method: 'Stripe',
          status: 'completed',
          date: '2025-01-15 14:30:00',
          description: 'Wallet top-up via Stripe',
          reference: 'pi_1234567890'
        },
        {
          id: 'TXN002',
          type: 'spend',
          amount: -15.75,
          method: 'order',
          status: 'completed',
          date: '2025-01-15 10:15:00',
          description: 'Instagram Followers - Order #ORD123',
          reference: 'ORD123'
        },
        {
          id: 'TXN003',
          type: 'deposit',
          amount: 100.00,
          method: 'PayPal',
          status: 'completed',
          date: '2025-01-14 16:45:00',
          description: 'Wallet top-up via PayPal',
          reference: 'PAYID-M1234567890'
        },
        {
          id: 'TXN004',
          type: 'spend',
          amount: -25.50,
          method: 'order',
          status: 'completed',
          date: '2025-01-14 09:20:00',
          description: 'TikTok Likes - Order #ORD124',
          reference: 'ORD124'
        },
        {
          id: 'TXN005',
          type: 'deposit',
          amount: 200.00,
          method: 'NoMod',
          status: 'pending',
          date: '2025-01-13 20:10:00',
          description: 'Wallet top-up via NoMod',
          reference: 'NOMOD-567890'
        }
      ],
      filterType: 'all',
      filterStatus: 'all'
    };
  },
  components: {
    Pageheader
  },
  computed: {
    filteredTransactions() {
      return this.transactions.filter(transaction => {
        const typeMatch = this.filterType === 'all' || transaction.type === this.filterType;
        const statusMatch = this.filterStatus === 'all' || transaction.status === this.filterStatus;
        return typeMatch && statusMatch;
      });
    },
    totalDeposits() {
      return this.transactions
        .filter(t => t.type === 'deposit' && t.status === 'completed')
        .reduce((sum, t) => sum + t.amount, 0);
    },
    totalSpent() {
      return Math.abs(this.transactions
        .filter(t => t.type === 'spend' && t.status === 'completed')
        .reduce((sum, t) => sum + t.amount, 0));
    }
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
    },
    exportTransactions() {
      alert('Exporting transaction history as CSV...');
    }
  }
};
</script>

<template>
  <div>
    <Pageheader :propData="dataToPass" />
    
    <!-- Summary Cards -->
    <div class="row mb-4">
      <div class="col-md-4">
        <div class="card custom-card">
          <div class="card-body text-center">
            <h4 class="text-success">${{ totalDeposits.toFixed(2) }}</h4>
            <p class="text-muted mb-0">Total Deposits</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card custom-card">
          <div class="card-body text-center">
            <h4 class="text-danger">${{ totalSpent.toFixed(2) }}</h4>
            <p class="text-muted mb-0">Total Spent</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card custom-card">
          <div class="card-body text-center">
            <h4 class="text-primary">{{ filteredTransactions.length }}</h4>
            <p class="text-muted mb-0">Total Transactions</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Transactions Table -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header d-flex justify-content-between">
            <div class="card-title">Transaction History</div>
            <div class="d-flex gap-2">
              <select class="form-select form-select-sm" v-model="filterType">
                <option value="all">All Types</option>
                <option value="deposit">Deposits</option>
                <option value="spend">Spending</option>
              </select>
              <select class="form-select form-select-sm" v-model="filterStatus">
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
              <button class="btn btn-sm btn-success" @click="exportTransactions">
                <i class="bx bx-download me-1"></i>Export
              </button>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table text-nowrap">
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Method</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Reference</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="transaction in filteredTransactions" :key="transaction.id">
                    <td>
                      <span class="fw-semibold">{{ transaction.id }}</span>
                    </td>
                    <td>{{ new Date(transaction.date).toLocaleString() }}</td>
                    <td>
                      <span :class="`badge bg-${getTransactionColor(transaction.type)}-transparent`">
                        {{ transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1) }}
                      </span>
                    </td>
                    <td>{{ transaction.description }}</td>
                    <td>{{ transaction.method }}</td>
                    <td>
                      <span :class="transaction.type === 'deposit' ? 'text-success fw-semibold' : 'text-danger fw-semibold'">
                        {{ transaction.type === 'deposit' ? '+' : '' }}${{ Math.abs(transaction.amount).toFixed(2) }}
                      </span>
                    </td>
                    <td>
                      <span :class="`badge bg-${getStatusColor(transaction.status)}-transparent`">
                        {{ transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1) }}
                      </span>
                    </td>
                    <td>
                      <small class="text-muted">{{ transaction.reference }}</small>
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
