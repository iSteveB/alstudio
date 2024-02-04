import React from 'react';
import Logo from '../ui/svg/Logo';
import Navigation from './Navigation';
import SocialNetwork from './SocialNetwork';

const Footer = () => {
    return (
        <div className='flex w-full items-center justify-between bg-crema px-16 py-8'>
            <div className='flex flex-col items-center'>
                <Logo />
                <small className='text-xs'>
                    {' '}
                    ©{new Date().getFullYear()} AL Studio - All Rights Reserved
                </small>
            </div>
            <Navigation tailwindCSS='flex flex-row justify-between gap-10' />
            <SocialNetwork tailwindcss='md:flex flex-row justify-between gap-10 hidden' />
        </div>
    );
};

export default Footer;
