import React from 'react';
import { gabriela } from '../ui/font';
import Link from 'next/link';

interface Props {
    showMenu?: boolean;
    tailwindCSS?: string;
    setShowMenu?: () => void;
}

const MENU = [
    {
        id: 1,
        title: 'accueil',
        href: '/',
    },
    {
        id: 2,
        title: 'portfolio',
        href: '/portfolio',
    },
    {
        id: 3,
        title: 'Prestations',
        href: '/services',
    },
    {
        id: 4,
        title: 'réserver',
        href: '/contact',
    },
];

const Navigation: React.FC<Props> = ({
    showMenu,
    tailwindCSS,
    setShowMenu,
}) => {
    return (
        <nav className={`${gabriela.className} uppercase ${tailwindCSS}`}>
            <ul
                onClick={setShowMenu}
                className={`${
                    showMenu
                        ? 'fixed top-[162px] left-0 w-full h-full bg-crema flex flex-col justify-start pt-24 items-center gap-10 text-2xl'
                        : 'lg:flex hidden flex-row bottom-0 items-center gap-6 transition'
                }`}>
                {MENU.map(({ id, title, href }) => {
                    return (
                        <li
                            className='hover:scale-125 duration-300 transition-all ease-in-out'
                            key={id}
                            onClick={setShowMenu}>
                            <Link href={href}>{title}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
