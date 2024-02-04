import type { Metadata } from 'next';
import { amiko } from '../ui/font';
import '../globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';
import GoTopArrow from '../ui/svg/GoTopArrow';
import useScroll from '../hooks/useScroll';

export const metadata: Metadata = {
    title: 'AL Studio Photo',
    description:
        "Réalisez vos photos de grossesse, famille et d'événements avec une photographe professionnelle, capturant l'essence de moments précieux. Réservez votre séance maintenant pour un shooting mémorable.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <html className='m-0 size-full' lang='fr'>
            <body
                className={`${amiko.className} flex h-full flex-col bg-crema`}>
                <Toaster position='bottom-right' reverseOrder={true} />
                <div className='fixed top-0 z-50 w-full'>
                    <Header />
                </div>
                <div className='mt-[130px] flex-1 scroll-smooth'>
                    {children}
                    <div className='fixed bottom-6 right-6'>
                        <GoTopArrow />
                    </div>
                </div>

                <Footer />
            </body>
        </html>
    );
}
