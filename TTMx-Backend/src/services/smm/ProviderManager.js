const SMMProvider = require('./SMMProvider');

class ProviderManager {
  constructor() {
    this.providers = new Map();
    this.initializeProviders();
  }

  initializeProviders() {
    // Initialize providers from environment variables
    const providers = [
      {
        name: 'VinaSmm',
        apiUrl: process.env.VINASMM_API_URL,
        apiKey: process.env.VINASMM_API_KEY,
        priceMultiplier: 1.3 // 30% markup
      },
      {
        name: 'HQ SmartPanel',
        apiUrl: process.env.HQ_SMARTPANEL_API_URL,
        apiKey: process.env.HQ_SMARTPANEL_API_KEY,
        priceMultiplier: 1.5 // 50% markup
      }
    ];

    providers.forEach(config => {
      if (config.apiKey && config.apiUrl) {
        const provider = new SMMProvider(config.name, config.apiUrl, config.apiKey);
        provider.priceMultiplier = config.priceMultiplier;
        this.providers.set(config.name, provider);
      }
    });

    console.log(`Initialized ${this.providers.size} SMM providers`);
  }

  getActiveProviders() {
    return Array.from(this.providers.values()).filter(p => p.isActive);
  }

  async getAllServices() {
    const allServices = [];
    
    for (const provider of this.getActiveProviders()) {
      try {
        const services = await provider.getServices();
        const processedServices = services.map(service => ({
          ...service,
          id: `${provider.name}_${service.service}`,
          originalRate: service.rate,
          rate: (service.rate * provider.priceMultiplier).toFixed(4),
          provider: provider.name
        }));
        
        allServices.push(...processedServices);
      } catch (error) {
        console.error(`Failed to fetch services from ${provider.name}:`, error.message);
      }
    }

    return allServices;
  }

  async createOrder(serviceId, link, quantity) {
    const [providerName, originalServiceId] = serviceId.split('_');
    const provider = this.providers.get(providerName);
    
    if (!provider) {
      throw new Error('Provider not found');
    }

    return await provider.createOrder(originalServiceId, link, quantity);
  }

  async getOrderStatus(providerName, providerOrderId) {
    const provider = this.providers.get(providerName);
    
    if (!provider) {
      throw new Error('Provider not found');
    }

    return await provider.getOrderStatus(providerOrderId);
  }
}

module.exports = new ProviderManager();
