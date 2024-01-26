import type { Metadata } from 'next';
import { amiko } from '../ui/font';
import '../globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {

    title: {
        default: 'AL Studio Photo',
        template: '%s | AL Studio Photo',
    },
    description: 
    "Réalisez vos photos de grossesse, famille et d'événements avec une photographe professionnelle, capturant l'essence de moments précieux. Réservez votre séance maintenant pour un shooting mémorable.",

};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className='m-0 h-full' lang='fr'>
            <body
                className={`${amiko.className} flex h-full flex-col bg-crema`}>
                <div className='fixed top-0 z-50 w-full'>
                    <Header />
                </div>
                <div className='mt-[162px] flex-1'>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
