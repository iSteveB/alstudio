import React from 'react';

import Image, { StaticImageData } from 'next/image';

interface ImageSectionContainerProps {
    imgSrc: StaticImageData;
    imgAlt: string;
    border?: string;
}

const ImageSectionContainer: React.FC<ImageSectionContainerProps> = ({
    imgSrc,
    imgAlt,
    border,
}) => {
    return (
        <div
            className={`hidden md:w-1/2 lg:block ${border} md:border-moggle lg:object-cover`}>
            <Image
                className='size-full min-h-[378px]'
                src={imgSrc}
                alt={imgAlt}
                priority
            />
        </div>
    );
};

export default ImageSectionContainer;
