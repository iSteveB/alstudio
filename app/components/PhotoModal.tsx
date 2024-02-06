import { PictureData } from '@/types/pictureData';
import Image from 'next/image';

export default function PhotoCard({ photo }: { photo: PictureData }) {
    return (
        <>
            <Image
                alt={photo.image.alt}
                src={photo.image.asset.url}
                width={photo.image.asset.metadata.dimensions.width}
                height={photo.image.asset.metadata.dimensions.height}
                className='aspect-auto max-h-screen w-full object-cover'
                priority
            />
        </>
    );
}
