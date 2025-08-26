import jpg1 from '/images/ecommerce/jpg/1.jpg';
import jpg4 from '/images/ecommerce/jpg/4.jpg';
import face12 from '/images/faces/12.jpg';


interface DetailsTableItem {
  id: string;
  brand: string;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface OrderTimelineItemType {
  title: string;
  description: string;
  date: string;
  time: string;
  isCompleted: boolean;
}

interface UserInfoItemType {
  label: string;
  icon: string;
  value: string;
}

interface PaymentDetailType {
  label: string;
  value: string;
}

export const detailsTable: DetailsTableItem[] = [
  {
    id: 'ADI-UB-2023',
    brand: 'Adidas',
    name: 'Adidas UltraBoost 2023',
    color: 'Green',
    size: '10 US',
    price: 159.99,
    quantity: 1,
    imageUrl: jpg1,
  },
  {
    id: 'NIKE-AMX-2025',
    brand: 'Nike',
    name: 'Nike Air Max 2025 Sneakers',
    color: 'Teal',
    size: '10 US',
    price: 129.99,
    quantity: 2,
    imageUrl: jpg4,
  },
],
  orderTimeline: OrderTimelineItemType[] = [
    {
      title: 'Order Placed',
      description: 'Order successfully placed and awaiting processing.',
      date: 'March 15, 2025',
      time: '10:30 AM',
      isCompleted: true,
    },
    {
      title: 'Payment Confirmed',
      description: 'Payment successfully processed via Visa Card.',
      date: 'March 15, 2025',
      time: '11:15 AM',
      isCompleted: true,
    },
    {
      title: 'Order Processed',
      description: 'The order has been processed and is ready for packing.',
      date: 'March 15, 2025',
      time: '12:00 PM',
      isCompleted: true,
    },
    {
      title: 'Shipped',
      description: 'Order dispatched from the warehouse and handed over to the carrier.',
      date: 'March 16, 2025',
      time: '8:00 AM',
      isCompleted: true,
    },
    {
      title: 'Out for Delivery',
      description: 'The package is on its way to the delivery address.',
      date: 'March 17, 2025',
      time: '9:00 AM',
      isCompleted: false,
    },
    {
      title: 'Delivered',
      description: 'The order was successfully delivered to the customer’s address.',
      date: 'March 17, 2025',
      time: '3:45 PM',
      isCompleted: false,
    },
  ],
  userInfoList: UserInfoItemType[] = [
    {
      label: 'Full Name',
      icon: 'ri-user-line',
      value: `
          <div class="lh-1">
            <span class="avatar avatar-sm avatar-rounded">
               <img  src="${face12}" alt="">
            </span>
          </div>
          <div class="fw-medium">Tom Phillip</div>
      `,
    },
    {
      label: 'Email',
      icon: 'ri-mail-line',
      value: `<span class="fw-medium">tomphillip23@gmail.com</span>`,
    },
    {
      label: 'Phone',
      icon: 'ri-phone-line',
      value: `<span class="fw-medium text-end">(555) 123-4567</span>`,
    },
  ],
  paymentDetails: PaymentDetailType[] = [
    { label: 'Order ID', value: '#SPK202501' },
    { label: 'Payment Method', value: 'Credit Card' },
    { label: 'Card Number', value: '**** **** **** 1234' },
    {
      label: 'Payment Status',
      value: `Completed`,
    },
    { label: 'Amount Paid', value: '$389.99' },
    { label: 'Transaction ID', value: '5678-ABC12345XYZ' },
    { label: 'Payment Date', value: 'March 15, 2025, 11:45 AM' },
  ];