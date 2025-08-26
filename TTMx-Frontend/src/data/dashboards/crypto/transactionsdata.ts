import bitcoin from '/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg';
import solana from '/images/crypto-currencies/crypto-icons/solana-sol-logo.svg';
import dogecoin from '/images/crypto-currencies/crypto-icons/dogecoin-doge-logo.svg';
import ethereum from '/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg';
import tether from '/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg';
import face4 from '/images/faces/4.jpg';
import face5 from '/images/faces/5.jpg';
import face6 from '/images/faces/6.jpg';
import face7 from '/images/faces/7.jpg';
import face10 from '/images/faces/10.jpg';
import face12 from '/images/faces/12.jpg';
import face15 from '/images/faces/15.jpg';
import face16 from '/images/faces/16.jpg';

interface TransactionCardType {
    title: string;
    count: number;
    countK?: string;
    price: string;
    percent: string;
    isPositive: boolean;
    priceColor: string;
    svgIcon: string;
    iconColor: string;
    cardClass: string;
    icon: string;
    avatarClass: string;
}

interface User {
    name: string;
    avatar: string;
}

interface Crypto {
    name: string;
    icon: string;
}

interface TransactionType {
    id: string;
    user: User;
    direction: 'up' | 'down';
    crypto: Crypto;
    date: string;
    amount: string;
    recipient: string;
    status: string;
    statusColor: string;
    tdClass?: string;
}

export const transactionCard: TransactionCardType[] = [
    {
        title: "New",
        count: 43,
        price: "12,345",
        percent: "3.25%",
        isPositive: true,
        priceColor: "primary",
        svgIcon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,160H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16Zm0-72V43.31L196.69,88Z"></path></svg>
        `,
        iconColor: "success fw-medium",
        cardClass: "dashboard-main-card primary",
        icon: 'ri-arrow-up-s-line',
        avatarClass: 'avatar-lg'
    },
    {
        title: "Completed",
        count: 321,
        price: "4,176",
        percent: "1.16%",
        isPositive: false,
        priceColor: "secondary",
        svgIcon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
        `,
        iconColor: "danger fw-medium",
        icon: 'ri-arrow-down-s-line',
        cardClass: "dashboard-main-card secondary",
        avatarClass: 'avatar-lg'
    },
    {
        title: "Pending",
        count: 81,
        price: "7,064",
        percent: "0.25%",
        isPositive: true,
        priceColor: "success",
        svgIcon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"></path></svg>
        `,
        iconColor: "success fw-medium",
        cardClass: "dashboard-main-card success",
        icon: 'ri-arrow-up-s-line',
        avatarClass: 'avatar-lg'
    },
    {
        title: "Inprogress",
        count: 33,
        countK: 'K',
        price: "1,105",
        percent: "0.46%",
        isPositive: true,
        priceColor: "warning",
        svgIcon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm33.94,58.75,17-17a8,8,0,0,1,11.32,11.32l-17,17a8,8,0,0,1-11.31-11.31ZM48,136a8,8,0,0,1,0-16H72a8,8,0,0,1,0,16Zm46.06,37.25-17,17a8,8,0,0,1-11.32-11.32l17-17a8,8,0,0,1,11.31,11.31Zm0-79.19a8,8,0,0,1-11.31,0l-17-17A8,8,0,0,1,77.09,65.77l17,17A8,8,0,0,1,94.06,94.06ZM136,208a8,8,0,0,1-16,0V184a8,8,0,0,1,16,0Zm0-136a8,8,0,0,1-16,0V48a8,8,0,0,1,16,0Zm54.23,118.23a8,8,0,0,1-11.32,0l-17-17a8,8,0,0,1,11.31-11.31l17,17A8,8,0,0,1,190.23,190.23ZM208,136H184a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Z"></path></svg>
        `,
        iconColor: "success fw-medium",
        cardClass: "dashboard-main-card warning",
        icon: 'ri-arrow-up-s-line',
        avatarClass: 'avatar-lg'
    }
],
    transactionsTable: TransactionType[] = [
        {
            id: '#1234567890',
            user: { name: 'John Doe', avatar: face10 },
            direction: 'up',
            crypto: { name: 'Bitcoin', icon: bitcoin },
            date: 'Mar 22, 2025 - 10:45 AM',
            amount: '0.5 BTC',
            recipient: 'Alice Smith',
            status: 'Completed',
            statusColor: 'success'
        },
        {
            id: '#1234567891',
            user: { name: 'Jane Smith', avatar: face5 },
            direction: 'down',
            crypto: { name: 'Ethereum', icon: ethereum },
            date: 'Mar 22, 2025 - 11:20 AM',
            amount: '2 ETH',
            recipient: 'Bob Johnson',
            status: 'Pending',
            statusColor: 'warning'
        },
        {
            id: '#1234567892',
            user: { name: 'Mark Lee', avatar: face12 },
            direction: 'up',
            crypto: { name: 'Solana', icon: solana },
            date: '14,Aug 2024 - 10:25AM',
            amount: '100 Sol',
            recipient: 'Sarah Adams',
            status: 'In Progress',
            statusColor: 'info'
        },
        {
            id: '#1234567893',
            user: { name: 'Alex Green', avatar: face15 },
            direction: 'up',
            crypto: { name: 'Bitcoin', icon: bitcoin },
            date: 'Mar 22, 2025 - 02:15 PM',
            amount: '0.3 BTC',
            recipient: 'Michael Clark',
            status: 'Completed',
            statusColor: 'success'
        },
        {
            id: '#1234567894',
            user: { name: 'Emma White', avatar: face4 },
            direction: 'up',
            crypto: { name: 'Dogecoin', icon: dogecoin },
            date: 'Mar 22, 2025 - 03:30 PM',
            amount: '500 DOGE',
            recipient: 'Chris Martinez',
            status: 'Cancelled',
            statusColor: 'danger'
        },
        {
            id: '#1234567895',
            user: { name: 'Luke Brown', avatar: face7 },
            direction: 'down',
            crypto: { name: 'Bitcoin', icon: bitcoin },
            date: 'Mar 22, 2025 - 04:00 PM',
            amount: '1 BTC',
            recipient: 'Nancy Williams',
            status: 'Completed',
            statusColor: 'success'
        },
        {
            id: '#1234567896',
            user: { name: 'Sophia Black', avatar: face6 },
            direction: 'up',
            crypto: { name: 'Ethereum', icon: ethereum },
            date: 'Mar 22, 2025 - 05:00 PM',
            amount: '1.5 ETH',
            recipient: 'Tom Hanks',
            status: 'Pending',
            statusColor: 'warning'
        },
        {
            id: '#1234567897',
            user: { name: 'Rachel Green', avatar: face7 },
            direction: 'up',
            crypto: { name: 'Tether', icon: tether },
            date: 'Mar 22, 2025 - 06:10 PM',
            amount: '150 Usdt',
            recipient: 'Jack White',
            status: 'Completed',
            statusColor: 'success'
        },
        {
            id: '#1234567898',
            user: { name: 'David Kim', avatar: face15 },
            direction: 'down',
            crypto: { name: 'Bitcoin', icon: bitcoin },
            date: 'Mar 22, 2025 - 07:20 PM',
            amount: '0.8 BTC',
            recipient: 'Olivia Turner',
            status: 'In Progress',
            statusColor: 'info'
        },
        {
            id: '#1234567899',
            user: { name: 'Oliver Stone', avatar: face16 },
            direction: 'up',
            crypto: { name: 'Ethereum', icon: ethereum },
            date: 'Mar 22, 2025 - 08:30 PM',
            amount: '3 ETH',
            recipient: 'Mia Roberts',
            status: 'Cancelled',
            statusColor: 'danger',
            tdClass: 'border-bottom-0'
        },
    ];