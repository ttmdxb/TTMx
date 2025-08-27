const axios = require('axios');

class SMMProvider {
  constructor(name, config) {
    this.name = name;
    this.config = config;
    this.baseURL = config.baseURL;
    this.apiKey = config.apiKey;
  }

  async getServices() {
    throw new Error('getServices method must be implemented');
  }

  async createOrder(orderData) {
    throw new Error('createOrder method must be implemented');
  }

  async getOrderStatus(orderId) {
    throw new Error('getOrderStatus method must be implemented');
  }
}

class VinaSMMProvider extends SMMProvider {
  async getServices() {
    try {
      const response = await axios.post(this.baseURL, {
        key: this.apiKey,
        action: 'services'
      });
      return response.data;
    } catch (error) {
      throw new Error(`VinaSMM API Error: ${error.message}`);
    }
  }

  async createOrder({ service, link, quantity }) {
    try {
      const response = await axios.post(this.baseURL, {
        key: this.apiKey,
        action: 'add',
        service,
        link,
        quantity
      });
      return response.data.order;
    } catch (error) {
      throw new Error(`VinaSMM Order Error: ${error.message}`);
    }
  }

  async getOrderStatus(orderId) {
    try {
      const response = await axios.post(this.baseURL, {
        key: this.apiKey,
        action: 'status',
        order: orderId
      });
      return response.data;
    } catch (error) {
      throw new Error(`VinaSMM Status Error: ${error.message}`);
    }
  }
}

class HQSmartPanelProvider extends SMMProvider {
  async getServices() {
    try {
      const response = await axios.get(`${this.baseURL}/services`, {
        headers: { 'Authorization': `Bearer ${this.apiKey}` }
      });
      return response.data;
    } catch (error) {
      throw new Error(`HQSmartPanel API Error: ${error.message}`);
    }
  }

  async createOrder({ service, link, quantity }) {
    try {
      const response = await axios.post(`${this.baseURL}/orders`, {
        service,
        link,
        quantity
      }, {
        headers: { 'Authorization': `Bearer ${this.apiKey}` }
      });
      return response.data.order_id;
    } catch (error) {
      throw new Error(`HQSmartPanel Order Error: ${error.message}`);
    }
  }

  async getOrderStatus(orderId) {
    try {
      const response = await axios.get(`${this.baseURL}/orders/${orderId}`, {
        headers: { 'Authorization': `Bearer ${this.apiKey}` }
      });
      return response.data;
    } catch (error) {
      throw new Error(`HQSmartPanel Status Error: ${error.message}`);
    }
  }
}

class MomoPanelProvider extends SMMProvider {
  async getServices() {
    try {
      const response = await axios.post(this.baseURL, {
        api_key: this.apiKey,
        action: 'services'
      });
      return response.data;
    } catch (error) {
      throw new Error(`MomoPanel API Error: ${error.message}`);
    }
  }

  async createOrder({ service, link, quantity }) {
    try {
      const response = await axios.post(this.baseURL, {
        api_key: this.apiKey,
        action: 'add',
        service,
        link,
        quantity
      });
      return response.data.order;
    } catch (error) {
      throw new Error(`MomoPanel Order Error: ${error.message}`);
    }
  }

  async getOrderStatus(orderId) {
    try {
      const response = await axios.post(this.baseURL, {
        api_key: this.apiKey,
        action: 'status',
        order: orderId
      });
      return response.data;
    } catch (error) {
      throw new Error(`MomoPanel Status Error: ${error.message}`);
    }
  }
}

class SMMService {
  constructor() {
    this.providers = new Map();
    this.initializeProviders();
  }

  initializeProviders() {
    // Initialize VinaSMM
    if (process.env.VINASMM_API_KEY) {
      this.providers.set('vinasmm', new VinaSMMProvider('vinasmm', {
        baseURL: process.env.VINASMM_API_URL || 'https://vinasmm.com/api/v2',
        apiKey: process.env.VINASMM_API_KEY
      }));
    }

    // Initialize HQSmartPanel
    if (process.env.HQSMARTPANEL_API_KEY) {
      this.providers.set('hqsmartpanel', new HQSmartPanelProvider('hqsmartpanel', {
        baseURL: process.env.HQSMARTPANEL_API_URL || 'https://hqsmartpanel.com/api',
        apiKey: process.env.HQSMARTPANEL_API_KEY
      }));
    }

    // Initialize MomoPanel
    if (process.env.MOMOPANEL_API_KEY) {
      this.providers.set('momopanel', new MomoPanelProvider('momopanel', {
        baseURL: process.env.MOMOPANEL_API_URL || 'https://momopanel.com/api/v1',
        apiKey: process.env.MOMOPANEL_API_KEY
      }));
    }

    console.log(`Initialized ${this.providers.size} SMM providers`);
  }

  getActiveProvider() {
    const primaryProvider = process.env.PRIMARY_SMM_PROVIDER || 'vinasmm';
    const provider = this.providers.get(primaryProvider);
    
    if (!provider) {
      throw new Error(`Primary provider ${primaryProvider} not configured`);
    }
    
    return provider;
  }

  getProvider(name) {
    return this.providers.get(name);
  }

  getAllProviders() {
    return Array.from(this.providers.values());
  }
}

const smmProviders = new SMMService();

module.exports = {
  smmProviders,
  SMMProvider,
  VinaSMMProvider,
  HQSmartPanelProvider,
  MomoPanelProvider
};
