import React from 'react';

import Image, { StaticImageData } from 'next/image';

interface ImageSectionContainerProps {
    imgSrc: StaticImageData | string;
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
                className='size-full max-h-[90vh] min-h-[378px] object-cover'
                src={imgSrc}
                alt={imgAlt}
                priority
            />
        </div>
    );
};

export default ImageSectionContainer;
