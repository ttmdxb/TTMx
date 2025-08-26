
interface JobType {
  title: string;
  company: string;
  location: string;
  jobVacancies: number;
  qualification: string;
  experience: string;
  shift: string;
  shiftColor: string;
  salaryRange: string;
  featured: boolean;
  avatarColor: string;
  svgIcon: string;
}

export const JobTable: JobType[] = [
  {
    title: "Software Engineer",
    company: "Tech Innovations Inc.",
    location: "New York, NY",
    jobVacancies: 5,
    qualification: "Computer Science",
    experience: "2-4 years",
    shift: "Day Shift",
    shiftColor: 'primary',
    salaryRange: "$80,000 - $100,000",
    featured: true,
    avatarColor: 'primary',
    svgIcon: ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M40,176V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16V176Z" opacity="0.2"/><path d="M40,176V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16V176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M24,176H232a0,0,0,0,1,0,0v16a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V176A0,0,0,0,1,24,176Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="144" y1="88" x2="112" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`
  },
  {
    title: "Data Analyst",
    company: "Creative Solutions Ltd.",
    location: "London, UK",
    jobVacancies: 3,
    qualification: "Statistics",
    experience: "1-3 years",
    shift: "Day Shift",
    shiftColor: 'primary',
    salaryRange: "$60,000 - $75,000",
    featured: false,
    avatarColor: 'secondary',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="152" y="40" width="56" height="168" opacity="0.2"/><polyline points="48 208 48 136 96 136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="224" y1="208" x2="32" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="96 208 96 88 152 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="152 208 152 40 208 40 208 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`
  },
  {
    title: "Product Manager",
    company: "GreenTech Solutions",
    location: "San Francisco, CA",
    jobVacancies: 2,
    qualification: "Product Management",
    experience: "4-6 years",
    shift: "Flexible",
    shiftColor: 'warning',
    salaryRange: "$100,000 - $130,000",
    featured: true,
    avatarColor: 'warning',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,144a191.14,191.14,0,0,1-96-25.68h0V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V118.31A191.08,191.08,0,0,1,128,144Z" opacity="0.2"/><line x1="112" y1="112" x2="144" y2="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="32" y="64" width="192" height="144" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,118.31A191.09,191.09,0,0,1,128,144a191.14,191.14,0,0,1-96-25.68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`
  },
  {
    title: "UI/UX Designer",
    company: "WebX Enterprises",
    location: "Berlin, Germany",
    jobVacancies: 4,
    qualification: "Design",
    experience: "2-5 years",
    shift: "Day Shift",
    shiftColor: 'primary',
    salaryRange: "$70,000 - $85,000",
    featured: false,
    avatarColor: 'info',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M165.36,123.05C192.36,99.43,224,64.81,224,32,191.19,32,156.57,63.64,133,90.64A84.39,84.39,0,0,1,165.36,123.05Z" opacity="0.2"/><path d="M16,216H92a52,52,0,1,0-52-52C40,200,16,216,16,216Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M112.41,116.16C131.6,90.29,179.46,32,224,32c0,44.54-58.29,92.4-84.16,111.59" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M133,90.64a84.39,84.39,0,0,1,32.41,32.41" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`
  },
  {
    title: 'Marketing Specialist',
    company: 'SmartSolutions Co.',
    location: 'Tokyo, Japan',
    jobVacancies: 3,
    qualification: 'Marketing',
    experience: '2-4 years',
    shift: 'Flexible',
    shiftColor: 'warning',
    salaryRange: '$55,000 - $70,000',
    featured: true,
    avatarColor: 'success',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M160,160h40a40,40,0,0,0,0-80H160Z" opacity="0.2"/><path d="M160,80V200.67a8,8,0,0,0,3.56,6.65l11,7.33a8,8,0,0,0,12.2-4.72L200,160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,200a8,8,0,0,0,13.15,6.12C105.55,162.16,160,160,160,160h40a40,40,0,0,0,0-80H160S105.55,77.84,53.15,33.89A8,8,0,0,0,40,40Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`
  },
  {
    title: 'HR Manager',
    company: 'SoftMinds Technologies',
    location: 'Mumbai, India',
    jobVacancies: 1,
    qualification: 'HR Management',
    experience: '5+ years',
    shift: 'Day Shift',
    shiftColor: 'primary',
    salaryRange: '$85,000 - $110,000',
    featured: true,
    avatarColor: 'danger',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="84" cy="108" r="52" opacity="0.2"/><path d="M10.23,200a88,88,0,0,1,147.54,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M172,160a87.93,87.93,0,0,1,73.77,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="84" cy="108" r="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M152.69,59.7A52,52,0,1,1,172,160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`
  },
  {
    title: 'Full Stack Developer',
    company: 'DataFusion Labs',
    location: 'Singapore',
    jobVacancies: 3,
    qualification: 'Web Development',
    experience: '3-5 years',
    shift: 'Flexible',
    shiftColor: 'warning',
    salaryRange: '$90,000 - $120,000',
    featured: false,
    avatarColor: 'teal',
    svgIcon: ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="192 168 240 128 192 88 64 88 16 128 64 168 192 168" opacity="0.2"/><polyline points="64 88 16 128 64 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="192 88 240 128 192 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="160" y1="40" x2="96" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`
  },
  {
    avatarColor: 'pink',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="104" y="32" width="48" height="48" rx="8" opacity="0.2"/><rect x="40" y="168" width="48" height="48" rx="8" opacity="0.2"/><rect x="168" y="168" width="48" height="48" rx="8" opacity="0.2"/><rect x="104" y="32" width="48" height="48" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="40" y="168" width="48" height="48" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="168" y="168" width="48" height="48" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="80" x2="128" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="192" y1="120" x2="192" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="64" y1="168" x2="64" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="24" y1="120" x2="232" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
    title: 'Network Administrator',
    company: 'NextGen Systems',
    location: 'Toronto, Canada',
    jobVacancies: 2,
    qualification: 'IT',
    experience: '2-4 years',
    shift: 'Day Shift',
    shiftColor: 'primary',
    salaryRange: '$75,000 - $90,000',
    featured: false
  },
  {
    avatarColor: 'purple',
    title: 'Sales Manager',
    company: 'Innovative Minds Ltd.',
    location: 'Paris, France',
    jobVacancies: 2,
    qualification: 'Business',
    experience: '3-5 years',
    shift: 'Flexible',
    shiftColor: 'warning',
    salaryRange: '$65,000 - $90,000',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M40,184a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H56A16,16,0,0,1,40,56Z" opacity="0.2"/><path d="M40,56V184a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H56A16,16,0,0,1,40,56h0A16,16,0,0,1,56,40H192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="180" cy="132" r="12"/></svg>`,
    featured: false
  },
  {
    avatarColor: 'warning',
    title: 'Flexible',
    shiftColor: 'success',
    company: 'BlueWave Technologies',
    location: 'Sydney, Australia',
    jobVacancies: 5,
    qualification: 'Customer Service',
    experience: '1-3 years',
    shift: 'Rotational',
    salaryRange: '$45,000 - $55,000',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M32,184a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32Z" opacity="0.2"/><path d="M192,128a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h32V128Z" opacity="0.2"/><path d="M224,200v8a32,32,0,0,1-32,32H136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,128H192a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h32V128a96,96,0,1,0-192,0v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
    featured: false
  },
];