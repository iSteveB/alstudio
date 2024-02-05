import { Metadata } from 'next/types';

import CategoriesDetails from '@/app/components/CategoriesDetails';

export const metadata: Metadata = {
    title: 'Prestations',
    description: 'Découvrez les prestations de AL Studio Photo',
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        title: 'Prestations',
        description: 'Découvrez les prestations de AL Studio Photo',
        siteName: 'AL Studio Photo',
    },
    keywords: [
        'photographe professionnelle', 'photos de grossesse', 'séance photo famille', 'shooting événementiel', 'photographe portrait', 'photographe enfant', 'photographe mariage'
    ],
};

const Services = () => {
    <CategoriesDetails />
};

export default Services;
