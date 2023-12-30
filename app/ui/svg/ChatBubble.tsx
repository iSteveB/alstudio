import React, { useState } from 'react';
import Facebook from './Facebook';
import Tiktok from './Tiktok';
import Instagram from './Instagram';
import Email from './Email';
import Link from 'next/link';
import { gabriela } from '../font';

function ChatBubble() {
    const [showSocialNetwork, setShowSocialNetwork] = useState(false);

    return (
        <div className='lg:hidden'>
            <div
                className='w-10 hover:scale-125 cursor-pointer duration-300 transition-all ease-in-out'
                onClick={() => setShowSocialNetwork(!showSocialNetwork)}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <path
                        fill='none'
                        stroke='#312920'
                        strokeLinecap='round'
                        strokeMiterlimit='10'
                        strokeWidth='32'
                        d='M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z'></path>
                    <path
                        fill='none'
                        stroke='#312920'
                        strokeLinecap='round'
                        strokeMiterlimit='10'
                        strokeWidth='32'
                        d='M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11'></path>
                </svg>
            </div>
            <div
                className={`uppercase ${gabriela.className} ${
                    showSocialNetwork
                        ? 'fixed top-[162px] left-0 w-full h-full bg-crema flex-col pt-24 z-2'
                        : 'lg:flex hidden flex-row bottom-0 items-center gap-6 transition'
                } `}>
                <ul className='flex flex-col items-center gap-10'>
                    <li className='hover:scale-125 duration-300 transition-all ease-in-out'>
                        <Link href={''} className='flex items-center text-xl gap-2'>
                                <Facebook />
                                <span>Facebook</span>
                        </Link>
                    </li>
                    <li className='hover:scale-125 duration-300 transition-all ease-in-out'>
                        <Link href={''} className='flex items-center text-xl gap-2'>
                            <Instagram />
                            <span>Instagram</span>
                        </Link>
                    </li>
                    <li className='hover:scale-125 duration-300 transition-all ease-in-out'>
                        <Link
                            href={''}
                            className='flex flex-row items-center text-xl gap-2'>
                            <Tiktok />
                            <span>TikTok</span>
                        </Link>
                    </li>
                    <li className='hover:scale-125 duration-300 transition-all ease-in-out'>
                        <Link href={''} className='flex items-center text-xl gap-2'>
                            <Email />
                            <span>Email</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ChatBubble;
