import comppanyLogo1 from '/images/company-logos/1.png';
import comppanyLogo2 from '/images/company-logos/2.png';
import comppanyLogo3 from '/images/company-logos/3.png';
import comppanyLogo4 from '/images/company-logos/4.png';
import comppanyLogo5 from '/images/company-logos/5.png';
import comppanyLogo6 from '/images/company-logos/6.png';
import comppanyLogo7 from '/images/company-logos/7.png';
import comppanyLogo8 from '/images/company-logos/8.png';
import comppanyLogo9 from '/images/company-logos/9.png';
import comppanyLogo10 from '/images/company-logos/10.png';
import face1 from '/images/faces/1.jpg';
import face3 from '/images/faces/3.jpg';
import face4 from '/images/faces/4.jpg';
import face8 from '/images/faces/8.jpg';
import face9 from '/images/faces/9.jpg';
import face12 from '/images/faces/12.jpg';
import face14 from '/images/faces/14.jpg';
import face15 from '/images/faces/15.jpg';

interface Tag {
  label: string;
  color: string;
}

interface ContactType {
  id: number;
  name: string;
  lastContacted: string;
  score: number;
  email: string;
  company: string;
  companyLogo: string;
  phone: string;
  source: string;
  tags: Tag[];
  image: string;
}


export const contactstable: ContactType[] = [
  {
    id: 1,
    name: "Jane Smith",
    lastContacted: "2025-03-19 - 02:15 PM",
    score: 70,
    email: "jane.smith@example.com",
    company: "XYZ Ltd",
    companyLogo: comppanyLogo1,
    phone: "(987) 654-3210",
    source: "Referral",
    tags: [
      { label: "New Lead", color: "bg-primary-transparent" },
      { label: "VIP", color: "bg-primary-transparent" }
    ],
    image: face4
  },
  {
    id: 2,
    name: "John Doe",
    lastContacted: "2025-03-20 - 10:30 AM",
    score: 85,
    email: "john.doe@example.com",
    company: "ABC Corp",
    companyLogo: comppanyLogo3,
    phone: "(123) 456-7890",
    source: "Web",
    tags: [
      { label: "Interested", color: "bg-primary-transparent" },
      { label: "VIP", color: "bg-danger-transparent" }
    ],
    image: face12
  },
  {
    id: 3,
    name: "Emily Johnson",
    lastContacted: "2025-03-18 - 09:45 AM",
    score: 90,
    email: "emily.johnson@example.com",
    company: "FutureTech",
    companyLogo: comppanyLogo4,
    phone: "(555) 123-4567",
    source: "Social Media",
    tags: [
      { label: "High Priority", color: "bg-success-transparent" },
      { label: "VIP", color: "bg-success-transparent" }
    ],
    image: face14
  },
  {
    id: 4,
    name: "Michael Brown",
    lastContacted: "2025-03-17 - 03:00 PM",
    score: 50,
    email: "michael.brown@example.com",
    company: "Innovate Solutions",
    companyLogo: comppanyLogo5,
    phone: "(333) 777-8888",
    source: "Web",
    tags: [
      { label: "Interested", color: "bg-light text-default" },
    ],
    image: face14
  },
  {
    id: 5,
    name: "Sara White",
    lastContacted: "2025-03-16 - 11:20 AM",
    score: 60,
    email: "sara.white@example.com",
    company: "DesignWorks",
    companyLogo: comppanyLogo6,
    phone: "(222) 333-4444",
    source: "Event",
    tags: [
      { label: "Potential", color: "bg-pink-transparent" },
    ],
    image: face8
  },
  {
    id: 6,
    name: "David Lee",
    lastContacted: "2025-03-15 - 08:05 AM",
    score: 80,
    email: "david.lee@example.com",
    company: "Tech Innovations",
    companyLogo: comppanyLogo7,
    phone: "(444) 555-6666",
    source: "Referral",
    tags: [
      { label: "Interested", color: "bg-danger-transparent" },
      { label: "VIP", color: "bg-info-transparent" }
    ],
    image: face9
  },
  {
    id: 7,
    name: "Olivia Green",
    lastContacted: "2025-03-14 - 12:30 PM",
    score: 95,
    email: "olivia.green@example.com",
    company: "GreenTech",
    companyLogo: comppanyLogo8,
    phone: "(555) 777-8888",
    source: "Web",
    tags: [
      { label: "High Priority", color: "bg-warning-transparent" },
      { label: "New Laed", color: "bg-purple-transparent" }
    ],
    image: face15
  },
  {
    id: 8,
    name: "Liam Turner",
    lastContacted: "2025-03-13 - 05:45 PM",
    score: 65,
    email: "liam.turner@example.com",
    company: "Innovators Inc",
    companyLogo: comppanyLogo9,
    phone: "(888) 999-0000",
    source: "Event",
    tags: [
      { label: "Interested", color: "bg-success-transparent" },
    ],
    image: face1
  },
  {
    id: 9,
    name: "Mia Martinez",
    lastContacted: "2025-03-12 - 10:00 AM",
    score: 70,
    email: "mia.martinez@example.com",
    company: "Creativa Solutions",
    companyLogo: comppanyLogo10,
    phone: "(777) 888-9999",
    source: "Social Media",
    tags: [
      { label: "New Laed", color: "bg-primary-transparent" },
      { label: "VIP", color: "bg-light text-default" }
    ],
    image: face3
  },
  {
    id: 10,
    name: "Noah Harris",
    lastContacted: "2025-03-11 - 01:30 PM",
    score: 85,
    email: "noah.harris@example.com",
    company: "GreenFuture",
    companyLogo: comppanyLogo2,
    phone: "(444) 555-6666",
    source: "Referral",
    tags: [
      { label: "High Priority", color: "bg-primary-transparent" },
    ],
    image: face15
  }
], leadData: string[] = [
  'New Lead',
  'Prospect',
  'Customer',
  'Hot Lead',
  'Partner',
  'LostCustomer',
  'Influencer',
  'Subscriber',
], sourceData: string[] = [
  'Social Media',
  'Direct mail',
  'Blog Articles',
  'Affiliates',
  'Organic search',
];