import React from 'react';
import ImageGallery from '@/app/components/ImageGallery';
import { fetchPictures } from '@/app/actions/fetchPictures';

const Portfolio = async () => {
    const pictures = await fetchPictures();

    return (
        <div>
            <ImageGallery pictures={pictures} />
        </div>
    );
};

export default Portfolio;
