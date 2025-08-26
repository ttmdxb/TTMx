interface DeviceType {
    id: number;
    icon: string;
    name: string;
    locationDate: string;
}

interface MailCategoryType {
    id: string;
    label: string;
    defaultChecked: boolean;
}


export const Devices: DeviceType[] = [
    {
        id: 1,
        icon: 'phone',
        name: 'Mobile-LG-1023',
        locationDate: 'Manchester, UK-Nov 30, 04:45PM',
    },
    {
        id: 2,
        icon: 'laptop',
        name: 'Lenovo-1291203',
        locationDate: 'England, UK-Aug 12, 12:25PM',
    },
    {
        id: 3,
        icon: 'laptop',
        name: 'Macbook-Suzika',
        locationDate: 'Brightoon, UK-Jul 18, 8:34AM',
    },
    {
        id: 4,
        icon: 'pc-display-horizontal',
        name: 'Apple-Desktop',
        locationDate: 'Darlington, UK-Jan 14, 11:14AM',
    },
],
    MailCategories: MailCategoryType[] = [
        { id: 'label-all-mails', label: 'All Mails', defaultChecked: true },
        { id: 'label-sent', label: 'Inbox', defaultChecked: true },
        { id: 'label-sent2', label: 'Sent', defaultChecked: true },
        { id: 'label-drafts', label: 'Drafts', defaultChecked: true },
        { id: 'label-spam', label: 'Spam', defaultChecked: true },
        { id: 'label-important', label: 'Important', defaultChecked: true },
        { id: 'label-trash', label: 'Trash', defaultChecked: true },
        { id: 'label-archive', label: 'Archive', defaultChecked: true },
        { id: 'label-starred', label: 'Starred', defaultChecked: true },
    ],
    Categories: MailCategoryType[] = [
        { id: 'label-mail', label: 'Mail', defaultChecked: true },
        { id: 'label-home', label: 'Home', defaultChecked: true },
        { id: 'label-work', label: 'Work', defaultChecked: true },
        { id: 'label-friends', label: 'Friends', defaultChecked: true },
    ];