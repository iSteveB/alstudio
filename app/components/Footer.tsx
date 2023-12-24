import React from 'react';
import Logo from '../ui/svg/Logo';
import Navigation from './Navigation';
import SocialNetwork from './SocialNetwork';

const Footer = () => {
    return (
        <div className='flex justify-between items-center w-full py-8 px-16 border-t-3 border-moggle '>
            <div className='flex flex-col items-center'>
                <Logo />
                <p className='text-xs'>©2023 AL Studio - All Rights Reserved</p>
            </div>
            <Navigation tailwindCSS='flex flex-row justify-between gap-10' />
            <SocialNetwork tailwindcss='flex flex-row justify-between gap-10' />
        </div>
    );
};

export default Footer;
