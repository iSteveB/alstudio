import React from 'react';

import Image, { StaticImageData } from 'next/image';

interface ImageContainerProps {
    imgSrc: StaticImageData;
    imgAlt: string;
    border?: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ imgSrc, imgAlt, border }) => {
    return (
        <div className={`hidden lg:block md:w-1/2 ${border} md:border-moggle lg:object-cover`}>
            <Image
                className='w-full h-full min-h-[378px]'
                src={imgSrc}
                alt={imgAlt}
                priority
            />
        </div>
    );
};

export default ImageContainer;
