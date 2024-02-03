import Modal from '@/app/components/Modal';
import PhotoCard from '@/app/components/PhotoModal';
import { getPicture } from '@/sanity/sanity.utils';
import { PictureData } from '@/types/pictureData';
import Image from 'next/image';

export default async function PhotoModal({
    params: { slug: photoId },
}: {
    params: { slug: string };
}) {
    const picture: PictureData[] = await getPicture(photoId);
    console.log(picture);
    return (
        <Modal>
            <PhotoCard photo={picture[0]} />
        </Modal>
    );
}
