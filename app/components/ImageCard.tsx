import React from 'react';
import Image from 'next/image';
import { PictureData } from '@/types/pictureData';


const ImageCard = ({picture}: {picture: PictureData}) => {
    return (
        <>
            <Image
                    src={picture.image.asset.url}
                    alt={picture.image.alt}
                    width={900}
                    height={900}
                />
        </>
    );
};

export default ImageCard;