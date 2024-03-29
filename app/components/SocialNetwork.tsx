import React from 'react';
import Email from '../ui/svg/Email';
import { Instagram, Facebook, Tiktok } from '../ui/svg/SocialNetworkIcons';
import Link from 'next/link';

interface Props {
    tailwindcss: string;
}

const SocialNetwork: React.FC<Props> = ({ tailwindcss }) => {
    return (
        <div className={`${tailwindcss}`}>
            <Link
                className='transition-all duration-300 hover:scale-125'
                href='https://www.facebook.com/rehaussementdecilsbydeborah'
                target='_blank'>
                <Facebook color={1}/>
            </Link>
            <Link
                className='transition-all duration-300 hover:scale-125'
                href='https://instagram.com/alstudiophoto?igshid=NGVhN2U2NjQ0Yg=='
                target='_blank'>
                <Instagram color={1}/>
            </Link>
            <Link
                className='transition-all duration-300 hover:scale-125'
                href='https://www.tiktok.com/@a.l.studiophotos?_t=8gS9kIGYT8C&_r=1'
                target='_blank'>
                <Tiktok color={1}/>
            </Link>
            <Link
                className='transition-all duration-300 hover:scale-125'
                href='/contact'>
                <Email />
            </Link>
        </div>
    );
};

export default SocialNetwork;
