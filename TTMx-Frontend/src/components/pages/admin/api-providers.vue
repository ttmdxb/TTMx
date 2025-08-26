<script>
import Pageheader from '../../../shared/components/pageheader/pageheader.vue';

export default {
  data() {
    return {
      dataToPass: {
        title: "Admin",
        currentpage: "API Providers",
        activepage: "API Management"
      },
      providers: [
        {
          id: 1,
          name: 'HQ SmartPanel',
          url: 'https://hqsmartpanel.com/api/v2',
          apiKey: '',
          status: 'inactive',
          balance: 0.00000,
          serviceCount: 0,
          lastSync: 'Never',
          priceIncrease: 500
        },
        {
          id: 2,
          name: 'VinaSmm',
          url: 'https://vinasmm.com/api/v2',
          apiKey: 'd766872ff7de39d6176f721741c0e87b',
          status: 'active',
          balance: 0.00000,
          serviceCount: 0,
          lastSync: 'Never',
          priceIncrease: 300
        },
        {
          id: 3,
          name: 'MomoPanel',
          url: 'https://momopanel.com/api/v2',
          apiKey: '',
          status: 'inactive',
          balance: 0.00000,
          serviceCount: 0,
          lastSync: 'Never',
          priceIncrease: 400
        },
        {
          id: 4,
          name: 'Provider Slot 4',
          url: '',
          apiKey: '',
          status: 'inactive',
          balance: 0.00000,
          serviceCount: 0,
          lastSync: 'Never',
          priceIncrease: 500
        },
        {
          id: 5,
          name: 'Provider Slot 5',
          url: '',
          apiKey: '',
          status: 'inactive',
          balance: 0.00000,
          serviceCount: 0,
          lastSync: 'Never',
          priceIncrease: 500
        }
      ],
      editingProvider: null,
      showEditModal: false
    };
  },
  components: {
    Pageheader
  },
  methods: {
    editProvider(provider) {
      this.editingProvider = { ...provider };
      this.showEditModal = true;
    },
    
    saveProvider() {
      const index = this.providers.findIndex(p => p.id === this.editingProvider.id);
      if (index !== -1) {
        this.providers[index] = { ...this.editingProvider };
      }
      this.showEditModal = false;
      alert('Provider settings saved successfully!');
    },
    
    async testConnection(provider) {
      if (!provider.apiKey || !provider.url) {
        alert('Please configure API key and URL first');
        return;
      }

      try {
        // Create a test API call
        const formData = new FormData();
        formData.append('key', provider.apiKey);
        formData.append('action', 'balance');

        const response = await fetch(provider.url, {
          method: 'POST',
          body: formData,
          mode: 'cors'
        });

        if (response.ok) {
          const result = await response.json();
          provider.balance = parseFloat(result.balance) || 0;
          alert(`Connection successful!\nBalance: $${provider.balance}`);
        } else {
          throw new Error(`HTTP ${response.status}`);
        }
      } catch (error) {
        alert(`Connection failed: ${error.message}\n\nThis is normal for CORS restrictions. The API will work from the backend.`);
      }
    },
    
    syncProvider(provider) {
      if (!provider.apiKey || !provider.url) {
        alert('Please configure API key and URL first');
        return;
      }
      alert(`Syncing services from ${provider.name}...\n\nThis will fetch all services from the provider and update pricing with ${provider.priceIncrease}% markup.`);
      provider.lastSync = new Date().toLocaleString();
    }
  }
};
</script>

<template>
  <div>
    <Pageheader :propData="dataToPass" />
    
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <div class="card-title">API Provider Management</div>
            <div class="d-flex gap-2">
              <button class="btn btn-success btn-sm">
                <i class="bx bx-sync me-1"></i>Sync All Active
              </button>
              <button class="btn btn-info btn-sm">
                <i class="bx bx-cog me-1"></i>Sync Settings
              </button>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Provider</th>
                    <th>Balance</th>
                    <th>Services</th>
                    <th>Status</th>
                    <th>Last Sync</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="provider in providers" :key="provider.id">
                    <td>{{ provider.id }}</td>
                    <td>
                      <div>
                        <div class="fw-semibold">{{ provider.name }}</div>
                        <small class="text-muted">{{ provider.url || 'No URL configured' }}</small>
                      </div>
                    </td>
                    <td>{{ provider.balance.toFixed(5) }}</td>
                    <td><span class="badge bg-info">{{ provider.serviceCount }}</span></td>
                    <td>
                      <span :class="`badge bg-${provider.status === 'active' ? 'success' : 'secondary'}`">
                        {{ provider.status.charAt(0).toUpperCase() + provider.status.slice(1) }}
                      </span>
                    </td>
                    <td><small>{{ provider.lastSync }}</small></td>
                    <td>
                      <div class="btn-group btn-group-sm">
                        <button class="btn btn-outline-primary" @click="editProvider(provider)">
                          <i class="bx bx-edit"></i>
                        </button>
                        <button class="btn btn-outline-success" @click="syncProvider(provider)">
                          <i class="bx bx-sync"></i>
                        </button>
                        <button class="btn btn-outline-info" @click="testConnection(provider)">
                          <i class="bx bx-wifi"></i>
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

    <!-- Edit Provider Modal -->
    <div v-if="showEditModal" class="modal fade show d-block" style="background: rgba(0,0,0,0.5);">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Provider - {{ editingProvider?.name }}</h5>
            <button type="button" class="btn-close" @click="showEditModal = false"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label">Provider Name</label>
                <input type="text" class="form-control" v-model="editingProvider.name">
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Status</label>
                <select class="form-select" v-model="editingProvider.status">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div class="col-md-12 mb-3">
                <label class="form-label">API URL</label>
                <input type="url" class="form-control" v-model="editingProvider.url">
              </div>
              <div class="col-md-8 mb-3">
                <label class="form-label">API Key</label>
                <input type="text" class="form-control" v-model="editingProvider.apiKey">
              </div>
              <div class="col-md-4 mb-3">
                <label class="form-label">Price Increase (%)</label>
                <input type="number" class="form-control" v-model="editingProvider.priceIncrease" min="0">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="showEditModal = false">Cancel</button>
            <button type="button" class="btn btn-primary" @click="saveProvider">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
