interface Feature {
    label?: string;
    value?: string;
}

interface PricingPlanType {
    title: string;
    description: string;
    price: string;
    user: string;
    color: string;
    btnColor: string;
    svgIcon: string;
    features: (Feature | string)[];
    badge?: boolean;
}

interface BasicPricingPlanType {
    title: string;
    price: string;
    year: string;
    percent: string;
    features: string[];
    btnColor: string;
    badgeColor: string;
    priceColor: string;
    titleColor?: string;
    cardClass?: string;
}

export const PricingData: PricingPlanType[] = [
    {
        title: "Individuals",
        description: "Perfect for solo users who need essential features to get started efficiently.",
        price: "$9.99",
        user: "Month",
        color: "primary",
        btnColor: "outline-light",
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"></path></svg>`,
        features: [
            { label: "100GB", value: "of cloud storage" },
            { label: "Easy file sharing & link access" },
            "Sync across all devices",
            { label: "Offline access", value: "to saved files" },
            "Basic file recovery (30 days)",
            "Standard encryption for data protection",
            "Email support & knowledge base",
        ],
    },
    {
        title: "Team Plan",
        description: "Designed for small teams to collaborate, manage tasks, and boost productivity.",
        price: "$29.99",
        user: "Month",
        badge: true,
        color: "success",
        btnColor: "primary",
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z"></path></svg>`,
        features: [
            { label: "1TB", value: "shared cloud storage" },
            "Real-time file collaboration & commenting",
            "User roles & access permissions",
            "Advanced security (2FA, access logs)",
            "Third-party app integrations",
            "File versioning & recovery (90 days)",
            "Priority customer support",
        ],
    },
    {
        title: "Enterprise Plan",
        description: "A comprehensive solution for large businesses with advanced tools and scalability.",
        price: "$99.99",
        user: "Month",
        color: "warning",
        btnColor: "outline-light",
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M239.73,208H224V96a16,16,0,0,0-16-16H164a4,4,0,0,0-4,4V208H144V32.41a16.43,16.43,0,0,0-6.16-13,16,16,0,0,0-18.72-.69L39.12,72A16,16,0,0,0,32,85.34V208H16.27A8.18,8.18,0,0,0,8,215.47,8,8,0,0,0,16,224H240a8,8,0,0,0,8-8.53A8.18,8.18,0,0,0,239.73,208ZM76,184a8,8,0,0,1-8.53,8A8.18,8.18,0,0,1,60,183.72V168.27A8.19,8.19,0,0,1,67.47,160,8,8,0,0,1,76,168Zm0-56a8,8,0,0,1-8.53,8A8.19,8.19,0,0,1,60,127.72V112.27A8.19,8.19,0,0,1,67.47,104,8,8,0,0,1,76,112Zm40,56a8,8,0,0,1-8.53,8,8.18,8.18,0,0,1-7.47-8.26V168.27a8.19,8.19,0,0,1,7.47-8.26,8,8,0,0,1,8.53,8Zm0-56a8,8,0,0,1-8.53,8,8.19,8.19,0,0,1-7.47-8.26V112.27a8.19,8.19,0,0,1,7.47-8.26,8,8,0,0,1,8.53,8Z"></path></svg>`,
        features: [
            "Unlimited cloud storage",
            "Custom security protocols",
            "24/7 VIP support",
            "Audit logs & detailed reporting",
            "API access for custom integrations",
            "AI-powered search & automation",
            "Remote device management",
        ],
    },
],
    YearData: PricingPlanType[] = [
        {
            title: "Individuals",
            description: "Perfect for solo users who need essential features to get started efficiently.",
            price: "$99.99",
            user: "Year",
            color: "primary",
            btnColor: "outline-light",
            svgIcon: `    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"></path></svg>`,
            features: [
                { label: "100GB", value: "of cloud storage" },
                { label: "Easy file sharing & link access" },
                "Sync across all devices",
                { label: "Offline access", value: "to saved files" },
                "Basic file recovery (30 days)",
                "Standard encryption for data protection",
                "Email support & knowledge base",
            ],
        },
        {
            title: "Team Plan",
            description: "Designed for small teams to collaborate, manage tasks, and boost productivity.",
            price: "$299.99",
            user: "Year",
            badge: true,
            color: "success",
            btnColor: "primary",
            svgIcon: `    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z"></path></svg>`,
            features: [
                { label: "1TB", value: "shared cloud storage" },
                "Real-time file collaboration & commenting",
                "User roles & access permissions",
                "Advanced security (2FA, access logs)",
                "Third-party app integrations",
                "File versioning & recovery (90 days)",
                "Priority customer support",
            ],
        },
        {
            title: "Enterprise Plan",
            description: "A comprehensive solution for large businesses with advanced tools and scalability.",
            price: "$999.99",
            user: "Year",
            color: "warning",
            btnColor: "outline-light",
            svgIcon: `    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M239.73,208H224V96a16,16,0,0,0-16-16H164a4,4,0,0,0-4,4V208H144V32.41a16.43,16.43,0,0,0-6.16-13,16,16,0,0,0-18.72-.69L39.12,72A16,16,0,0,0,32,85.34V208H16.27A8.18,8.18,0,0,0,8,215.47,8,8,0,0,0,16,224H240a8,8,0,0,0,8-8.53A8.18,8.18,0,0,0,239.73,208ZM76,184a8,8,0,0,1-8.53,8A8.18,8.18,0,0,1,60,183.72V168.27A8.19,8.19,0,0,1,67.47,160,8,8,0,0,1,76,168Zm0-56a8,8,0,0,1-8.53,8A8.19,8.19,0,0,1,60,127.72V112.27A8.19,8.19,0,0,1,67.47,104,8,8,0,0,1,76,112Zm40,56a8,8,0,0,1-8.53,8,8.18,8.18,0,0,1-7.47-8.26V168.27a8.19,8.19,0,0,1,7.47-8.26,8,8,0,0,1,8.53,8Zm0-56a8,8,0,0,1-8.53,8,8.19,8.19,0,0,1-7.47-8.26V112.27a8.19,8.19,0,0,1,7.47-8.26,8,8,0,0,1,8.53,8Z"></path></svg>`,
            features: [
                "Unlimited cloud storage",
                "Custom security protocols",
                "24/7 VIP support",
                "Audit logs & detailed reporting",
                "API access for custom integrations",
                "AI-powered search & automation",
                "Remote device management",
            ],
        },
    ],
    BasicPricingdata: BasicPricingPlanType[] = [
        {
            title: "Basic",
            price: "$15",
            year: "Month",
            percent: "25% Off",
            features: [
                "Access to core features",
                "5GB storage",
                "Basic customer support",
                "1 user access",
                "Email notifications",
            ],
            btnColor: "primary",
            badgeColor: "secondary",
            priceColor: 'primary'
        },
        {
            title: "Pro",
            price: "$45",
            year: "Month",
            titleColor: "text-fixed-white",
            percent: "40% Off",
            features: [
                "All Basic Plan Features",
                "50GB storage",
                "Priority customer support",
                "5 user access",
                "Advanced analytics",
            ],
            cardClass: "card-bg-primary",
            priceColor: "fixed-white",
            btnColor: "light",
            badgeColor: "white",
        },
        {
            title: "Enterprise",
            price: "$99",
            year: "Month",
            percent: "50% Off",
            features: [
                "All Pro Plan Features",
                "Unlimited storage",
                "Dedicated account manager",
                "20 user access",
                "Customizable workflows",
            ],
            btnColor: "primary",
            badgeColor: "secondary",
            priceColor: 'primary'
        },
    ],
    BasicPricing1data: BasicPricingPlanType[] = [
        {
            title: "Basic",
            price: "$150",
            year: "Year",
            percent: "25% Off",
            features: [
                "Access to core features",
                "5GB storage",
                "Basic customer support",
                "1 user access",
                "Email notifications",
            ],
            btnColor: "primary",
            badgeColor: "secondary",
            priceColor: 'primary'
        },
        {
            title: "Pro",
            price: "$450",
            year: "Year",
            titleColor: "text-fixed-white",
            percent: "40% Off",
            features: [
                "All Basic Plan Features",
                "50GB storage",
                "Priority customer support",
                "5 user access",
                "Advanced analytics",
            ],
            cardClass: "card-bg-primary",
            priceColor: "fixed-white",
            btnColor: "light",
            badgeColor: "white",
        },
        {
            title: "Enterprise",
            price: "$990",
            year: "Year",
            percent: "50% Off",
            features: [
                "All Pro Plan Features",
                "Unlimited storage",
                "Dedicated account manager",
                "20 user access",
                "Customizable workflows",
            ],
            btnColor: "primary",
            badgeColor: "secondary",
            priceColor: 'primary'
        },
    ];