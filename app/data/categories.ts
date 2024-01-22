import { v4 as uuidv4 } from 'uuid';

export const CATEGORIES = [
    {
        id: uuidv4(),
        src: '/images/pregnancy.jpg',
        alt: 'Grossesse',
        href: '/services',
        title: 'Grossesse',
    },
    {
        id: uuidv4(),
        src: '/images/birth.jpg',
        alt: 'Naissance',
        href: '/',
        title: 'Naissance',
    },   
    {
        id: uuidv4(),
        src: '/images/events.jpg', 
        alt: 'Événements',
        href: '/',
        title: 'Événements',
    },
    {
        id: uuidv4(),
        src: '/images/portrait.jpg',
        alt: 'Portrait',
        href: '/',
        title: 'Portrait',
    },
];