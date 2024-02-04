'use client';
import { gabriela } from '../ui/font';
import Link from 'next/link';
import useScroll from '../hooks/useScroll';

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

    const isScrolled = useScroll(250);
    

    return (
        <nav className={`${gabriela.className} uppercase ${tailwindCSS}`}>
            <ul
                onClick={setShowMenu}
                className={`${
                    showMenu
                        ? `fixed ${isScrolled ? 'top-[78px]' : 'top-[115px] sm:top-[131px]'} left-0 flex h-screen w-full flex-col items-center justify-start gap-10 bg-crema pt-28 text-2xl`
                        : 'bottom-0 hidden flex-row items-center gap-6 transition lg:flex'
                }`}>
                {MENU.map(({ id, title, href }) => {
                    return (
                        <li
                            className='transition-all duration-300 ease-in-out hover:scale-125'
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
