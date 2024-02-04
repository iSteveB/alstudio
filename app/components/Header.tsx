'use client';

import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Logo from '../ui/svg/Logo';
import SocialNetwork from './SocialNetwork';

import BurgerMenu from '../ui/svg/BurgerMenu';
import CloseButton from '../ui/svg/CloseButton';
import ChatBubble from '../ui/svg/ChatBubble';
import useScroll from '../hooks/useScroll';

const Header = () => {
    const [showMenu, setshowMenu] = useState(false);
    const isScrolled = useScroll(250);

    const toggleMenu = () => {
        setshowMenu(!showMenu);
    };

    return (
        <header
            className={`flex w-full items-center justify-between border-b-3 border-moggle bg-crema ${
                isScrolled ? 'px-8 py-2' : 'px-3 py-6'
            } transition-all duration-300 ease-in-out md:px-16`}>
            <div className='lg:flex-1'>
                <div className='lg:flex'>
                    <Navigation
                        showMenu={showMenu}
                        setShowMenu={() => setshowMenu(false)}
                    />
                </div>
                <div
                    className='block cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 lg:hidden'
                    onClick={toggleMenu}>
                    {showMenu ? <CloseButton /> : <BurgerMenu />}
                </div>
            </div>
            <div className='lg:flex-1'>
                <Logo tailwindCSS={isScrolled ? 'w-32' : 'h-16 sm:h-20'} />
            </div>
            <div className='lg:flex-1'>
                <SocialNetwork tailwindcss='hidden lg:flex flex-row justify-around' />
                <ChatBubble />
            </div>
        </header>
    );
};

export default Header;
