import React from 'react';
import { gabriela } from '../ui/font';
import Link from 'next/link';

interface Props {
    showMenu?: boolean;
    tailwindCSS?: string;
    setShowMenu?: ()=> void;
}

const Navigation: React.FC<Props> = ({showMenu, tailwindCSS, setShowMenu }) => {
    return (
        <nav className={`${gabriela.className} uppercase ${tailwindCSS}`}>
            <ul
                onClick={setShowMenu}
                className={`${
                    showMenu
                        ? 'fixed top-[162px] left-0 w-full h-full bg-crema flex flex-col justify-start mt-24 items-center gap-10' 
                        : 'lg:flex hidden flex-row bottom-0 items-center gap-6 transition'
                }`}>
                <li className='active:scale-110'>
                    <Link href='/'>accueil</Link>
                </li>
                <li className='active:scale-110'>
                    <Link href='/portfolio'>portfolio</Link>
                </li>
                <li className='active:scale-110'>
                    <Link href='/services'>services</Link>
                </li>
                <li className='active:scale-110'>
                    <Link href='/contact'>réserver</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
