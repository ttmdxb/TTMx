const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  async sendEmail({ to, subject, html, text }) {
    try {
      const mailOptions = {
        from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM}>`,
        to,
        subject,
        html,
        text
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', result.messageId);
      return result;
    } catch (error) {
      console.error('Email sending error:', error);
      throw error;
    }
  }

  async sendWelcomeEmail(user) {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Welcome to TTMx!</h2>
        <p>Hi ${user.firstName || user.username},</p>
        <p>Welcome to TTMx - the professional social media marketing platform!</p>
        <p>Your account has been successfully created. You can now:</p>
        <ul>
          <li>Browse our premium SMM services</li>
          <li>Place orders for Instagram, TikTok, YouTube and more</li>
          <li>Track your orders in real-time</li>
          <li>Manage your wallet and payments</li>
        </ul>
        <p>Get started by exploring our services and placing your first order.</p>
        <p>Best regards,<br>The TTMx Team</p>
      </div>
    `;

    return this.sendEmail({
      to: user.email,
      subject: 'Welcome to TTMx!',
      html
    });
  }

  async sendOrderConfirmation(user, order) {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Order Confirmation</h2>
        <p>Hi ${user.firstName || user.username},</p>
        <p>Your order has been placed successfully!</p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3>Order Details:</h3>
          <p><strong>Order ID:</strong> ${order.orderId}</p>
          <p><strong>Service:</strong> ${order.service.name}</p>
          <p><strong>Quantity:</strong> ${order.quantity}</p>
          <p><strong>Target URL:</strong> ${order.targetUrl}</p>
          <p><strong>Total Cost:</strong> $${order.totalCost}</p>
          <p><strong>Status:</strong> ${order.status}</p>
        </div>
        <p>You can track your order status in your dashboard.</p>
        <p>Best regards,<br>The TTMx Team</p>
      </div>
    `;

    return this.sendEmail({
      to: user.email,
      subject: `Order Confirmation - ${order.orderId}`,
      html
    });
  }
}

const emailService = new EmailService();
module.exports = emailService;
