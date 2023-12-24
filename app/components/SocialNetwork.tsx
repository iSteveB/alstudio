import React from 'react';
import Email from '../ui/svg/Email';
import Facebook from '../ui/svg/Facebook';
import SnapChat from '../ui/svg/SnapChat';
import Instagram from '../ui/svg/Instagram';
import Tiktok from '../ui/svg/Tiktok';
import Link from 'next/link';

interface Props {
    tailwindcss: string;
}

const SocialNetwork: React.FC<Props> = ({ tailwindcss }) => {
    return (
        <div className={`${tailwindcss}`}>
            <Link href=''>
                <SnapChat />
            </Link>
            <Link href='https://www.facebook.com/rehaussementdecilsbydeborah'>
                <Facebook />
            </Link>
            <Link href='https://instagram.com/alstudiophoto?igshid=NGVhN2U2NjQ0Yg=='>
                <Instagram />
            </Link>
            <Link href='https://www.tiktok.com/@a.l.studiophotos?_t=8gS9kIGYT8C&_r=1'>
                <Tiktok />
            </Link>
            <Link href='/contact'>
                <Email />
            </Link>
        </div>
    );
};

export default SocialNetwork;
