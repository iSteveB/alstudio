import React from 'react';
import Email from '../ui/svg/Email';
import Facebook from '../ui/svg/Facebook';
import SnapChat from '../ui/svg/SnapChat';
import Instagram from '../ui/svg/Instagram';
import Tiktok from '../ui/svg/Tiktok';

interface Props {
    tailwindcss: string;
}

const SocialNetwork: React.FC<Props> = ({tailwindcss}) => {
    return (
        <div className={`${tailwindcss} `}>
            <SnapChat />
            <Facebook />
            <Instagram />
            <Tiktok />
            <Email />
        </div>
    );
};

export default SocialNetwork;