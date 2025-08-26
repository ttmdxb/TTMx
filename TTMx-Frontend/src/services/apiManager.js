// Complete API Manager for TTMx
export class TTMxAPIManager {
  constructor() {
    this.providers = [];
    this.activeProviders = [];
  }

  // Initialize providers from database/config
  async initializeProviders(providersConfig) {
    this.providers = providersConfig.map(config => ({
      ...config,
      api: new SMMProviderAPI(config)
    }));
    
    this.activeProviders = this.providers.filter(p => p.status === 'active');
  }

  // Sync all services from all active providers
  async syncAllServices() {
    const allServices = [];
    
    for (const provider of this.activeProviders) {
      try {
        const services = await provider.api.getServices();
        const processedServices = services.map(service => ({
          ...service,
          providerId: provider.id,
          providerName: provider.name,
          originalRate: parseFloat(service.rate),
          rate: this.calculateNewRate(service.rate, provider.priceIncrease),
          lastSync: new Date().toISOString()
        }));
        
        allServices.push(...processedServices);
      } catch (error) {
        console.error(`Failed to sync ${provider.name}:`, error);
      }
    }
    
    return allServices;
  }

  // Calculate new rate with price increase
  calculateNewRate(originalRate, priceIncreasePercent) {
    const increase = (originalRate * priceIncreasePercent) / 100;
    return parseFloat((originalRate + increase).toFixed(4));
  }

  // Test provider connection
  async testProvider(provider) {
    try {
      const balance = await provider.api.getBalance();
      return { success: true, balance: balance };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Place order through best available provider
  async placeOrder(serviceId, link, quantity) {
    // Find service across providers
    const service = await this.findServiceById(serviceId);
    if (!service) throw new Error('Service not found');

    const provider = this.providers.find(p => p.id === service.providerId);
    if (!provider) throw new Error('Provider not available');

    return await provider.api.addOrder(service.originalId, link, quantity);
  }
}

// SMM Provider API class
export class SMMProviderAPI {
  constructor(config) {
    this.config = config;
    this.baseURL = config.url;
    this.apiKey = config.apiKey;
  }

  async makeRequest(action, params = {}) {
    const formData = new FormData();
    formData.append('key', this.apiKey);
    formData.append('action', action);
    
    Object.keys(params).forEach(key => {
      formData.append(key, params[key]);
    });

    const response = await fetch(this.baseURL, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    return await response.json();
  }

  async getBalance() {
    return this.makeRequest('balance');
  }

  async getServices() {
    return this.makeRequest('services');
  }

  async addOrder(service, link, quantity) {
    return this.makeRequest('add', { service, link, quantity });
  }

  async getOrderStatus(orderId) {
    return this.makeRequest('status', { order: orderId });
  }
}
