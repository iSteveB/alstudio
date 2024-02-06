import { Metadata } from 'next/types';

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
        'photographe professionnelle',
        'photos de grossesse',
        'séance photo famille',
        'shooting événementiel',
        'photographe portrait',
        'photographe enfant',
        'photographe mariage',
    ],
};

export default function ServicesLayout(props: { children: React.ReactNode }) {
    return <div>{props.children}</div>;
}
