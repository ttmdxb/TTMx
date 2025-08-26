// SMM Provider API Service
class SMMProviderAPI {
  constructor(provider) {
    this.provider = provider;
    this.baseURL = provider.url;
    this.apiKey = provider.apiKey;
  }

  async makeRequest(action, params = {}) {
    const requestData = {
      key: this.apiKey,
      action: action,
      ...params
    };

    try {
      const response = await fetch(this.baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(requestData)
      });

      return await response.json();
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // Get account balance
  async getBalance() {
    return this.makeRequest('balance');
  }

  // Get services list
  async getServices() {
    return this.makeRequest('services');
  }

  // Add order
  async addOrder(service, link, quantity) {
    return this.makeRequest('add', {
      service: service,
      link: link,
      quantity: quantity
    });
  }

  // Get order status
  async getOrderStatus(order) {
    return this.makeRequest('status', { order: order });
  }
}

// NoMod Payment API Service
class NoModPaymentAPI {
  constructor(config) {
    this.apiKey = config.apiKey;
    this.merchantId = config.merchantId;
    this.baseURL = config.environment === 'production' 
      ? 'https://api.nomod.com' 
      : 'https://sandbox-api.nomod.com';
  }

  async createPayment(amount, currency = 'AED', customerDetails) {
    try {
      const response = await fetch(`${this.baseURL}/v1/payments`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          currency: currency,
          merchant_id: this.merchantId,
          customer: customerDetails,
          return_url: `${window.location.origin}/payment/success`,
          cancel_url: `${window.location.origin}/payment/cancel`
        })
      });

      return await response.json();
    } catch (error) {
      console.error('NoMod Payment failed:', error);
      throw error;
    }
  }
}

export { SMMProviderAPI, NoModPaymentAPI };
