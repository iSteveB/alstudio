import PhotosGallery from '@/app/components/PhotosGallery';
import { fetchPictures } from '@/app/actions/fetchPictures';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Découvrez les photos d\'AL Studio Photo',
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        title: 'Portfolio',
        description: 'Découvrez les photos d\'AL Studio Photo',
        siteName: 'AL Studio Photo',
    },  
    keywords: [
        'photographe professionnelle', 'photos de grossesse', 'séance photo famille', 'shooting événementiel', 'photographe portrait', 'photographe enfant', 'photographe mariage'
    ]
};

const Portfolio = async () => {
    const pictures = await fetchPictures();

    return (
        <div>
            <PhotosGallery pictures={pictures} />
        </div>
    );
};

export default Portfolio;
