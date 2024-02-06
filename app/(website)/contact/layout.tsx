import { Metadata } from 'next/types';

export const metadata: Metadata = {
    title: 'Contactez-moi',
    description: 'Contactez AL Studio Photo pour toutes vos demandes de prestations',
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        title: 'Contactez-moi',
        description: 'Contactez AL Studio Photo pour toutes vos demandes de prestations',
        siteName: 'AL Studio Photo',
    },
    keywords: [
        'photographe professionnelle',
        'contactez-moi',
        'demande de devis',
        'prise de rendez-vous',
        'contact',
        'photographe mariage',
        'photographe portrait',
        'photographe famille',
        'photographe grossesse',
        'photographe événementiel',
    ],
};

export default function ContactLayout(props: { children: React.ReactNode }) {
    return <div>{props.children}</div>;
}
