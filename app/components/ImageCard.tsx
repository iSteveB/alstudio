import React from 'react';
import Image from 'next/image';
import { PictureData } from '@/types/pictureData';
import ImageSectionContainer from './ImageSectionContainer';


const ImageCard = ({picture}: {picture: PictureData}) => {
    return (
        <ImageSectionContainer imgSrc={picture.image.asset.url} imgAlt={picture.image.alt}/>
    );
};

export default ImageCard;