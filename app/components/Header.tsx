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
        <header className='flex w-full items-center justify-between border-b-3 border-moggle bg-crema px-8 py-2 transition-all duration-300 ease-in-out md:px-16'>
            <div className='lg:grow'>
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
            <div className='lg:grow'>
                <Logo tailwindCSS='w-32'/>
            </div>
            <div className='lg:grow'>
                <SocialNetwork tailwindcss='hidden lg:flex flex-row justify-between lg:gap-10 gap-20' />
                <ChatBubble />
            </div>
        </header>
    ) : (
        <header className='flex w-full items-center justify-between border-b-3 border-moggle bg-crema p-8 transition-all duration-300 ease-in-out md:px-16'>
            <div className='lg:grow'>
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

            <div className='lg:grow'>
                <Logo />
            </div>

            <div className='lg:grow'>
                <SocialNetwork tailwindcss='hidden lg:flex flex-row justify-between lg:gap-10 gap-20' />
                <ChatBubble />
            </div>
        </header>
    );
};

export default Header;
