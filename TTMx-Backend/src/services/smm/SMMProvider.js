const axios = require('axios');
const FormData = require('form-data');

class SMMProvider {
  constructor(name, apiUrl, apiKey) {
    this.name = name;
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
    this.isActive = !!apiKey;
  }

  async makeRequest(action, params = {}) {
    if (!this.isActive) {
      throw new Error(`${this.name} provider is not configured`);
    }

    const formData = new FormData();
    formData.append('key', this.apiKey);
    formData.append('action', action);
    
    Object.keys(params).forEach(key => {
      formData.append(key, params[key]);
    });

    try {
      const response = await axios.post(this.apiUrl, formData, {
        headers: formData.getHeaders(),
        timeout: 30000
      });

      if (response.data.error) {
        throw new Error(response.data.error);
      }

      return response.data;
    } catch (error) {
      console.error(`${this.name} API Error:`, error.message);
      throw new Error(`${this.name} service unavailable`);
    }
  }

  async getBalance() {
    const result = await this.makeRequest('balance');
    return {
      balance: parseFloat(result.balance) || 0,
      currency: result.currency || 'USD'
    };
  }

  async getServices() {
    const result = await this.makeRequest('services');
    return Array.isArray(result) ? result.map(service => ({
      ...service,
      provider: this.name,
      rate: parseFloat(service.rate),
      min: parseInt(service.min),
      max: parseInt(service.max)
    })) : [];
  }

  async createOrder(service, link, quantity) {
    const result = await this.makeRequest('add', {
      service,
      link,
      quantity
    });
    
    return {
      providerOrderId: result.order,
      status: 'Pending',
      charge: parseFloat(result.charge) || 0
    };
  }

  async getOrderStatus(providerOrderId) {
    const result = await this.makeRequest('status', {
      order: providerOrderId
    });

    return {
      status: result.status,
      startCount: parseInt(result.start_count) || 0,
      remains: parseInt(result.remains) || 0,
      charge: parseFloat(result.charge) || 0
    };
  }
}

module.exports = SMMProvider;
