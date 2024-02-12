import {Instagram, Facebook, Tiktok} from '../ui/svg/SocialNetworkIcons';
import Email from '../ui/svg/Email';

export const links = [
    {
        href: 'https://www.facebook.com/rehaussementdecilsbydeborah',
        icon: <Facebook color='#8B7E69'/>,
        text: 'Facebook',
        newTab: true
    },
    {
        href: 'https://instagram.com/alstudiophoto?igshid=NGVhN2U2NjQ0Yg==',
        icon: <Instagram color='#8B7E69'/>,
        text: 'Instagram',
        newTab: true
    },
    {
        href: 'https://www.tiktok.com/@a.l.studiophotos?_t=8gS9kIGYT8C&_r=1',
        icon: <Tiktok color='#8B7E69'/>,
        text: 'TikTok',
        newTab: true
    },
    {
        href: '/contact',
        icon: <Email />,
        text: 'Email',
    },
];