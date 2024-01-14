'use client';

import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Logo from '../ui/svg/Logo';
import SocialNetwork from './SocialNetwork';

import BurgerMenu from '../ui/svg/BurgerMenu';
import CloseButton from '../ui/svg/CloseButton';
import ChatBubble from '../ui/svg/ChatBubble';

const Header = () => {
    const [showMenu, setshowMenu] = useState(false);
    const [isScrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setshowMenu(!showMenu);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 250) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    return isScrolled ? (
        <header className='bg-crema flex justify-between items-center w-full py-2 md:px-16 px-8 border-b-3 border-moggle transition-all duration-300 ease-in-out'>
            <div className='lg:flex-grow'>
                <div className='lg:flex'>
                    <Navigation
                        showMenu={showMenu}
                        setShowMenu={() => setshowMenu(false)}
                    />
                </div>
                <div
                    className='lg:hidden block cursor-pointer hover:scale-125 duration-300 transition-all ease-in-out'
                    onClick={toggleMenu}>
                    {showMenu ? <CloseButton /> : <BurgerMenu />}
                </div>
            </div>
            <div className='lg:flex-grow'>
                <Logo tailwindCSS='w-32'/>
            </div>
            <div className='lg:flex-grow'>
                <SocialNetwork tailwindcss='hidden lg:flex flex-row justify-between lg:gap-10 gap-20' />
                <ChatBubble />
            </div>
        </header>
    ) : (
        <header className='bg-crema flex justify-between items-center w-full py-8 md:px-16 px-8 border-b-3 border-moggle transition-all duration-300 ease-in-out'>
            <div className='lg:flex-grow'>
                <div className='lg:flex'>
                    <Navigation
                        showMenu={showMenu}
                        setShowMenu={() => setshowMenu(false)}
                    />
                </div>
                <div
                    className='lg:hidden block cursor-pointer hover:scale-125 duration-300 transition-all ease-in-out'
                    onClick={toggleMenu}>
                    {showMenu ? <CloseButton /> : <BurgerMenu />}
                </div>
            </div>

            <div className='lg:flex-grow'>
                <Logo />
            </div>

            <div className='lg:flex-grow'>
                <SocialNetwork tailwindcss='hidden lg:flex flex-row justify-between lg:gap-10 gap-20' />
                <ChatBubble />
            </div>
        </header>
    );
};

export default Header;
