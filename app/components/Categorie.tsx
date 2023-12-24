import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { gabriela } from '../ui/font';
import { v4 as uuidv4 } from 'uuid';

export const CATEGORIES = [
    {
        id: uuidv4(),
        src: '/images/pregnancy.jpg',
        alt: 'Grossesse',
        href: '/',
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

const Categorie = () => {
    return (CATEGORIES.map(({ src, alt, href, title }) => {
        
        <Link className='flex flex-col items-center gap-2 w-[263px] h-[330px]'  href={href}>
            <Image
                className='border-3 border-moggle'
                src={src}
                alt={alt}
                loading='lazy'
                fill={true}
            />
            <h3 className={`${gabriela.className} uppercase`}>{title}</h3>
        </Link>;
    }))
};

export default Categorie;
