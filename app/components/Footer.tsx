import React from 'react';
import Logo from '../ui/svg/Logo';
import Navigation from './Navigation';
import SocialNetwork from './SocialNetwork';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row  w-full items-center justify-center bg-crema px-16 py-8 md:justify-between'>
            <div className='flex flex-col items-center'>
                <Logo />
                <small className='text-xs'>
                    {' '}
                    ©{new Date().getFullYear()} AL Studio - All Rights Reserved
                </small>
            </div>

            <div className='flex flex-col items-center gap-6'>

                <Navigation tailwindCSS='flex flex-row justify-between gap-10' />

                <div className='flex flex-col items-center gap-2 sm:items-center md:items-start lg:items-center '>

                    <div className='flex flex-row gap-4 text-xs sm:flex-row md:flex-col lg:flex-row'>
                        <Link href='/legals/cgu' className='hover:underline'>
                            CGU
                        </Link>
                        <Link
                            href='/legals/privacy-policy'
                            className='hover:underline'>
                            Politique de confidentialité
                        </Link>
                        <Link
                            href='/legals/legals-mentions'
                            className='hover:underline'>
                            Mentions légales
                        </Link>
                    </div>
                    
                    <div className='flex flex-row gap-4 text-xs sm:flex-row md:flex-col lg:flex-row'>
                        <Link href='/contact' className='hover:underline'>
                            Contact
                        </Link>
                        <Link href='/faq' className='hover:underline'>
                            F.A.Q.
                        </Link>
                    </div>
                </div>
            </div>
            <SocialNetwork tailwindcss='md:flex flex-row justify-between gap-10 hidden' />
        </div>
    );
};

export default Footer;
