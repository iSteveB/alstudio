import '../globals.css';

import type { Metadata } from 'next';
import { amiko } from '../ui/font';
import { Toaster } from 'react-hot-toast';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GoTopArrow from '../ui/svg/GoTopArrow';

export async function generateMetadata(): Promise<Metadata> {
    return {
      metadataBase: new URL("https://alstudiophotos.com"),
      title: {
        default: "AL Studio - Photographe grossesse, enfance, portrait et événement",
        template: "%s | AL Studio Photo",
      },
      description:
      "Photographe professionnelle capturant l'essence de moments précieux. Réservez une séance photo mémorable.",
      authors: [
        {
          name: "AL Studio Photo",
          url: "https://alstudiophotos.com",
        },
      ],
      twitter: {
        card: "summary_large_image",
        title: "AL Studio - Photographe grossesse, enfance, portrait et événement",
        description:"Photographe professionnelle capturant l'essence de moments précieux. Réservez une séance photo mémorable.",
        images: "https://alstudiophotos.com/images/al_studio_banner.png",
      },
      robots: "index, follow",
      alternates: {
        canonical: `https://alstudiophotos.com`,
        languages: {
          "fr-FR": "/",
        },
      },
      openGraph: {
        type: "website",
        url: `https://alstudiophotos.com`,
        title: "AL Studio - Photographe grossesse, enfance, portrait et événement",
        description: "Photographe professionnelle capturant l'essence de moments précieux. Réservez une séance photo mémorable.",
        siteName: "AL Studio Photo",
        images: [
          {
            url: "https://alstudiophotos.com/images/al_studio_banner.png",
          },
        ],
      },
      assets: "https://alstudiophotos.com/images/al_studio_banner.png",
      keywords: [
        "photographe professionnelle", "photos de grossesse", "séance photo famille", "shooting événementiel", "photographe portrait", "photographe enfant", "photographe mariage"
      ],
    };
  }

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
                <div className='mt-[112px] flex-1 scroll-smooth sm:mt-[130px]'>
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
