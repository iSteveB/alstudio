import { v4 as uuidv4 } from 'uuid';

export const CATEGORIES = [
    {
        id: uuidv4(),
        src: '/images/pregnancy.webp',
        alt: 'Grossesse',
        href: '/services',
        title: 'Grossesse',
    },
    {
        id: uuidv4(),
        src: '/images/birth.jpg',
        alt: 'Naissance',
        href: '/services#child',
        title: 'Naissance',
    },   
    {
        id: uuidv4(),
        src: '/images/portrait.webp',
        alt: 'Portrait',
        href: '/services#portrait',
        title: 'Portrait',
    },
    {
        id: uuidv4(),
        src: '/images/events.jpg', 
        alt: 'Événements',
        href: '/services#event',
        title: 'Événements',
    },
];