import Modal from '@/app/components/Modal';
import { getPicture } from '@/sanity/sanity.utils';
import { PictureData } from '@/types/pictureData';
import Image from 'next/image';

export default async function Page({ params }: { params: { slug: string } }) {
    const picture: PictureData[] = await getPicture(params.slug);

    return (
        <div>
            {picture && (
                <Modal>
                <Image
                    src={picture[0].image.asset.url}
                    alt={picture[0].image.alt}
                    width={900}
                    height={900}
                />
                </Modal>
            )}
        </div>
    );
}
