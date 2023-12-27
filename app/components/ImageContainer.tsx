import React from 'react';

import Image, { StaticImageData } from 'next/image';

interface ImageContainerProps {
    imgSrc: StaticImageData;
    imgAlt: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({imgSrc, imgAlt}) => {
    return (
        <div className='border-l-4 border-moggle w-1/2'>
                    <Image className='w-full h-full' src={imgSrc} alt={imgAlt} priority/>
                </div>
    );
};

export default ImageContainer;