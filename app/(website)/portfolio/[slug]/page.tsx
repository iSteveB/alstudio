import Modal from '@/app/components/Modal';
import { getPicture } from '@/sanity/sanity.utils';
import { PictureData } from '@/types/pictureData';
import Image from 'next/image';

export default async function Page({ params }: { params: { slug: string } }) {
    const picture: PictureData[] = await getPicture(params.slug);

    return (
        
        <Modal>
            <Image
                src={picture[0].image.asset.url}
                alt={picture[0].image.alt}
                width={picture[0].image.asset.metadata.dimensions.width}
                height={picture[0].image.asset.metadata.dimensions.height}
                objectFit='cover'
                priority
            />
        </Modal>
    
    );
}
