# TTMx - Social Media Management Platform

A professional social media marketing platform for influencers and content creators. Provides Instagram, TikTok, YouTube, and other social media growth services with multi-gateway payment processing.

## 🚀 Platform Overview

TTMx is a comprehensive SMM (Social Media Marketing) panel that enables users to:
- Purchase followers, likes, views, and engagement across major social platforms
- Manage orders with real-time tracking and status updates
- Handle payments through multiple gateways (Stripe, PayPal, NoMod UAE)
- Access professional admin tools for service management
- Use AI-powered content generation tools

## 🏗️ Architecture

### Frontend (Vue.js 3)
- **Framework**: Vue.js 3 with Composition API
- **UI Library**: Vyzor Bootstrap 5 Admin Template
- **State Management**: Pinia
- **Build Tool**: Vite
- **Styling**: Bootstrap 5 + Custom SCSS

### Backend (Node.js)
- **Runtime**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT with bcrypt password hashing
- **Payment Processing**: Stripe, PayPal, NoMod integration
- **SMM APIs**: VinaSmm, HQ SmartPanel, MomoPanel
- **Email**: SMTP with order notifications and invoicing
- **SMS**: Twilio for verification and security

## 📁 Project Structure
TTMx/
├── TTMx-Frontend/          # Vue.js Frontend Application
│   ├── src/
│   │   ├── components/     # Reusable Vue components
│   │   ├── pages/         # Route-based page components
│   │   ├── services/      # API client services
│   │   ├── router/        # Vue Router configuration
│   │   └── assets/        # Static assets and styles
│   ├── public/            # Public static files
│   └── package.json
│
├── TTMx-Backend/          # Node.js Backend API
│   ├── src/
│   │   ├── controllers/   # Route handlers
│   │   ├── models/       # MongoDB schemas
│   │   ├── routes/       # API route definitions
│   │   ├── services/     # Business logic services
│   │   ├── middleware/   # Express middleware
│   │   └── utils/        # Utility functions
│   ├── .env             # Environment variables
│   └── package.json
│
└── README.md            # This file

## 🔧 Development History & Features Implemented

### Phase 1: Foundation Setup (Completed)
- ✅ Vue.js 3 frontend with Vyzor admin template
- ✅ Node.js backend with Express.js framework
- ✅ MongoDB database with Mongoose schemas
- ✅ User authentication system (JWT-based)
- ✅ Role-based access control (User/Admin/SuperAdmin)

### Phase 2: Core SMM Functionality (Completed)
- ✅ Multi-provider SMM API integration
  - VinaSmm API (Primary provider)
  - HQ SmartPanel API
  - MomoPanel API support
- ✅ Service ordering system with real-time tracking
- ✅ Order management and status updates
- ✅ Pricing markup and profit calculation

### Phase 3: Payment Processing (Completed)
- ✅ Multi-gateway payment integration:
  - Stripe (International cards)
  - PayPal (Global payments)
  - NoMod (UAE local payments)
- ✅ Wallet system with balance management
- ✅ Transaction history and invoicing
- ✅ Automated payment processing and webhooks

### Phase 4: Admin & Management (Completed)
- ✅ Admin dashboard with system monitoring
- ✅ API provider management (5 provider slots)
- ✅ Payment gateway configuration
- ✅ User management and role assignment
- ✅ Order monitoring and management tools

### Phase 5: User Experience (Completed)
- ✅ Professional landing page
- ✅ User dashboard with statistics
- ✅ Service browsing and ordering interface
- ✅ Order tracking and history
- ✅ Profile management and settings

## 🚀 Services Offered

### Instagram Services
- Followers (High Quality, Mixed, Premium)
- Likes (Instant, Slow delivery)
- Views (Video, Reel, Story)
- Comments and engagement

### TikTok Services
- Followers and likes
- Video views and shares
- Comments and engagement

### YouTube Services
- Subscribers and views
- Likes and watch time
- Comments and engagement

### Additional Platforms
- Facebook (Pages, Posts)
- Twitter (Followers, Engagement)
- LinkedIn (Connections, Engagement)

## 💳 Payment Methods

1. **Stripe** - International credit/debit cards
2. **PayPal** - Global PayPal payments
3. **NoMod** - UAE local payment gateway

## 🔐 Security Features

- JWT-based authentication with refresh tokens
- Password hashing using bcrypt (12 rounds)
- Rate limiting on API endpoints
- Account lockout after failed login attempts
- CORS protection and security headers
- Input validation and sanitization
- Environment variable protection for secrets

## 📧 Automated Communications

### Order Notifications
- Order confirmation emails
- Status update notifications
- Completion confirmations
- Refund notifications

### Account Management
- Welcome emails for new users
- Password reset instructions
- Login security alerts
- Payment receipts and invoices

### SMS Verification
- Phone number verification
- Two-factor authentication
- Security alerts for suspicious activity

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ 
- MongoDB 5+
- Git
- Domain with SSL certificate

### Backend Setup
```bash
cd TTMx-Backend
npm install
cp .env.example .env
# Configure environment variables
npm run dev
Frontend Setup
bashcd TTMx-Frontend
npm install
npm run dev
Production Deployment
bash# Frontend build
npm run build

# Backend production
npm start
🌐 Production Environment
Domain: https://ttmx.pro
API Endpoint: https://api.ttmx.pro
Database: MongoDB Atlas or self-hosted
SSL: Let's Encrypt or Cloudflare
Reverse Proxy: Nginx
Process Manager: PM2

📊 API Endpoints
Authentication

POST /api/auth/register - User registration
POST /api/auth/login - User login
GET /api/auth/me - Get current user

Services

GET /api/services - List all services
GET /api/services/:platform - Platform-specific services
POST /api/orders/place - Place new order
GET /api/orders/my-orders - User order history

Payments

POST /api/payments/create-intent - Create payment intent
POST /api/payments/webhook - Payment webhook handling
GET /api/wallet/balance - Get wallet balance

Admin

GET /api/admin/users - User management
GET /api/admin/orders - Order management
POST /api/admin/providers/sync - Sync SMM providers

📈 Business Model

Revenue: Markup on SMM services (30-50% profit margin)
Payment Processing: 2.9% + $0.30 (Stripe), 3.49% (PayPal), 2.5% (NoMod)
Subscription Plans: Optional premium features
API Access: Developer API for resellers

🔄 Future Enhancements
Planned Features

AI content generation tools
Social media scheduling
Analytics and reporting dashboard
Mobile application (React Native)
Affiliate program system
Multi-language support
Advanced fraud detection

Technical Improvements

Redis caching layer
Elasticsearch for advanced search
Real-time WebSocket notifications
Automated testing suite
CI/CD pipeline implementation

📞 Support & Contact

Website: https://ttmx.pro
Email: support@ttmx.pro
Admin: admin@ttmx.pro
Emergency: superadmin@ttmx.pro

📄 License
Proprietary - All rights reserved to TTMx Platform
👥 Development Team

Project Lead: TTMx Development Team
Frontend: Vue.js specialists
Backend: Node.js experts
DevOps: Infrastructure management
QA: Quality assurance testing


Last Updated: January 2025
Version: 1.0.0
Status: Production Ready

## Step 3: Create .gitignore Files

```bash
# Backend .gitignore
nano TTMx-Backend/.gitignore
gitignore# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.production
.env.test

# Logs
logs/
*.log

# Runtime data
pids/
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/
.nyc_output/

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Uploads
uploads/
tmp/
