import png1 from '/images/ecommerce/png/1.png';
import png2 from '/images/ecommerce/png/2.png';
import png3 from '/images/ecommerce/png/3.png';
import png4 from '/images/ecommerce/png/4.png';
import png5 from '/images/ecommerce/png/5.png';
import png7 from '/images/ecommerce/png/7.png';
import png8 from '/images/ecommerce/png/8.png';
import png9 from '/images/ecommerce/png/9.png';
import png10 from '/images/ecommerce/png/10.png';
import png16 from '/images/ecommerce/png/16.png';
import type { ProductDetailType } from './productdetails';

interface ProductCardType {
    title: string;
    avatarClass: string;
    count: string;
    percent: string;
    priceColor: string;
    svgIcon: string;
    percentColor: string;
}



export const productCards: ProductCardType[] = [
    {
        title: "Total Products",
        avatarClass: "avatar-md flex-shrink-0",
        count: "12,350",
        percent: "+15%",
        priceColor: "primary",
        svgIcon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"></path></svg>
        `,
        percentColor: 'bg-success-transparent badge fs-12'
    },
    {
        title: "Products in Stock",
        avatarClass: "flex-shrink-0",
        count: "7,890",
        percent: "+10%",
        priceColor: "success",
        svgIcon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z"></path></svg>
        `,
        percentColor: 'bg-success-transparent badge fs-12'
    },
    {
        title: "Out of Stock Products",
        avatarClass: "avatar-md flex-shrink-0",
        count: "2,430",
        percent: "-8%",
        priceColor: "warning",
        svgIcon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
        `,
        percentColor: 'bg-danger-transparent badge fs-12'
    },
    {
        title: "Recently Added",
        avatarClass: "avatar-md flex-shrink-0",
        count: "550",
        percent: "+30%",
        priceColor: "secondary",
        svgIcon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path></svg>
        `,
        percentColor: 'bg-success-transparent badge fs-12'
    },
    {
        title: "Total Revenue",
        avatarClass: "avatar-md flex-shrink-0",
        count: "$1.25M",
        percent: "+25%",
        priceColor: "info",
        svgIcon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M168,128a40,40,0,1,1-40-40A40,40,0,0,1,168,128Zm80-64V192a8,8,0,0,1-8,8H16a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H240A8,8,0,0,1,248,64Zm-16,46.35A56.78,56.78,0,0,1,193.65,72H62.35A56.78,56.78,0,0,1,24,110.35v35.3A56.78,56.78,0,0,1,62.35,184h131.3A56.78,56.78,0,0,1,232,145.65Z"></path></svg>
        `,
        percentColor: 'bg-success-transparent badge fs-12'
    },
],
    categoriesProduct: ProductDetailType[] = [
        { value: 'Categories', label: 'Categories' },
        { value: 'All Categories', label: 'All Categories' },
        { value: 'Electronics', label: 'Electronics' },
        { value: 'Fashion', label: 'Fashion' },
        { value: 'Home', label: 'Home' },
    ], statusProduct: ProductDetailType[] = [
        { value: 'Status', label: 'Status' },
        { value: 'All Status', label: 'All Status' },
        { value: 'Published', label: 'Published' },
        { value: 'Draft', label: 'Draft' },
        { value: 'Archived', label: 'Archived' },
    ], stockProduct: ProductDetailType[] = [
        { value: 'Stock', label: 'Stock' },
        { value: 'All Status', label: 'All Status' },
        { value: 'In Stock', label: 'In Stock' },
        { value: 'Out of Stock', label: 'Out of Stock' },
    ], filterProduct: ProductDetailType[] = [
        { value: 'Sort By', label: 'Sort By' },
        { value: 'Date Added', label: 'Date Added' },
        { value: 'Price', label: 'Price' },
        { value: 'Product Name', label: 'Product Name' },
    ]


interface UserType {
    id: string;
    name: string;
    image: typeof png1;
    price: string;
    stockStatus: string;
    stockStatusColor: boolean;
    status: string;
    statusColor: string;
    sales: number;
    date: string;
    category: string;
}

export const users: UserType[] = [
    {
        id: 'SPK001',
        name: 'Smart TV 50"',
        image: png1,
        price: '$699.99',
        stockStatus: 'In Stock',
        stockStatusColor: true,
        status: 'Published',
        statusColor: 'primary',
        sales: 120,
        date: 'Mar 12, 2025',
        category: 'Electronics'
    },
    {
        id: 'SPK002',
        name: 'Running Shoes',
        image: png2,
        price: '$89.99',
        stockStatus: 'Out of Stock',
        stockStatusColor: false,
        status: 'Draft',
        statusColor: 'danger',
        sales: 0,
        date: 'Mar 10, 2025',
        category: 'Fashion'
    },
    {
        id: 'SPK003',
        name: 'Wooden Dining Table',
        image: png3,
        price: '$399.99',
        stockStatus: 'In Stock',
        stockStatusColor: true,
        status: 'Published',
        statusColor: 'primary',
        sales: 45,
        date: 'Mar 5, 2025',
        category: 'Home'
    },
    {
        id: 'SPK004',
        name: 'Wireless Earbuds',
        image: png4,
        price: '$129.99',
        stockStatus: 'In Stock',
        stockStatusColor: true,
        status: 'Published',
        statusColor: 'primary',
        sales: 250,
        date: 'Mar 2, 2025',
        category: 'Electronics'
    },
    {
        id: 'SPK005',
        name: 'Leather Jacket',
        image: png5,
        price: '$199.99',
        stockStatus: 'In Stock',
        stockStatusColor: true,
        status: 'Archived',
        statusColor: 'success',
        sales: 75,
        date: 'Feb 28, 2025',
        category: 'Fashion'
    },
    {
        id: 'SPK006',
        name: 'Office Desk Chair',
        image: png7,
        price: '$149.99',
        stockStatus: 'Out of Stock',
        stockStatusColor: false,
        status: 'Draft',
        statusColor: 'danger',
        sales: 0,
        date: 'Feb 25, 2025',
        category: 'Home'
    },
    {
        id: 'SPK007',
        name: 'Portable Speaker',
        image: png8,
        price: '$79.99',
        stockStatus: 'In Stock',
        stockStatusColor: true,
        status: 'Published',
        statusColor: 'primary',
        sales: 300,
        date: 'Feb 20, 2025',
        category: 'Electronics'
    },
    {
        id: 'SPK008',
        name: 'Summer Dress',
        image: png9,
        price: '$59.99',
        stockStatus: 'In Stock',
        stockStatusColor: true,
        status: 'Published',
        statusColor: 'primary',
        sales: 150,
        date: 'Feb 18, 2025',
        category: 'Fashion'
    },
    {
        id: 'SPK009',
        name: 'Coffee Maker',
        image: png10,
        price: '$59.99',
        stockStatus: 'In Stock',
        stockStatusColor: true,
        status: 'Published',
        statusColor: 'primary',
        sales: 60,
        date: 'Feb 15, 2025',
        category: 'Home'
    },
    {
        id: 'SPK010',
        name: 'Electric Kettle',
        image: png16,
        price: '$39.99',
        stockStatus: 'Out of Stock',
        stockStatusColor: false,
        status: 'Archived',
        statusColor: 'success',
        sales: 0,
        date: 'Feb 10, 2025',
        category: 'Electronics'
    }
];