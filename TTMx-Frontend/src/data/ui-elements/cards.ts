import face2 from "/images/faces/2.jpg"
import face8 from "/images/faces/8.jpg"
import face4 from "/images/faces/4.jpg"
import face6 from "/images/faces/6.jpg"
import face1 from "/images/faces/1.jpg"
import face12 from "/images/faces/12.jpg"
import face10 from "/images/faces/10.jpg"
import face16 from "/images/faces/16.jpg"
import face3 from "/images/faces/3.jpg"
import face14 from "/images/faces/14.jpg"
import face11 from "/images/faces/11.jpg"
import face15 from "/images/faces/15.jpg"
import face9 from "/images/faces/9.jpg"
import face5 from "/images/faces/5.jpg"
import face7 from "/images/faces/7.jpg"

interface Badge {
    text: string;
    className: string;
}

interface BorderCardType {
    title: string;
    badges: Badge[];
    images: string[];
    Color: string;
    Class: string;
}

export let
    borderCards: BorderCardType[] = [
        {
            title: 'Home Page Design',
            badges: [
                { text: 'Framework', className: 'bg-primary-transparent' },
                { text: 'Angular', className: 'bg-secondary-transparent' },
                { text: 'Php', className: 'bg-info-transparent' },
            ],
            images: [
                face2,
                face8,
                face2,
            ],
            Color: 'primary',
            Class: 'primary'
        },
        {
            title: 'Landing Page Design',
            badges: [
                { text: 'Laravel', className: 'bg-danger-transparent' },
                { text: 'Codeignitor', className: 'bg-teal-transparent' },
                { text: 'Php', className: 'bg-success-transparent' },
            ],
            images: [
                face4,
                face6,
            ],
            Color: 'secondary',
            Class: 'secondary'
        },
        {
            title: 'Update New Project',
            badges: [
                { text: 'Html', className: 'bg-warning-transparent' },
                { text: 'Bootstrap', className: 'bg-secondary-transparent' },
                { text: 'React', className: 'bg-info-transparent' },
            ],
            images: [
                face1,
                face12,
                face10,
                face16
            ],
            Color: 'warning',
            Class: 'warning',
        },
        {
            title: 'New Project Discussion',
            badges: [
                { text: 'React', className: 'bg-info-transparent' },
                { text: 'Typescript', className: 'bg-primary-transparent' },
            ],
            images: [
                face3,
                face14,
                face11,
            ],
            Color: 'info',
            Class: 'info'
        },
        {
            title: 'Recent Projects Testing',
            badges: [
                { text: 'Ui', className: 'bg-primary-transparent' },
                { text: 'Angular', className: 'bg-secondary-transparent' },
                { text: 'Java', className: 'bg-info-transparent' },
            ],
            images: [
                face15,
            ],
            Color: 'danger',
            Class: 'danger',
        },
        {
            title: 'About Us Page Redesign',
            badges: [
                { text: 'Html', className: 'bg-danger-transparent' },
                { text: 'Symphony', className: 'bg-warning-transparent' },
                { text: 'Php', className: 'bg-success-transparent' },
            ],
            images: [
                face6,
                face9,
            ],
            Color: 'success',
            Class: 'success',
        },
        {
            title: 'New Employees',
            badges: [
                { text: 'Html', className: 'bg-warning-transparent' },
                { text: 'Cake Php', className: 'bg-info-transparent' },
                { text: 'React', className: 'bg-success-transparent' },
            ],
            images: [
                face5,
                face6,
                face7,
            ],
            Color: 'light',
            Class: 'default',
        },
        {
            title: 'Terminated Employees',
            badges: [
                { text: 'Angular', className: 'bg-primary-transparent' },
            ],
            images: [
                face9,
                face11,
                face12,
                face15,
            ],
            Color: 'dark',
            Class: 'dark'
        }
    ];