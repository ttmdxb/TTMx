import face1 from '/images/faces/1.jpg';
import face2 from '/images/faces/2.jpg';
import face3 from '/images/faces/3.jpg';
import face4 from '/images/faces/4.jpg';
import face5 from '/images/faces/5.jpg';
import face11 from '/images/faces/11.jpg';
import face12 from '/images/faces/12.jpg';
import face13 from '/images/faces/13.jpg';
import face14 from '/images/faces/14.jpg';
import face15 from '/images/faces/15.jpg';


interface InvoiceDataItemType {
    id: number;
    title: string;
    price: string;
    value: string;
    color: string;
    arrow: string;
    percent: string;
    percentColor: string;
    cardClass: string;
    dollar: string;
    kelvin: string;
    svgIcon: string;
}

interface InvoiceType {
    id: string;
    name: string;
    email: string;
    avatar: string;
    invoiceId: string;
    issueDate: string;
    amount: string;
    status: string;
    statusColor: string;
    dueDate: string;
}

export const Invoicedata: InvoiceDataItemType[] = [
    {
        id: 1,
        title: "Total Amount",
        price: "472",
        value: "12,345",
        color: "primary",
        arrow: "up",
        percent: "3.25%",
        percentColor: "success",
        cardClass: "primary",
        dollar: "$",
        kelvin: 'k',
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,40H40A16,16,0,0,0,24,56V208a8,8,0,0,0,11.58,7.15L64,200.94l28.42,14.21a8,8,0,0,0,7.16,0L128,200.94l28.42,14.21a8,8,0,0,0,7.16,0L192,200.94l28.42,14.21A8,8,0,0,0,232,208V56A16,16,0,0,0,216,40ZM176,144H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z"></path></svg>`,
    },
    {
        id: 2,
        title: "Total Paid",
        price: "321",
        dollar: "$",
        kelvin: 'k',
        value: "4,176",
        color: "secondary",
        arrow: "down",
        percent: "1.16%",
        percentColor: "danger",
        cardClass: "secondary",
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M28,128a8,8,0,0,1,0-16H56a8,8,0,0,0,0-16H40a24,24,0,0,1,0-48,8,8,0,0,1,16,0h8a8,8,0,0,1,0,16H40a8,8,0,0,0,0,16H56a24,24,0,0,1,0,48,8,8,0,0,1-16,0ZM224,48H96a8,8,0,0,0,0,16H216V96H104a8,8,0,0,0,0,16h56v32H80a8,8,0,0,0,0,16h80v32H40V152a8,8,0,0,0-16,0v40a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Z"></path></svg>`,
    },
    {
        id: 3,
        title: "Pending Invoices",
        price: "81",
        dollar: "",
        kelvin: '',
        value: "7,064",
        color: "success",
        arrow: "up",
        percent: "0.25%",
        percentColor: "success",
        cardClass: "success",
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M100,116.43a8,8,0,0,0,4-6.93v-72A8,8,0,0,0,93.34,30,104.06,104.06,0,0,0,25.73,147a8,8,0,0,0,4.52,5.81,7.86,7.86,0,0,0,3.35.74,8,8,0,0,0,4-1.07ZM88,49.62v55.26L40.12,132.51C40,131,40,129.48,40,128A88.12,88.12,0,0,1,88,49.62ZM232,128A104,104,0,0,1,38.32,180.7a8,8,0,0,1,2.87-11L120,123.83V32a8,8,0,0,1,8-8,104.05,104.05,0,0,1,89.74,51.48c.11.16.21.32.31.49s.2.37.29.55A103.34,103.34,0,0,1,232,128Z"></path></svg>`,
    },
    {
        id: 4,
        title: "Overdue Invoices",
        price: "33",
        dollar: "",
        kelvin: 'K',
        value: "1,105",
        color: "orange",
        arrow: "down",
        percent: "0.46%",
        percentColor: "danger",
        cardClass: "warning",
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"></path></svg>`,
    },
],
    //Manage Invoices
    Invoices: InvoiceType[] = [
        {
            id: "1",
            name: "John Doe",
            email: "jhondoe32@gmail.com",
            avatar: face11,
            invoiceId: "SPK - 1001",
            issueDate: "Mar 01, 2025",
            amount: "$1,250.00",
            status: "Paid",
            statusColor: "success",
            dueDate: "Mar 10, 2025"
        },
        {
            id: "2",
            name: "Sarah Smith",
            email: "sarahsmith99@gmail.com",
            avatar: face1,
            invoiceId: "SPK - 1002",
            issueDate: "Mar 05, 2025",
            amount: "$3,499.50",
            status: "Pending",
            statusColor: "warning",
            dueDate: "Mar 15, 2025"
        },
        {
            id: "3",
            name: "Robert Brown",
            email: "robertbrown865@gmail.com",
            avatar: face12,
            invoiceId: "SPK - 1003",
            issueDate: "Mar 08, 2025",
            amount: "$2,875.00",
            status: "Overdue",
            statusColor: "danger",
            dueDate: "Mar 18, 2025"
        },
        {
            id: "4",
            name: "Emma Wilson",
            email: "emmawilson04@gmail.com",
            avatar: face2,
            invoiceId: "SPK - 1004",
            issueDate: "Mar 10, 2025",
            amount: "$4,150.75",
            status: "Paid",
            statusColor: "success",
            dueDate: "Mar 20, 2025"
        },
        {
            id: "5",
            name: "David Johnson",
            email: "davidjohnson444@gmail.com",
            avatar: face13,
            invoiceId: "SPK - 1005",
            issueDate: "Mar 12, 2025",
            amount: "$1,999.99",
            status: "Pending",
            statusColor: "primary",
            dueDate: "Mar 22, 2025"
        },
        {
            id: "6",
            name: "Olivia Martin",
            email: "oliviamartin97@gmail.com",
            avatar: face3,
            invoiceId: "SPK - 1006",
            issueDate: "Mar 15, 2025",
            amount: "$3,750.00",
            status: "Paid",
            statusColor: "success",
            dueDate: "Mar 25, 2025"
        },
        {
            id: "7",
            name: "James White",
            email: "jameswhite123@gmail.com",
            avatar: face14,
            invoiceId: "SPK - 1007",
            issueDate: "Mar 18, 2025",
            amount: "$2,250.00",
            status: "Overdue",
            statusColor: "success",
            dueDate: "Mar 28, 2025"
        },
        {
            id: "8",
            name: "Sophia Lewis",
            email: "sophialewis97@gmail.com",
            avatar: face4,
            invoiceId: "SPK - 1008",
            issueDate: "Mar 20, 2025",
            amount: "$5,100.25",
            status: "Pending",
            statusColor: "warning",
            dueDate: "Mar 30, 2025"
        },
        {
            id: "9",
            name: "Michael Green",
            email: "michaelgreen15@gmail.com",
            avatar: face15,
            invoiceId: "SPK - 1009",
            issueDate: "Mar 22, 2025",
            amount: "$3,600.00",
            status: "Paid",
            statusColor: "success",
            dueDate: "Apr 01, 2025"
        },
        {
            id: "10",
            name: "Emily Harris",
            email: "emileyharris@gmail.com",
            avatar: face5,
            invoiceId: "SPK - 1010",
            issueDate: "Mar 25, 2025",
            amount: "$2,980.40",
            status: "Pending",
            statusColor: "success",
            dueDate: "Apr 05, 2025"
        }
    ];
