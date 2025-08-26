import face2 from '/images/faces/2.jpg';
import face3 from '/images/faces/3.jpg';
import face4 from '/images/faces/4.jpg';
import face5 from '/images/faces/5.jpg';
import face6 from '/images/faces/6.jpg';
import face7 from '/images/faces/7.jpg';
import face12 from '/images/faces/12.jpg';
import face13 from '/images/faces/13.jpg';
import face14 from '/images/faces/14.jpg';
import face15 from '/images/faces/15.jpg';

interface MailMenuItemsType {
    id: number
    label: string
    count?: number
    isActive?: boolean
    icon: string
}

interface TagItemTYpe {
    id: number;
    label: string;
    colorClass: string;
}

interface BadgeType {
    className: string
    text: string
}

interface MailItemType {
    id: number;
    senderName: string;
    senderAvatar: string;
    subject: string;
    content: string;
    time: string;
    starred?: boolean;
    checked?: boolean;
    isActive?: boolean;
    important?: boolean;
    badge?: BadgeType
}

export const MailMenuItems: MailMenuItemsType[] = [
    {
        id: 1,
        label: "All Mails",
        count: 5,
        isActive: true,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polygon points="224 56 128 144 32 56 224 56" opacity="0.2"></polygon><path d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><polyline points="224 56 128 144 32 56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>`,
    },
    {
        id: 2,
        label: "Inbox",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,72V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V72Z" opacity="0.2"></path><path d="M208,216H48a8,8,0,0,1-8-8V72L56,40H200l16,32V208A8,8,0,0,1,208,216Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="40" y1="72" x2="216" y2="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="128" y1="104" x2="128" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="96 152 128 184 160 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>`,
    },
    {
        id: 3,
        label: "Sent",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M48.49,221.28A8,8,0,0,0,59.93,231l168-96.09a8,8,0,0,0,0-14l-168-95.85a8,8,0,0,0-11.44,9.67L80,128Z" opacity="0.2"></path><line x1="144" y1="128" x2="80" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M48.49,221.28A8,8,0,0,0,59.93,231l168-96.09a8,8,0,0,0,0-14l-168-95.85a8,8,0,0,0-11.44,9.67L80,128Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
    },
    {
        id: 4,
        label: "Drafts",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"></polygon><path d="M72,224H56a8,8,0,0,1-8-8V184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><polyline points="120 32 152 32 208 88 208 136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><path d="M48,64V40a8,8,0,0,1,8-8H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><path d="M208,176v40a8,8,0,0,1-8,8h-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="48" y1="104" x2="48" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="112" y1="224" x2="152" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>`,
    },
    {
        id: 5,
        label: "Spam",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" opacity="0.2"></circle><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"></circle><line x1="128" y1="136" x2="128" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><circle cx="128" cy="172" r="12"></circle></svg>`,
    },
    {
        id: 6,
        label: "Important",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z" opacity="0.2"></path><path d="M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
    },
    {
        id: 7,
        label: "Trash",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M26.18,184A16,16,0,0,0,40,208H216a16,16,0,0,0,13.84-24l-88-152a16,16,0,0,0-27.7,0Z" opacity="0.2"></path><polyline points="152 232 128 208 152 184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="194.63 75.19 185.84 107.98 153.06 99.19" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="78.96 140.77 70.16 108 37.39 116.77" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><path d="M70.16,108l-44,76A16,16,0,0,0,40,208H88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M128,208h88a16,16,0,0,0,13.84-24l-23.14-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M185.84,108l-44-76a16,16,0,0,0-27.7,0L91,72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
    },
    {
        id: 8,
        label: "Archive",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96Z" opacity="0.2"></path><rect x="24" y="56" width="208" height="40" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="104" y1="136" x2="152" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>`,
    },
    {
        id: 9,
        label: "Starred",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z" opacity="0.2"></path><path d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
    },
],
    TagItems: TagItemTYpe[] = [
        { id: 1, label: "Mail", colorClass: "primary" },
        { id: 2, label: "Home", colorClass: "danger" },
        { id: 3, label: "Work", colorClass: "success" },
        { id: 4, label: "Friends", colorClass: "info" },
    ],
    Mailstable: MailItemType[] = [
        {
            id: 1,
            senderName: "Amelia Turner",
            senderAvatar: face7,
            subject: "[Reminder] Client Meeting at 3 PM Today",
            content: "Hi John, just a quick reminder about our meeting with ABC Corp at 3 PM. Let me know if you need any changes. Regards, Sarah.",
            time: "10:15 AM",
            starred: true,
        },
        {
            id: 2,
            senderName: "Sarah Smith",
            senderAvatar: face6,
            subject: "Invoice #45678 – Payment Due Soon",
            content: "Dear Sarah, your invoice for February services is attached. Kindly process the payment before the due date. Let me know if you have any questions. Best, Finance Team.",
            time: "09:45 AM",
            checked: true,
            isActive: true
        },
        {
            id: 3,
            senderName: "David Johnson",
            senderAvatar: face14,
            subject: "Project Alpha – Weekly Update & Next Steps",
            content: "Hi David, please find attached the latest updates on Project Alpha. Let’s connect tomorrow to discuss the next steps. Regards, James.",
            time: "01 Mar",
            starred: true,
            important: true,
            badge: { text: "Personal", className: "bg-primary" },
        },
        {
            id: 4,
            senderName: "Emily Carter",
            senderAvatar: face4,
            subject: "HR Policy Changes Effective Next Month",
            content: "Hello Emily, please review the attached HR policy changes regarding annual leaves and remote work. Let us know if you have any concerns. HR Department.",
            time: "01 Mar",
            starred: true,
        },
        {
            id: 5,
            senderName: "Mark Wilson",
            senderAvatar: face13,
            subject: "Your Subscription is Expiring",
            content: "Hi Mark, your premium subscription is set to expire on March 5. Click here to renew and continue enjoying premium features.",
            time: "29 Feb",
            badge: { text: "Social", className: "bg-success" },
        },
        {
            id: 6,
            senderName: "Olivia Brown",
            senderAvatar: face3,
            subject: "Job Application for Marketing Analyst",
            content: "Dear Olivia, thank you for applying to our company. Your application is under review, and we will get back to you soon. Best regards, HR Team.",
            time: "29 Feb",
            starred: true,
            badge: { text: "Promotion", className: "bg-warning" },
        },
        {
            id: 7,
            senderName: "Daniel Lee",
            senderAvatar: face12,
            subject: "Top Industry News & Trends",
            content: "Hello Daniel, this week’s newsletter covers the latest trends in technology and business. Don’t miss out on our expert insights! Read more inside.",
            time: "29 Feb",
        },
        {
            id: 8,
            senderName: "Sophia Miller",
            senderAvatar: face2,
            subject: "Unusual Login Attempt Detected",
            content: "Hi Sophia, we detected an unusual login attempt on your account from a new device. If this wasn’t you, please reset your password immediately.",
            time: "29 Feb",
            important: true,
        },
        {
            id: 9,
            senderName: "Michael Adams",
            senderAvatar: face15,
            subject: "Your Order #98765 Has Been Shipped!",
            content: "Hi Michael, your order has been dispatched and is expected to arrive within 3-5 business days. Track your order using the link inside.",
            time: "29 Feb",
        },
        {
            id: 10,
            senderName: "Emma White",
            senderAvatar: face5,
            subject: "Annual Tech Conference 2025",
            content: "Dear Emma, you’re invited to our exclusive Tech Conference 2025. Join industry leaders to discuss upcoming trends. Reserve your spot today!",
            time: "28 Feb",
            starred: true,
        }
    ]