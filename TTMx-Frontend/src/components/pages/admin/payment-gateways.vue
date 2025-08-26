<script>
import Pageheader from '../../../shared/components/pageheader/pageheader.vue';

export default {
  data() {
    return {
      dataToPass: {
        title: "Admin",
        currentpage: "Payment Gateways",
        activepage: "Payment Configuration"
      },
      gateways: {
        nomod: {
          name: 'NoMod (UAE)',
          enabled: true,
          secretKey: 'sk_live_lknOK3LV.GKkS3jWL0CYz54NTUo1mt05zDOonryh7',
          currency: 'AED',
          environment: 'live'
        },
        stripe: {
          name: 'Stripe',
          enabled: true,
          publicKey: 'pk_live_51K0rACL7zJ12sc1KCYatyA9GjGYp0vUQ1jvnTscbDUIDusxgf2alvZSS5Eqw1p68F29YjEusHJcYjChWFpCG3Vc600sBvMMT4d',
          secretKey: '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',
          currency: 'USD'
        },
        paypal: {
          name: 'PayPal',
          enabled: true,
          clientId: 'ASbcHjhv56boYdsvQCwHahgcNr5ipOTzOgyvC3FEijFlZvAtkFoa8pPA8WmkQF3Kz1HubdtRTlaDW5t6',
          secretKey: 'EHzsppI8C4QPGdj0F8sYx9bM4lkagy0iEOMPTyudyHv3FbDyp3fEfHLDA_n5kCaspd4mFchGNiUWRIuC',
          currency: 'USD',
          environment: 'live'
        }
      }
    };
  },
  components: {
    Pageheader
  },
  methods: {
    saveGateway(gateway) {
      alert(`${gateway} settings saved!`);
    }
  }
};
</script>

<template>
  <div>
    <Pageheader :propData="dataToPass" />
    
    <div class="row">
      <div class="col-xl-4" v-for="(gateway, key) in gateways" :key="key">
        <div class="card custom-card">
          <div class="card-header">
            <h6 class="mb-0">{{ gateway.name }}</h6>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" v-model="gateway.enabled">
            </div>
          </div>
          <div class="card-body">
            <div class="mb-3" v-if="key === 'stripe'">
              <label class="form-label">Public Key</label>
              <input type="text" class="form-control" v-model="gateway.publicKey">
            </div>
            <div class="mb-3">
              <label class="form-label">{{ key === 'paypal' ? 'Client ID' : 'Secret Key' }}</label>
              <input type="password" class="form-control" :value="key === 'paypal' ? gateway.clientId : gateway.secretKey">
            </div>
            <div class="mb-3">
              <label class="form-label">Currency</label>
              <select class="form-select" v-model="gateway.currency">
                <option value="USD">USD</option>
                <option value="AED">AED</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
            <button class="btn btn-primary btn-sm w-100" @click="saveGateway(gateway.name)">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
