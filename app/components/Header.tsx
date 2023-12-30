'use client';

import React, { useState } from 'react';
import Navigation from './Navigation';
import Logo from '../ui/svg/Logo';
import SocialNetwork from './SocialNetwork';

import BurgerMenu from '../ui/svg/BurgerMenu';
import CloseButton from '../ui/svg/CloseButton';
import ChatBubble from '../ui/svg/ChatBubble';

const Header = () => {
    const [showMenu, setshowMenu] = useState(false);

    const toggleMenu = () => {
        setshowMenu(!showMenu);
    };

    return (
        <header className='bg-crema flex justify-between items-center w-full py-8 px-16 border-b-3 border-moggle transition'>
            <div className=''>
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

            <div className=''>
                <Logo />
            </div>

            <div className=''>
                <SocialNetwork tailwindcss='hidden lg:flex flex-row justify-between gap-20' />
                <ChatBubble />
            </div>
        </header>
    );
};

export default Header;
