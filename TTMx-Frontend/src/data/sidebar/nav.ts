import { Svgicons } from '../icons/sidebar/svgicons';

export const MENUITEMS = [
  {
    menuTitle: 'TTMx PLATFORM'
  },
  // Main Dashboard
  {
    path: "/dashboard", 
    icon: "bx bx-home", 
    type: "link", 
    active: false, 
    selected: false, 
    title: "Dashboard"
  },
  
  // Wallet Section
  {
    title: "Wallet", 
    icon: "bx bx-wallet", 
    type: "sub", 
    active: false, 
    children: [
      { path: "/wallet/balance", type: "link", title: "Balance" },
      { path: "/wallet/add-funds", type: "link", title: "Add Funds" },
      { path: "/wallet/transactions", type: "link", title: "Transactions" },
      { path: "/wallet/withdraw", type: "link", title: "Withdraw" }
    ]
  },
  
  // Services (SMM Panel)
  {
    title: "Services", 
    icon: "bx bx-share-alt", 
    type: "sub", 
    active: false, 
    children: [
      { path: "/services/instagram", type: "link", title: "Instagram" },
      { path: "/services/tiktok", type: "link", title: "TikTok" },
      { path: "/services/youtube", type: "link", title: "YouTube" },
      { path: "/services/facebook", type: "link", title: "Facebook" },
      { path: "/services/twitter", type: "link", title: "Twitter" },
      { path: "/services/orders", type: "link", title: "My Orders" }
    ]
  },
  
  // Support & Communication
  {
    title: "Support", 
    icon: "bx bx-support", 
    type: "sub", 
    active: false, 
    children: [
      { path: "/support/tickets", type: "link", title: "Support Tickets" },
      { path: "/support/inbox", type: "link", title: "Inbox" },
      { path: "/support/create-ticket", type: "link", title: "Create Ticket" }
    ]
  },
  
  // Events & Notifications
  {
    path: "/events", 
    icon: "bx bx-calendar-event", 
    type: "link", 
    active: false, 
    title: "Events"
  },
  
  // User Profile
  {
    title: "Profile", 
    icon: "bx bx-user", 
    type: "sub", 
    active: false, 
    children: [
      { path: "/profile/settings", type: "link", title: "Settings" },
      { path: "/profile/edit", type: "link", title: "Edit Profile" },
      { path: "/profile/security", type: "link", title: "Security" },
      { path: "/profile/preferences", type: "link", title: "Preferences" }
    ]
  },
  
  {
    menuTitle: 'ADMIN PANEL'
  },
  
  // API Management (Admin Level)
  {
    title: "API Management", 
    icon: "bx bx-code-alt", 
    type: "sub", 
    active: false, 
    children: [
      { path: "/admin/api/keys", type: "link", title: "API Keys" },
      { path: "/admin/api/providers", type: "link", title: "Service Providers" },
      { path: "/admin/api/settings", type: "link", title: "API Settings" },
      { path: "/admin/api/logs", type: "link", title: "API Logs" }
    ]
  },
  
  // Admin Dashboard
  {
    title: "Admin", 
    icon: "bx bx-shield", 
    type: "sub", 
    active: false, 
    children: [
      { path: "/admin/users", type: "link", title: "Users" },
      { path: "/admin/orders", type: "link", title: "All Orders" },
      { path: "/admin/payments", type: "link", title: "Payments" },
      { path: "/admin/reports", type: "link", title: "Reports" }
      { path: "/admin/api-providers", type: "link", title: "API Providers" },
      { path: "/admin/users", type: "link", title: "Users" },
      { path: "/admin/orders", type: "link", title: "All Orders" },
      { path: "/admin/payments", type: "link", title: "Payments" }
    ]
  },
  
  {
    menuTitle: 'LEGAL & INFO'
  },
  
  // Terms and Legal
  {
    title: "Legal", 
    icon: "bx bx-file-blank", 
    type: "sub", 
    active: false, 
    children: [
      { path: "/legal/terms", type: "link", title: "Terms & Conditions" },
      { path: "/legal/privacy", type: "link", title: "Privacy Policy" },
      { path: "/legal/refund", type: "link", title: "Refund Policy" }
    ]
  }
];
