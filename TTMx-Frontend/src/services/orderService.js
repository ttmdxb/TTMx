// Order Service with Real API Integration
export class OrderService {
  constructor() {
    this.baseURL = '/api/orders';
  }

  // Fetch services from active providers
  async getServices(platform = null) {
    try {
      const response = await fetch(`${this.baseURL}/services${platform ? `?platform=${platform}` : ''}`);
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch services:', error);
      return [];
    }
  }

  // Place a new order
  async placeOrder(orderData) {
    try {
      const response = await fetch(`${this.baseURL}/place`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        },
        body: JSON.stringify(orderData)
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Failed to place order');
      }
    } catch (error) {
      throw error;
    }
  }

  // Get user orders
  async getUserOrders() {
    try {
      const response = await fetch(`${this.baseURL}/my-orders`, {
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
      });
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch orders:', error);
      return [];
    }
  }

  // Get order status
  async getOrderStatus(orderId) {
    try {
      const response = await fetch(`${this.baseURL}/status/${orderId}`, {
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
      });
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}

export const orderService = new OrderService();
