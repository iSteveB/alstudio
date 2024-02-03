import React from 'react';
import PhotosGallery from '@/app/components/PhotosGallery';
import { fetchPictures } from '@/app/actions/fetchPictures';

const Portfolio = async () => {
    const pictures = await fetchPictures();

    return (
        <div>
            <PhotosGallery pictures={pictures} />
        </div>
    );
};

export default Portfolio;
